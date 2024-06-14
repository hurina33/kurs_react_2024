import React, {FC} from 'react';
import {IPaginatedPageModel} from "../models/iPaginatedPageModel";

interface IProps{
    changePage:(action:string)=>void,
    prev:IPaginatedPageModel | null,
    next:IPaginatedPageModel | null
}
const PaginationComponent:FC<IProps> = ({changePage,prev,next}) => {
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