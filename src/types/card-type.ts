export type ICard = string[];

export interface ICardStack {
    id: string;
    label: string;
    cards: ICard[];
}

export type ICardGroup = ICardStack[];

export type ICardInfoKey = string;

export interface ICardInfos {
    [key: string]: ICardStack[];
}