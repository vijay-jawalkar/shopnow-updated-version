import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { remove } from "../../../redux/slice/cartSlice";

export const CartCard = ({ product }) => {
  const dispatch = useDispatch();

  function handleRemoveCart(product) {
    dispatch(remove(product));
  }

  return (
    <div className="flex flex-wrap justify-between items-center border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex items-center ">
        <Link to={`products/${product.id}`}>
          <img className="w-24 rounded" src={product.image_local} alt="" />
        </Link>
        <div className="">
          <Link to={`products/${product.id}`}>
            <p className="text-lg ml-2 dark:text-slate-200">{product.name}</p>
          </Link>
          <button
            onClick={() => handleRemoveCart(product)}
            className="text-base ml-2 text-red-400"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="text-lg m-2 dark:text-slate-200">
        <span>₹ {product.price}</span>
      </div>
    </div>
  );
};
