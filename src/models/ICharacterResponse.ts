import {ICharacterModel} from "./ICharacterModel";

export interface ICharacterResponse {
    info: {
        count: number,
        pages: number
        next: string | null;
        prev: string | null
    }
    results: ICharacterModel[],
}