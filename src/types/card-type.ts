import { iCard } from "../models/Card";

export type id = string | number;

export interface ICardStack {
    id: string;
    label: string;
    cards: iCard[];
}

export type ICardGroup = ICardStack[];

export type ICardInfoKey = string;

export interface ICardInfos {
    [key: string]: ICardStack[];
}