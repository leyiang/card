import { ICardInfos } from "../types/card-type";
import basic from "./math/basic";
import basic_func from "./math/basic_func";
import NetworkBasic from "./network/basic";
import PhlkBasic from "./phl/basic";
import key from "./math/key";
import linear from "./math/linear";
import intuitive from "./math/intuitive";
import trig from "./math/trig";
import limits from "./math/limits";
import derivative from "./math/derivative";

export const CardInfos = {
    math: [
        basic,
        key,
        basic_func,
        linear,
        intuitive,
        trig,
        limits,
        derivative
    ],
    network: [
        NetworkBasic
    ],

    phl: [
        PhlkBasic
    ],
} as ICardInfos;