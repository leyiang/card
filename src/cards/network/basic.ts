import { ICardStack } from "../../types/card-type";

export default {
    id: "network_basic",
    label: "网络基础知识",

    cards: [
        [`text:DNS recursive 和 iterative query \n 分别解释它们是什么`,
            `text:递归式(recursive): 把DNS请求交到下一个DNS服务器，让它来帮自己查询`,
            `text:迭代式(iterative):自己向各个服务器查询信息,比如先查负责(.com)的DNS服务器的地址,得到后再向(.com)的DNS发请求,所有的请求都自己来`,
            `image:network_dns_query_type.png[左下角host向local发送的就是recursive \n local dns 发送的就是iterative]`
        ],
    ]
} as ICardStack;