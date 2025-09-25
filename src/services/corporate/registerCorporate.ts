import baseApi from "../baseApi";

export interface RegisterCorporateReq {
    companyName: string;
    companyLocation:string;
    companyAdminName: string;
    companyAdminMobileNumber: string;
    companyAdminEmailAddress: string;
    password: string;
    role:string;
}

export interface RegisterCorporateRes {
    id: number;
    companyName: string;
    companyLocation: string;
    companyAdminName: string;
    companyAdminMobileNumber: string;
    companyAdminEmailAddress: string;
}

export const registerCorporate = async (data: RegisterCorporateReq): Promise<RegisterCorporateRes> => {
    const response = await baseApi.post<RegisterCorporateRes>('/corporate/register', data);
    return response.data;
}