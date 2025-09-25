import baseApi from "../baseApi";

export type VisaBookData = {
    destination: string;
    departure: string;
    returnDate: string;
}

export type VisaBookDataResp = {
    destination: string;
    departure: string;
    returnDate: string;
}

export const bookCruise = async (data: VisaBookData): Promise<VisaBookDataResp> => {
    const resp = await baseApi.post<VisaBookDataResp>('/visaBooking/register', data);
    return resp.data;
}