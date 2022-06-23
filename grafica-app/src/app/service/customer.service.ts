import { httpClient } from "../http";
import { Customer } from "../model/customer";
import { AxiosResponse } from "axios";

const resourceURL: string = "api/customer"

export const useCustomerService = () =>{

    const salvar = async (customer: Customer) : Promise<Customer> => {
        console.log(customer)
        const response: AxiosResponse<Customer> = await httpClient.post<Customer>(resourceURL, customer)
        return response.data
    }

    const listar = async () : Promise<Customer[]> => {
        const response: AxiosResponse<Customer[]> = await httpClient.get(resourceURL)
        return response.data
    }

    return{
        salvar,
        listar
    }
}