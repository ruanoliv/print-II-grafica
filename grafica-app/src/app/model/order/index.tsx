export interface Order{
    id?: string;
    description?: string;
    name?: string;
    dateDeliver?: string;
    dateOrder?: string;
    price?: number;
    type?: string;
}

const order: Order = {}