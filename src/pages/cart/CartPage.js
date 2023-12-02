import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";

import { useSelector } from "react-redux";
import { useTitle } from "../hooks/useTitle";

export const CartPage = () => {
  const cartList = useSelector((state) => state.cartState.cartList);

  useTitle(`Cart ${cartList.length}`);

  return <main>{cartList.length ? <CartList /> : <CartEmpty />}</main>;
};
