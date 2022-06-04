import { httpClient } from "../http";
import { Administrator } from "../model/administrator";
import { AxiosResponse } from "axios";

const resourceURL: string = "api/administrator"

export const useAdministratorService = () =>{

    const salvar = async (administrator: Administrator) : Promise<Administrator> => {
        const response: AxiosResponse<Administrator> = await httpClient.post<Administrator>(resourceURL, administrator)
        return response.data
    }

    return{
        salvar
    }
}