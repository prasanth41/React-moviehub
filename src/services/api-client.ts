import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: '7dfa8ec38b8446ec85e22e11c6e6a4ff'
    }
});

export default apiClient;

export interface FetchResponse<T> {
    count: number;
    results: T[];
}