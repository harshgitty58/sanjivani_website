import baseApi from "../baseApi";

export type HotelBookData = {
    dealsType: string;
    location: string;
    checkInDate: string;
    checkOutDate: string;
    rooms: string;
    guests: string;
    pricePerNight: string;
}

export type HotelBookDataResp = {
    dealsType: string;
    location: string;
    checkInDate: string;
    checkOutDate: string;
    rooms: string;
    guests: string;
    pricePerNight: string;
}

export const bookCruise = async (data: HotelBookData): Promise<HotelBookDataResp> => {
    const resp = await baseApi.post<HotelBookDataResp>('/hotelBooking/register', data);
    return resp.data;
}