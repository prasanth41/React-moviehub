import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}
const axiosClient = axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: '7dfa8ec38b8446ec85e22e11c6e6a4ff'
    }
});

class ApiClient<T> {
    endpoint: string
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosClient.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);
    }
}

export default ApiClient;
