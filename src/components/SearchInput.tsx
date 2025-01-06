import { useNavigate } from "@tanstack/react-router";
import Search, { SearchProps } from "antd/es/input/Search";

interface ISearchInput {
    inputValue?: string;
}

export function SearchInput({ inputValue = "" }: ISearchInput ) {
    // const navigate = useNavigate();
	const navigate = useNavigate();

    const onSearch: SearchProps['onSearch'] = (value) => {
		navigate({
			to: "/search",
		});
    }

    return (
        <Search
            className="w-[200px]"
            placeholder="Search card here"
            onSearch={onSearch}
            defaultValue={ inputValue }
        />
    )
}