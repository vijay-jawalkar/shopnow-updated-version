// import { useFilter } from "../../../context/FilterContext";
import {  setSortBy, setRatings, categories, setBestSeller, setInStock, clearFilter } from "../../../redux/slice/filterSlice";
import { useDispatch, useSelector } from "react-redux";
export const FilterBar = ({ setShow }) => {
  // const { state, dispatch } = useFilter();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.filterState);

  function setClearFilter(){
    dispatch(clearFilter()) 
    setShow(false)
  }

  return (
    <section className="filter">
      <div
        id="drawer-disable-body-scrolling"
        className={`fixed z-40 h-screen p-5 overflow-y-auto bg-white w-72 dark:bg-zinc-900 transition-transhtmlForm left-0 top-0 transhtmlForm-none`}
        tabIndex="-1"
        aria-labelledby="drawer-disable-body-scrolling-label"
        aria-modal="true"
        role="dialog"
      >
        <h5
          id="drawer-disable-body-scrolling-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-zinc-100"
        >
          Filters
        </h5>
        <button
          onClick={() => setShow(false)}
          type="button"
          data-drawer-dismiss="drawer-disable-body-scrolling"
          aria-controls="drawer-disable-body-scrolling"
          className="dark:text-zinc-100 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close Filters</span>
        </button>
        <div className="border-b pb-3"></div>
        <div className="py-4 overflow-y-auto">
          <ul className="text-slate-700 dark:text-slate-100">
            <li className="mt-1 mb-5">
              <p className="font-semibold my-1">Sort by</p>
              <div className="flex items-center my-1">
                <input
                  id="price-sort-1"
                  onChange={() =>
                    dispatch(setSortBy("lowtohigh"))
                  }
                  type="radio"
                  checked={state.sortBy === "lowtohigh" || false}
                  value=""
                  name="price-sort"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="price-sort-1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Price - Low to High
                </label>
              </div>
              <div className="flex items-center my-1">
                <input
                  id="price-sort-2"
                  onChange={() =>
                    dispatch(setSortBy("hightolow"))
                  }
                  type="radio"
                  checked={state.sortBy === "hightolow" || false}
                  value=""
                  name="price-sort"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="price-sort-2"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Price - High to Low
                </label>
              </div>
            </li>
            <li className="mt-1 mb-5">
              <span className="font-semibold">Rating</span>
              <div className="flex items-center my-1">
                <input
                  id="rating-sort-1"
                  onChange={() =>
                    dispatch(setRatings("4STARSABOVE"))
                  }
                  type="radio"
                  value=""
                  checked={state.ratings === "4STARSABOVE" || false}
                  name="rating-sort"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="rating-sort-1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  4 Stars & Above
                </label>
              </div>
              <div className="flex items-center my-1">
                <input
                  id="rating-sort-2"
                  onChange={() =>
                    dispatch(setRatings("3STARSABOVE"))
                  }
                  type="radio"
                  checked={state.ratings === "3STARSABOVE" || false}
                  value=""
                  name="rating-sort"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="rating-sort-2"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  3 Stars & Above
                </label>
              </div>
              <div className="flex items-center my-1">
                <input
                  id="rating-sort-3"
                  onChange={() =>
                    dispatch(setRatings("2STARSABOVE"))
                  }
                  type="radio"
                  checked={state.ratings === "2STARSABOVE" || false}
                  value=""
                  name="rating-sort"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="rating-sort-3"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  2 Stars & Above
                </label>
              </div>
              <div className="flex items-center my-1">
                <input
                  id="rating-sort-4"
                  onChange={() =>
                    dispatch(setRatings("1STARSABOVE"))
                  }
                  type="radio"
                  checked={state.ratings === "1STARSABOVE" || false}
                  value=""
                  name="rating-sort"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="rating-sort-4"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  1 Stars & Above
                </label>
              </div>
            </li>

            {/* category */}
            <li className="mt-1 mb-5">
              <span className="font-semibold">Category</span>
              <div className="flex items-center my-1">
                <input
                  onChange = { () => dispatch(categories("mobile"))}
                  id="mobile"
                  type="radio"
                  checked = {state.category === "mobile" || false}
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="mobile"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Mobile
                </label>
              </div>
              <div className="flex items-center my-1">
                <input
                    onChange = { () => dispatch(categories("laptop"))}
                  id="laptop"
                  type="radio"
                  checked = {state.category === "laptop" || false}
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="laptop"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Laptop
                </label>
              </div>

              <div className="flex items-center my-1">
                <input
                    onChange = { () => dispatch(categories("headphone"))}
                  id="headphone"
                  type="radio"
                  checked = {state.category === "headphone" || false}
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="headphone"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                 Headphone
                </label>
              </div>

              <div className="flex items-center my-1">
                <input
                    onChange = { () => dispatch(categories("tv"))}
                  id="tv"
                  type="radio"
                  checked = {state.category === "tv" || false}
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="tv"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                 TV
                </label>
              </div>
            </li>

            <li className="mt-1 mb-5">
              <span className="font-semibold">Other Filters</span>
              <div className="flex items-center my-1">
                <input
                  onChange={() =>
                    dispatch(setBestSeller(!state.bestSellerOnly))
                  }
                  id="bestseller"
                  type="checkbox"
                  checked={state.bestSellerOnly  || false}
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="bestseller"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Best Seller Only
                </label>
              </div>
              <div className="flex items-center my-1">
                <input
                  onChange={() =>
                    dispatch(setInStock(!state.onlyInStock))
                  }
                  id="only-instock"
                  type="checkbox"
                  checked={state.onlyInStock || false}
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="only-instock"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  INSTOCK Only
                </label>
              </div>
            </li>
            <li className="mt-1 mb-5 px-1">
              <button
                 onClick={setClearFilter}
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Clear Filter
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
