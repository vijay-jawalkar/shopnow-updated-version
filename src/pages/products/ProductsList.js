import { useState, useEffect } from "react";
import { useLocation} from "react-router-dom";
import { toast } from "react-toastify";
import { ProductCard } from "../../components";
import { FilterBar } from "./components/FilterBar";
import { initialProductList } from "../../redux/slice/filterSlice";
import { useDispatch, useSelector } from "react-redux";

import { getProductList } from "../../services";
import { useTitle } from "../hooks/useTitle";

import CardSkeleton from "../../components/CardSkeleton";


export const ProductsList = () => {
  // const { productsList, initialProductList } = useFilter();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.filterState)

  const [ productList, setProductList ] = useState([]);  //eslint-disable-line
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
 
  // const [products, setProducts] = useState([]);
  const search  = useLocation().search;
  

  const searchTerm = new URLSearchParams(search).get("q");

  

  useTitle("Explore Exciting Collection");

  useEffect(() => {
    async function fetchProducts() {

    try{
      const data = await getProductList(searchTerm);
      // initialProductList(data);
      dispatch(initialProductList(data))
      setProductList(data)
      setIsLoading(false)
    }catch(error){
      toast(error.message, {closeButton : true, position: "bottom-center"});
    }
    
     
    }
    fetchProducts();
  }, [searchTerm]); //eslint-disable-line

  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            Total Items : {state.productsList.length}
          </span>
          <span>
            <button
              onClick={() => setShow(!show)}
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>
        <div className="flex flex-wrap justify-center lg:flex-row">

        {
          isLoading && (
            <>
          <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            
            </>
           
          )
        }

       

          {state.productsList.length ? state.productsList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        :
        <span></span>
        }
        </div>

      </section>

      {show && <FilterBar setShow={setShow} />}
    </main>
  );
};
