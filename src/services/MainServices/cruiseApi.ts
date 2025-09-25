import baseApi from "../baseApi";

export type FlightBookData = {
    cruisingTo: string;
    travelMonth: string;
}

export type FlightBookDataResp = {
    id: string;
    cruisingTo: string;
    travelMonth: string;
}

export const bookCruise = async (data: FlightBookData): Promise<FlightBookDataResp> => {
    const resp = await baseApi.post<FlightBookDataResp>('/cruiseBooking/register', data);
    return resp.data;
}