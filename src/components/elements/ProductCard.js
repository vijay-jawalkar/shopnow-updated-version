import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../redux/slice/cartSlice";

import { Rating } from "./Rating";

export const ProductCard = ({ product }) => {
  // const{cartList, addToCart, removeFromCart} = useCart();
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartState.cartList);
  const [inCart, setInCart] = useState(false);
  // const { id, title, description, price, image, rating } = product;
  const {
    id,
    name,
    long_description,
    price,
    image_local,
    rating,
    in_stock,
    best_seller,
   
  } = product;

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id);

    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);

  function handleAddToCart(product) {
    // addToCart(product);
    dispatch(add(product));
  }

  function handleRemoveCart(product) {
    // removeFromCart(product);
    dispatch(remove(product));
  }

  return (
    <div className="m-3 mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${id}`} className="relative">
        {best_seller && (
          <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
            Best Seller
          </span>
        )}

        <div class="bg-gray-200 h-64">
          <img
            src={image_local}
            className="mx-auto rounded-t-lg h-64"
            alt="product_image"
          />
        </div>
      </Link>
      <div className="p-5">
        <Link to={`/products/${id}`}>
          <h5 className="mb-2 text-2xl line-clamp-1 font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </Link>
        <p className="mb-3 font-normal line-clamp-3 text-gray-700 dark:text-gray-400">
          {long_description}
        </p>

        <div className="flex items-center my-2">
          <Rating rating={rating} />
        </div>

        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>₹</span>
            <span>{price}</span>
          </span>

          {inCart ? (
            <button
              onClick={() => handleRemoveCart(product)}
              className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${
                in_stock ? "" : "cursor-not-allowed"
              }`}
              disabled={product.in_stock ? "" : "disabled"}
            >
              Remove Item <i className="ml-1 bi bi-trash3"></i>
            </button>
          ) : (
            <button
              onClick={() => handleAddToCart(product)}
              className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${
                in_stock ? "" : "cursor-not-allowed"
              } `}
              disabled={product.in_stock ? "" : "disabled"}
            >
              Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
            </button>
          )}
        </p>
      </div>
    </div>
  );
};
