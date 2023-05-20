import { useEffect } from "react";
import ProductTab from "../ProductTab/ProductTab";
import Banner from "../Banner/Banner";
import Discount from "../Discount/Discount";
import Gallery from "../Gallery/Gallery";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <div>
      <Banner />
      <Discount />
      <ProductTab />
      <Gallery />
      <NewsLetter />
    </div>
  );
};

export default Home;
