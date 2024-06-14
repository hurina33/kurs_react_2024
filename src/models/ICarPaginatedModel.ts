import {ICarWithAuth} from "./ICarWithAuth";
import {IPaginatedPageModel} from "./iPaginatedPageModel";

export interface ICarPaginatedModel {
    total_items: number,
    total_pages: number,
    prev: IPaginatedPageModel | null,
    next: IPaginatedPageModel | null,
    items: ICarWithAuth[]
}