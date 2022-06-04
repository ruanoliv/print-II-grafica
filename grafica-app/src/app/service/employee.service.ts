import { httpClient } from "../http";
import { Employee } from "../model/employee";
import { AxiosResponse } from "axios";

const resourceURL: string = "api/employee"

export const useEmployeeService = () =>{

    const salvar = async (employee: Employee) : Promise<Employee> => {
        const response: AxiosResponse<Employee> = await httpClient.post<Employee>(resourceURL, employee)
        return response.data
    }

    return{
        salvar
    }
}