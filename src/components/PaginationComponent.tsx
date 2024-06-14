import React, {FC} from 'react';
import {IPaginatedPageModel} from "../models/iPaginatedPageModel";
import {useSearchParams} from "react-router-dom";

interface IProps{
    prev:IPaginatedPageModel | null,
    next:IPaginatedPageModel | null
}
const PaginationComponent:FC<IProps> = ({prev,next}) => {
    const [query, setQuery] = useSearchParams({page: '1'})
    const changePage = (action: string) => {
        switch (action) {
            case 'prev':
                setQuery({...prev});
                break;
            case 'next':
                setQuery({...next});
                break;
        }
    }

    return (
        <div>
            <button
                onClick={()=>
                {changePage('prev');
                }}
                disabled={!prev}
            >prev
            </button>

            <button
                onClick={()=>
                {changePage('next');
                }}
                disabled={!next}
            >next
            </button>
        </div>
    );
};

export default PaginationComponent;