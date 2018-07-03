import { Error } from '../dstore/services/errno';

export enum Payment {
  WeChat = 1,
  AliPay,
  PayPal,
}
export interface PayReq {
  appName: string;
  amount: number;
  appStore: string;
  userID?: number;
}
export interface PayResp {
  tradeID: string;
  url: string;
  shortURL: string;
  error: Error;
}

export interface PayCheck {
  isPaying: boolean;
  isExist: boolean;
}
