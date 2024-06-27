import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T>{
    count: number,
    next:string | null,
    results: T[]
  }

  export interface FetchGameResponse{
    id: number,
    slug: string,
    description_raw: string,
    name:string

  }
const axiosInstance = axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: "29393e3e82ba4abda220b83c8f3131d8"
    }
})

class APIClient<T>{
    endpoint: string;

    constructor(endpoint : string){
        this.endpoint = endpoint;
    }

    get = (config: AxiosRequestConfig)=>{
       return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res=>res.data);
    }

    getDetails=(slug: string)=>{
        return axiosInstance.get<T>(this.endpoint+"/"+slug).then(res=>res.data)
    }

   
   


}

export default APIClient;
