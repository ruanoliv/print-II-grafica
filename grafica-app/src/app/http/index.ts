import axios, { AxiosInstance } from "axios";

export const httpClient: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 200000,
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE",
        "X-Requested-With": "XMLHttpRequest",
    }
})

