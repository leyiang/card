import { ICardInfos } from "../types/card-type";
import basic from "./math/basic";
import basic_func from "./math/basic_func";
import NetworkBasic from "./network/basic";
import key from "./math/key";
import linear from "./math/linear";
import intuitive from "./math/intuitive";
import trig from "./math/trig";

export const CardInfos = {
    math: [
        basic,
        key,
        basic_func,
        linear,
        intuitive,
        trig,
    ],
    network: [
        NetworkBasic
    ]
} as ICardInfos;