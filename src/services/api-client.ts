import axios, { AxiosRequestConfig } from "axios";

 export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];

}


const axiosInstance = axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '96d3c9cca76746f29db78fa42a37d8df'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
       
       return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);
    }
    get = (id: number | string) => {
        return axiosInstance
        .get<T>(this.endpoint + '/' + id)
        .then(res => res.data);

    };

}

export default APIClient;