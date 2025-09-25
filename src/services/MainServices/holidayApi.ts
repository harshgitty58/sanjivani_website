import baseApi from "../baseApi";

export type HolidayBookData = {
    holidayType: string;
    from: string;
    to: string;
    departure: string;
    nights: string;
}

export type HolidayBookDataResp = {
    holidayType: string;
    from: string;
    to: string;
    departure: string;
    nights: string;
}

export const bookCruise = async (data: HolidayBookData): Promise<HolidayBookDataResp> => {
    const resp = await baseApi.post<HolidayBookDataResp>('/holidayBooking/register', data);
    return resp.data;
}