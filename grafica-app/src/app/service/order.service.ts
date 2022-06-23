import { httpClient } from "../http";
import { Order } from "../model/order";
import { AxiosResponse } from "axios";

const resourceURL: string = "api/order"

export const useOrderService = () =>{

    const salvar = async (order: Order) : Promise<Order> => {
        const response: AxiosResponse<Order> = await httpClient.post<Order>(resourceURL, order)
        return response.data
    }

    const atualizar = async (order: Order) : Promise<void> => {
        const url: string = `${resourceURL}/${order.id}` 
        await httpClient.put<Order>(url, order)
    }

    const carregarProduto = async (id) : Promise<Order> => {
        const url: string = `${resourceURL}/${id}`
        const response: AxiosResponse<Order> = await httpClient.get(url);
        return response.data;
    }

    const deletar = async (id) : Promise<void> => {
        const url: string = `${resourceURL}/${id}`
        await httpClient.delete(url)
    }

    const listar = async () : Promise<Order[]> => {
        const response: AxiosResponse<Order[]> = await httpClient.get(resourceURL)
        return response.data
    }

    return {
        salvar,
        atualizar,
        carregarProduto,
        deletar,
        listar
    }
}