import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {IPaginatedPageModel} from "../models/iPaginatedPageModel";
import {carService} from "../services/api-service";
import {ICarWithAuth} from "../models/ICarWithAuth";

interface IProps{
    cars:ICarWithAuth[]
}
const CarsComponent:FC<IProps> = ({cars}) => {


    return (
        <div>
            {
                cars.map(car=><div key={car.id}>{car.brand} {car.year}</div>)
            }
        </div>
    );
};

export default CarsComponent;