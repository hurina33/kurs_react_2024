import React, {useEffect, useState} from 'react';
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {carService} from "../services/api-service";
import {useSearchParams} from "react-router-dom";
import CarsComponent from "../components/CarsComponent";
import PaginationComponent from "../components/PaginationComponent";

const CarsPage = () => {

    const [cars, setCars] = useState<ICarPaginatedModel>({
        total_items: 0,
        total_pages: 0,
        prev: null,
        next: null,
        items: []
    })

    const [query, setQuery] = useSearchParams({page: '1'})

    useEffect(() => {
        carService
            .getCars(query.get('page') || '1')
            .then(value => {
                if (value) {
                    setCars(value)
                }
            })
    }, [query]);



    return (
        <div>
           <CarsComponent cars={cars.items}/>
            <PaginationComponent prev={cars.prev} next={cars.next}/>
        </div>
    );
};

export default CarsPage;