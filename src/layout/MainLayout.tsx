import React, {useEffect, useState} from 'react';
import PaginationComponent from "../component/PaginationComponent";
import CharactersComponent from "../component/CharactersComponent";
import {useSearchParams} from "react-router-dom";
import {ICharacterModel} from "../models/ICharacterModel";
import {characterService} from "../services/api-service";
import {ICharacterResponse} from "../models/ICharacterResponse";

const MainLayout = () => {
    const[query, setQuery] = useSearchParams({page:'1'})

    const [charactersResponseState, setCharaktersResponseState] = useState<ICharacterResponse>({
        info: {
            count: 0,
            pages: 0,
            next: null,
            prev: null
        },
        results: []
    });

    useEffect(() => {
        const currentPage = query.get('page') || '1'
        characterService
            .getAll(currentPage)
            .then(value => setCharaktersResponseState(value.data))
    }, [query]);

    return (
        <div>
            <CharactersComponent characters={charactersResponseState.results}/>
            <PaginationComponent prev={charactersResponseState.info.prev} next={charactersResponseState.info.next}/>
        </div>
    );
};

export default MainLayout;