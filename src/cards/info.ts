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
import integral from "./math/integral";
import linear_trick from "./math/linear_trick";
import diff_equation from "./math/diff_equation";
import trick from "./math/trick";

export const CardInfos = {
    math: [
        basic,
        integral,
        linear_trick,
        key,
        basic_func,
        linear,
        intuitive,
        trig,
        trick,
        limits,
        derivative,
        diff_equation,
    ],
    network: [
        NetworkBasic
    ],

    phl: [
        PhlkBasic
    ],
} as ICardInfos;