import baseApi from "../baseApi";

export interface RegisterVendorReq {
    name:string;
    location:string;
    mobileNumber:string;
    emailAddress:string;
    password:string;
}

export const registerVendor = async (vendor: RegisterVendorReq):Promise<string> =>{
    const resp = await baseApi.post<string>('/vendor/register',vendor);
    return resp.data;
} 