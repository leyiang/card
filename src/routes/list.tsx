import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useState, useRef } from 'react';
import { api } from '../axios-instrance';
import { Card } from '../models/Card';
import { RenderCard } from '../components/RenderCard';
import { Group } from '../models/Group';
import { Stack } from '../models/Stack';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { Spinner } from '../components/Spinner';

interface PaginationMeta {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
}

interface PaginationLinks {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
}

interface CardResponse {
    data: any[];
    links: PaginationLinks;
    meta: PaginationMeta;
}

export const Route = createFileRoute('/list')({
    component: ListRoute,
    validateSearch: (search: Record<string, unknown>) => {
        return {
            group: search.group as string,
            stack: search.stack as string,
        };
    }
});

function ListRoute() {
    const navigate = useNavigate();
    const search = useSearch({ from: '/list' });

	const groupSlug = search.group ?? "math";
	const stackSlug = search.stack ?? "math_basic";

	console.log( groupSlug, stackSlug );
	

    const [cards, setCards] = useState<Card[]>([]);
    const [groups, setGroups] = useState<Group[]>([]);
    const [stacks, setStacks] = useState<Stack[]>([]);
    
    const [groupPointer, setGroupPointer] = useState<number>(0);
    const [stackPointer, setStackPointer] = useState<number>(0);
	const [isUserAction, setIsUserAction] = useState(false);
    const [page, setPage] = useState(1);
    const [meta, setMeta] = useState<PaginationMeta | null>(null);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const loadMoreRef = useRef<HTMLDivElement>(null);
    const [errorCount, setErrorCount] = useState(0);
    const MAX_RETRIES = 3;
    const [totalCards, setTotalCards] = useState<number>(0);

	/**
	 * 获取所有Group
	 */
    useEffect(() => {
        const controller = new AbortController();

        api.get(`/group`, {
            signal: controller.signal
        }).then(res => {
            const rawGroupList = res.data.data;
            const groupList = rawGroupList.map((raw: any) => Group.Load(raw));
            setGroups(groupList);
			
			// 在这设置Poniter?
        });

        return () => {
            controller.abort();
        };
    }, []);

	/**
	 * 当groupSlug改变时，获取所有Stack
	 * 什么时候groupSlug会改变？
	 * 
	 * 1. 初始, groupSlug 来自URL或默认
	 * 2. 用户操作Select时会触发navigate, groupSlug会改变
 	 */
	useEffect(() => {
        const controller = new AbortController();

		api.get(`/group/${groupSlug}/stack`, {
            signal: controller.signal
        }).then(res => {
			const rawStackList = res.data.data;
			const stackList = rawStackList.map((raw: any) => Stack.Load(raw));
			setStacks(stackList);
		});

        return () => {
            controller.abort();
        };
	}, [groupSlug]);

	/**
	 * 当用户切换Group或Stack时，更新URL的slug
	 * 这样刷新时，保持上一次浏览的Group和Stack
	 *
	 * navigate 不会刷新页面
	 * 它会触发search的更新
	 * 监听 groupSlug 和 stackSlug 的useEffect也会触发
	 */
    useEffect(() => {
		if( ! isUserAction ) return;

        const group = groups[groupPointer];
        const stack = stacks[stackPointer];
        
        if (group && stack) {
            setPage(1);
            setCards([]);
            setHasMore(true);

            navigate({
                search: {
                    group: group.slug,
                    stack: stack.slug
                }
            });

			setIsUserAction(false);
        }
    }, [groupPointer, stackPointer]);

	/**
	 * 获取Stack对应的Cards
	 * 
	 * 1. Page Load时触发 (URL slug 或 默认值)
	 * 2. 用户操作Select时, 触发navigate, 接着触发stackSlug的useEffect
	 */
    useEffect(() => {
        if (!loadMoreRef.current || !hasMore || loading) return;

        const observer = new IntersectionObserver(
            entries => {
                const first = entries[0];
                if (first.isIntersecting && hasMore && !loading) {
                    loadMoreCards();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(loadMoreRef.current);

        return () => {
            observer.disconnect();
        };
    }, [hasMore, loading, stackSlug]);

    async function loadMoreCards() {
        if (loading || !hasMore || !stackSlug) return;
        if (errorCount >= MAX_RETRIES) {
            setHasMore(false);  // Stop trying after max retries
            return;
        }

        setLoading(true);

        try {
            const res = await api.get(`/stack/${stackSlug}/card`, {
                params: { page: page }
            });
            
			console.log( res.data.total_cards, res.data );
			
			/**
			 * 暂时返回
			 * 	{
			 * 		total_cards: number,
			 * 		cards: {
			 * 			data: Card[],
			 * 			links: PaginationLinks,
			 * 			meta: PaginationMeta
			 * 		}
			 *  }
			 */
            const newCards = res.data.cards.data.map((raw: any) => Card.Load(raw));
            setCards(prev => [...prev, ...newCards]);
            setMeta(res.data.cards.meta);
            setTotalCards(res.data.total_cards);
            setPage(p => p + 1);
            setHasMore((page + 1) < res.data.meta.last_page);
            setErrorCount(0);  // Reset error count on success
        } catch (error) {
            console.error('Failed to load more cards:', error);
            setErrorCount(count => count + 1);  // Increment error count
        } finally {
            setLoading(false);
        }
    }

    // Reset error count when stack changes
    useEffect(() => {
        setErrorCount(0);
    }, [stackSlug]);

    return (
        <div className="h-screen overflow-hidden flex flex-col">
			{ cards.length  }
            <div className="p-4 flex items-center gap-4">
                <h1 className="text-3xl font-bold">Card List</h1>
                <span className="text-gray-600">
                    Total: {totalCards} cards
                </span>
                <select 
                    value={groupPointer}
                    onChange={e => {
						setGroupPointer(Number(e.target.value));
						setIsUserAction(true);
					}}
                    className="border rounded px-2 py-1"
                >
                    {groups.map((group, index) => (
                        <option key={group.slug} value={index}>
                            {group.name}
                        </option>
                    ))}
                </select>

                <select 
                    value={stackPointer}
                    onChange={e => {
						setStackPointer(Number(e.target.value));
						setIsUserAction(true);
					}}
                    className="border rounded px-2 py-1"
                >
                    {stacks.map((stack, index) => (
                        <option key={stack.slug} value={index}>
                            {stack.name}
                        </option>
                    ))}
                </select>

                {groups[groupPointer] && stacks[stackPointer] && (
                    <Link
                        to="/learn"
                        search={{
                            group: groups[groupPointer].slug,
                            stack: stacks[stackPointer].slug
                        }}
                        className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Learn
                    </Link>
                )}
            </div>
            
            <div 
                ref={containerRef}
                className="flex-1 overflow-auto px-4 pb-8"
            >
                <div className="flex gap-2 flex-wrap justify-center">
                    {cards.map((card) => (
                        <Link
                            to="/edit/$id"
                            params={{
                                id: card.id.toString()
                            }}
                            search={{
                                index: '0'
                            }}
                            key={card.id}
                        >
                            <RenderCard 
                                card={card}
                                noInteraction
                                compact
                            />
                        </Link>
                    ))}
                </div>

                {loading && (
                    <div className="flex justify-center py-4">
                        <Spinner className="w-6 h-6 text-blue-500" />
                    </div>
                )}

                <div ref={loadMoreRef} className="h-4" />
            </div>
        </div>
    );
} 