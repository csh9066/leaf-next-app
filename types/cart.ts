export interface Cart {
  itemCount: number;
  byBrands: CartByBrand[];
}

export interface CartByBrand {
  brandId: number;
  brandName: string;
  products: CartProduct[];
}

export interface CartProduct {
  productId: number;
  stock: number;
  price: number;
  image: string;
  checked: boolean;
}
