import { useEffect } from "react";
import ProductTab from "../../ProductTab/ProductTab";
import Banner from "../Banner/Banner";
import Discount from "../Discount/Discount";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <div>
      <Banner />
      <Discount />
      <ProductTab />
    </div>
  );
};

export default Home;
