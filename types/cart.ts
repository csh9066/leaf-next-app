export interface CartInfo {
  productCount: number;
  selectedProductCount: number;
  totalPrice: number;
  totalDeliveryFee: number;
}

export interface ByBrand {
  brandId: number;
  brandName: string;
  items: CartItem[];
}

export interface CartItem {
  productId: number;
  productName: string;
  price: number;
  count: number;
  cartItemId: number;
  checked: boolean;
}

export interface CheckCartItem {
  [id: number]: boolean;
}

export interface CartCheckout {
  delivery: any;
  items: any[];
  deliveryFee: number;
  productsPrice: number;
  totalPrice: number;
}
