export interface Order{
    id: number;
    description: string;
    name: string;
    dateDeliver: string;
    price: number;
    type: string;
}

const order: Order = {}