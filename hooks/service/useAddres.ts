import api from "../../lib/api/api";
import { Address, AddressForm } from "../../types/address";
import useFetchAddressList from "../fetch/useFetchAddressList";
import useFetchCheckout from "../fetch/useFetchCheckout";

function useAddress() {
  const { mutate, addresses } = useFetchAddressList();
  const { mutate: checkoutMutate, checkout } = useFetchCheckout();

  const createAddress = async (form: AddressForm) => {
    try {
      await api.post<Address>("/addresses", form);
      checkoutMutate();
    } catch (e) {
      console.error(e);
    }
  };

  const deleteAddress = async (id: number) => {
    const isDelete = confirm("정말 삭제 하시겠습니까?");
    if (!isDelete) return;

    try {
      await api.delete(`/addresses/${id}`);
      mutate();
    } catch (e) {
      console.log(e);
    }
  };

  const selectAddress = async (id: number) => {
    const address = addresses?.find((a) => id === a.id);

    if (checkout && address) {
      checkoutMutate(
        {
          ...checkout,
          address,
        },
        false
      );
    }
  };

  return {
    createAddress,
    deleteAddress,
    selectAddress,
  };
}

export default useAddress;
