import { AxiosResponse } from "axios";
import baseApi from "../baseApi";
// import { Driver } from "@/interfaces/apiInterfaces";
export type Driver = any;

export type BookBusData = {
  from: string;       
  to: string; 
  travelDate: string;
}

export interface BookBusDataRes {
  id: number;
  from: string | null;
  to: string | null;
  travelDate: string;
  tripBookBy: string | null;
  passengerName: string | null;
  passengerMobile: string | null;
  passengerEmail: string | null;
  pickupAddress: string | null;
  dropAddress: string | null;
  acType: string | null;
  billTo: string | null;
  branchOffice: string | null;
  busType: string | null;
  driver: Driver | null;          // Assuming Driver interface exists
  flightNumber: string | null;
  perExtraHourRate: number;       // 0 indicates number, never null
  perExtraKmRate: number | null;
  pickupTime: string | null;
  rate: number | null;
  remarkForDriver: string | null;
  remarkForVendor: string | null;
  startFromGarageBefore: number;  // 0 or number, not null
  status: string;                 // Enum or string
  travelPackage: string | null;
}




export const bookBus = async (data: BookBusData): Promise<BookBusDataRes> => {
    const resp = await baseApi.post<BookBusDataRes>('/busbooking/register', data);
    return resp.data;
}
