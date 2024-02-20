// import data from "../../../../data/db.json";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ProductCard } from "../../../components";
import { getFeaturedList } from "../../../services";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardSkeleton from "../../../components/CardSkeleton";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [ isLoading, setIsLoading] = useState(true)


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFeaturedList();
        setProducts(data);
        setIsLoading(false)
      } catch (error) {
        toast(error.message, { closeButton: true, position: "bottom-center" });
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="my-20 ">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured Latest Products
      </h1>

      <div className={isLoading ? "flex" : ""}>
        {
          isLoading && (
          <>
          <CardSkeleton/>
        
          </>
          )
        }
        <Slider {...settings}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Slider>
      </div>
    </section>
  );
};
