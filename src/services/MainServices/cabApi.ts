import baseApi from "../baseApi";

export type CabBookData = {
  tripType: string;
  start: string;
  destination?: string;
  pickupDate: string;
  dropDate?: string;
  pickupTime: string;
  dropTime?: string;
  travelPackage?: string;
}


export interface CabBookingResp {
  id: number;
  tripType: string;
  start: string;
  destination?: string | null;
  travelPackage?: string | null;
  pickupDate: string;
  pickupTime: string;
  dropDate?: string | null;
  dropTime?: string | null;
  tripBookBy: string;
  passengerName: string;
  passengerMobileNumber: string;
  passengerEmailAddress?: string | null;
  startFromGarage?: number | null;
  pickupAddress: string;
  dropAddress: string;
  branchOffice?: string | null;
  billTo: string;
  rate: number;
  perExtraKmRate: number;
  perExtraHourRate: number;
  remarkForVendor?: string | null;
  remarkForDriver?: string | null;
  passengerId?: number | null;
  driverId?: number | null;
  status?: string | null;
  flightNumber?: string | null;
}


export const bookCab = async (data:CabBookData): Promise<CabBookingResp> =>{
    const resp = await baseApi.post<CabBookingResp>('/cabbooking/register' ,data);
    return resp.data;
}