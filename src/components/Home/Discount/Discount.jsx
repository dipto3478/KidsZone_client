import banner1 from "../../../assets/banner/banner1.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Discount = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      className="max-h-72 my-24"
    >
      <h3 className="text-4xl font-bold text-center mb-5">Discount %</h3>
      <img className="w-full max-h-72" src={banner1} alt="" />
    </div>
  );
};

export default Discount;
