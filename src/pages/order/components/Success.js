import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getUser } from "../../../services";
import { useTitle } from "../../hooks/useTitle";

import { clearCart } from "../../../redux/slice/cartSlice";
import { useDispatch } from "react-redux";

export const Success = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const { state } = useLocation();

  useTitle("Order Successfull");

  async function fetchUser() {
    try {
      const data = await getUser();
      setUser(data);
    } catch (error) {
      toast(error.message, { closeButton: true, position: "bottom-center" });
    }
  }

  useEffect(() => {
    fetchUser();

    dispatch(clearCart());
  }, []); // eslint-disable-line
  return (
    <main>
      <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700 rounded">
        <div className="my-5">
          <p className="bi bi-check-circle text-green-600 text-7xl mb-5"></p>
          <p>Thank you {user.name} for order!</p>
          <p>Your Order ID: {state.orderId}</p>
        </div>
        <div className="my-5">
          <p>Your order is confirmed.</p>
          <p>Please check your mail {user.email} for the Order Details.</p>
          <p className="my-5">Payment ID: {state.paymentId} </p>
        </div>
        <Link
          to="/products"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
        >
          Continue Shopping <i className="ml-2 bi bi-cart"></i>
        </Link>
      </section>
    </main>
  );
};
