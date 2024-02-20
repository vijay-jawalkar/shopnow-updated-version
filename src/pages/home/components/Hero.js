import { Link } from "react-router-dom";
import HeroImage from "../../../assets/images/tech-hero.jpg";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center ">
      <div className="text my-5 px-3">
        <h1 className="text-5xl font-bold font-sans italic">The Ultimate E-Store Destination</h1>
        <p className="text-xl my-7  dark:text-slate-300 font-sans italic">
          Your One-Stop Tech Haven: Explore, Shop, and Elevate Your Digital
          Lifestyle, Where Innovation Meets Convenience: Unleash the Future of
          Electronics Today!
        </p>
        <Link
          to="/products"
          type="button"
          className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-semibold font-sans rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
        >
          Explore Shop
        </Link>
      </div>
      <div className="visual my-5 lg:max-w-xl">
        <img
          className="rounded-lg max-h-full"
          src={HeroImage}
          alt="CodeBook Hero Section"
        />
      </div>
    </section>
  );
};
