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
import diff_equation from "./math/diff_equation";
import trick from "./math/trick";
import multi_var from "./math/multi_var";

export const CardInfos = {
    math: [
        basic,
        trig,
        linear,
        key,
        basic_func,
        limits,
        integral,
        diff_equation,
        multi_var,
        trick,
        intuitive,
        derivative,
    ],
    network: [
        NetworkBasic
    ],

    phl: [
        PhlkBasic
    ],
} as ICardInfos;