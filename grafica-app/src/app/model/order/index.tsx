import { Administrator } from "../administrator";
import { Customer } from "../customer";

export interface Order{
    id?: string;
    description?: string;
    name?: string;
    dateDeliver?: Date;
    dateOrder?: string;
    price?: number;
    type?: string;
    administratorId?: number;
    customerId?: number;
}

const order: Order = {}