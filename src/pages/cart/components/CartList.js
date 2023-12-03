import { useState, useEffect } from "react";

import { CartCard } from "./CartCard";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser, createOrder } from "../../../services";

export const CartList = () => {
  const cartList = useSelector((state) => state.cartState.cartList);
  const total = useSelector((state) => state.cartState.total);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await getUser();
        setUser(data);
      } catch (error) {
        toast(error.message, { closeButton: true, position: "bottom-center" });
      }
    }

    fetchUser();
    // console.log(user)
  }, []);

  async function handleOrder() {
    try {
      const data = await createOrder(cartList, total, user);
      console.log(data);
      //  dispatch(clearCart())
      // navigate("/order-summary", {state: {data: data, status:true}})
    } catch (error) {
      toast(error.message, { closeButton: true, position: "bottom-center" });
      // navigate("/order-summary", {state: {status:false}})
    }
  }

  const paymentHandler = async (e) => {
    const response = await fetch(`${process.env.REACT_APP_HOST}/payment/orders`, {
      method: "POST",
      body: JSON.stringify({
        amount: total * 100,
        currency: "INR",
        receipt: "receipt#1",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const order = await response.json();
    console.log(order); // this will have order id from server

    var options = {
      key: "rzp_test_t1hyVZMkdVQxgD", // Enter the Key ID generated from the Dashboard
      amount: total * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        // this handler function will run after done payment
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)

        const body = {
          ...response,
        };

        const validateResponse = await fetch(
          `${process.env.REACT_APP_HOST}/payment/validate`,
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const jsonResponse = await validateResponse.json();
        console.log(jsonResponse);
        if (jsonResponse.message === "Successfull") {
          handleOrder();
          navigate("/success", {
            state: {
              orderId: jsonResponse.orderId,
              paymentId: jsonResponse.paymentId,
            },
          });
        }
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: user.name, //your customer's name
        email: user.email,
        // "contact": "6265789954"  //Provide the customer's phone number for better conversion rates
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();

    e.preventDefault();
  };

  return (
    <>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Cart : {cartList.length}
        </p>
      </section>

      <section>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>

      <section className="max-w-4xl m-auto">
        <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
          <p className="flex justify-between my-2">
            <span className="font-semibold">Total Amount:</span>
            <span>₹ {total} </span>
          </p>
        </div>

        <div className="text-right my-5">
          <button
            onClick={paymentHandler}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
          </button>
        </div>
      </section>
    </>
  );
};
