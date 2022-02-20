import { RequestPayParams } from "iamport-typings";
import { Address, AddressForm } from "./address";

export type OrderStatus = "PAY_PENDING" | "PAY_COMPLETE" | "ORDER_CANCEL";

// chekout

export interface OrderCheckoutProduct {
  productId: number;
  productName: string;
  purchasePrice: number;
  price: number;
  count: number;
  brandId: number;
  brandName: string;
}

export interface OrderCheckout {
  address: Address | null;
  products: OrderCheckoutProduct[];
  deliveryFee: number;
  paymentPrice: number;
  productsPrice: number;
}

export interface PayCompleteOrderProduct {
  productId: number;
  count: number;
}

export interface PayCompleteOrderForm {
  orderNo: string;
  impUid: string;
  address: Address | AddressForm;
  products: PayCompleteOrderProduct[];
}

// order

export interface OrderAddress {
  receiver: string;
  address: string;
  extraAddress: string;
  zipCode: string;
  phone1: string;
  phone2: string;
  phone3: string;
}

export interface OrderItem {
  id: number;
  orderNo: string;
  orderStatus: OrderStatus;
  brandName: string;
  brandId: number;
  productId: number;
  productName: string;
  count: number;
  amount: number;
}

export interface OrderDetail {
  orderNo: string;
  orderDate: Date;
  payment: RequestPayParams;
  address: OrderAddress;
  items: OrderItem[];
}
