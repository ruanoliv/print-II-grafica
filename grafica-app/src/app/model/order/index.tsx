import { Administrator } from "../administrator";
import { Customer } from "../customer";

export interface Order{
    id?: string;
    description?: string;
    name?: string;
    dateDeliver?: string;
    dateOrder?: string;
    price?: number;
    type?: string;
    administratorId?: number;
    customerId?: number;
}

const order: Order = {}