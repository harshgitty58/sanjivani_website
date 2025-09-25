import baseApi from "./baseApi";

export interface LoginRequest {
    mobileNumber:string,
    password:string,
}

export interface AuthResponse {
    token:string;
    roles:string[];
}

export const login = async (data:LoginRequest):Promise<AuthResponse> =>{
    const response = await baseApi.post<AuthResponse>('/login' , data);
    return response.data;
}