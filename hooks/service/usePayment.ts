import {
  AddressForm,
  OrderCheckoutProduct,
  Address,
  OrderAddress,
} from "./../../types/order";
import { PayCompleteOrderForm } from "../../types/order";
import api from "../../lib/api/api";
import { useRouter } from "next/router";

function usePayment() {
  const router = useRouter();

  const payment = async (
    address: Address,
    products: OrderCheckoutProduct[]
  ) => {
    const { IMP } = window;
    try {
      IMP?.init(process.env.NEXT_PUBLIC_IAMPORT_ID as string);
      const orderNoRes = await api.post("/order/gen-orderNo");
      IMP?.request_pay(
        {
          pg: "html5_inicis",
          pay_method: "card",
          merchant_uid: orderNoRes.data,
          name: `${products[0].productName}`,
          amount: 100,
          buyer_email: "",
          buyer_name: address.receiver,
          buyer_tel: `${address.phone1}-${address.phone2}-${address.phone3}`,
          buyer_addr: address.address,
          buyer_postcode: address.zipCode,
        },
        async (rsp) => {
          if (rsp.success) {
            const payCompletePayload: PayCompleteOrderForm = {
              orderNo: orderNoRes.data,
              impUid: rsp.imp_uid as string,
              address,
              products: products.map((p) => ({
                count: p.count,
                productId: p.productId,
              })),
            };
            await api.post("/order/pay-complete", payCompletePayload);
            router.push(`/order/${orderNoRes.data}/success`);
          } else {
          }
        }
      );
    } catch (e) {
      console.error(e);
    }
  };

  return {
    payment,
  };
}

export default usePayment;
