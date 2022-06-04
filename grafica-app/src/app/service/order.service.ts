import { httpClient } from "../http";
import { Order } from "../model/order";
import { AxiosResponse } from "axios";

const resourceURL: string = "api/order"

export const useOrderService = () =>{

    const salvar = async (order: Order) : Promise<Order> => {
        const response: AxiosResponse<Order> = await httpClient.post<Order>(resourceURL, order)
        return response.data
    }

    return{
        salvar
    }
}