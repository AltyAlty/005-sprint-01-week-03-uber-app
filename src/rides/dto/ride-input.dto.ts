import { Currency } from '../types/ride';

/*DTO для входных данных по поездкам.*/
export type RideInputDto = {
  clientName: string;
  price: number;
  currency: Currency;
  driverId: string;
  fromAddress: string;
  toAddress: string;
};
