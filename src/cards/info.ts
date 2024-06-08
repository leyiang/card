import { ICardInfos } from "../types/card-type";
import basic from "./math/basic";
import NetworkBasic from "./network/basic";
import key from "./math/key";

export const CardInfos = {
    math: [
        basic,
        key,
    ],
    network: [
        NetworkBasic
    ]
} as ICardInfos;