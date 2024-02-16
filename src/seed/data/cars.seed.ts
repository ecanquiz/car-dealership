import {v4 as uuid} from "uuid"
import { Car } from "src/cars/interfaces/car.interface";

export const CARDS_SEED: Car[] =[
    {
        id: uuid(),
        brand: "Toyota",
        model: "Corrolla"
    },
    {
        id: uuid(),
        brand: "Honda",
        model: "Civic"
    },
    {
        id: uuid(),
        brand: "Jeep",
        model: "Cherokee"
    }
]