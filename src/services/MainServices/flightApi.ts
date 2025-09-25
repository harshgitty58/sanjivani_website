import baseApi from "../baseApi";

export type FlightBookData = {
    flightType: string;
    from: string;
    to: string;
    departure: string;
    flightReturn: string;
    class: string;
    specialFare: string,
}

export type FlightBookDataRes = {
    id:string;
    flightType: string;
    from: string;
    to: string;
    departure: string;
    flightReturn: string;
    class: string;
    specialFare: string,
}

export const bookFlight = async (data: FlightBookData): Promise<FlightBookDataRes> => {
    const resp = await baseApi.post<FlightBookDataRes>('/flightBooking/register', data);
    return resp.data;
}