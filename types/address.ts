export interface Address {
  id: number;
  receiver: string;
  address: string;
  extraAddress: string;
  mainPhone1: string;
  mainPhone2: string;
  mainPhone3: string;
  subPhone1?: string;
  subPhone2?: string;
  subPhone3?: string;
  zipCode: string;
  isDefaultAddress: boolean;
}

export type AddressForm = Omit<Address, "id">;
