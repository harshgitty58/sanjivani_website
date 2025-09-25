import baseApi from "../baseApi";

export type bookTrainData = {
    trainAction: string;
    from: string;
    to: string;
    travelDate: string;
    class: string;
    pnr: string;
}

export type bookTrainDataRes = {
    id:string;
    trainAction: string;
    from: string;
    to: string;
    travelDate: string;
    class: string;
    pnr: string;
}


export const bookTrain = async (data: bookTrainData): Promise<bookTrainDataRes> => {
    const resp = await baseApi.post<bookTrainDataRes>('/trainBooking/register', data);
    return resp.data;
}