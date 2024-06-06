import {ICarWithAuth} from "./ICarWithAuth";

export interface ICarPaginatedModel{
    total_items: string,
    total_pages: string,
    prev: string,
    next: string,
    items: ICarWithAuth[]
}