import img1 from "../../../assets/gallery/animated-toy-image-0002.gif";
import img2 from "../../../assets/gallery/animated-toy-image-0003.gif";
import img3 from "../../../assets/gallery/animated-toy-image-0004.gif";
import img4 from "../../../assets/gallery/animated-toy-image-0006.gif";
import img5 from "../../../assets/gallery/animated-toy-image-0014.gif";
import img6 from "../../../assets/gallery/animated-toy-image-0017.gif";
import img7 from "../../../assets/gallery/animated-toy-image-0030.gif";
import img8 from "../../../assets/gallery/animated-toy-image-0032.gif";
import img9 from "../../../assets/gallery/animated-toy-image-0038.gif";
import img10 from "../../../assets/gallery/animated-toy-image-0044.gif";
import img11 from "../../../assets/gallery/animated-toy-image-0042.gif";
import img12 from "../../../assets/gallery/animated-toy-image-0049.gif";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Gallery = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      className="my-20"
    >
      <h3 className="text-4xl font-bold mb-10 text-center">Our Gallery</h3>
      <Marquee>
        <img className="w-40 h-40" src={img1} alt="" />
        <img className="w-40 h-40" src={img2} alt="" />
        <img className="w-40 h-40" src={img3} alt="" />
        <img className="w-40 h-40" src={img4} alt="" />
        <img className="w-40 h-40" src={img5} alt="" />
        <img className="w-40 h-40" src={img6} alt="" />
        <img className="w-40 h-40" src={img7} alt="" />
        <img className="w-40 h-40" src={img8} alt="" />
        <img className="w-40 h-40" src={img9} alt="" />
        <img className="w-40 h-40" src={img10} alt="" />
        <img className="w-40 h-40" src={img11} alt="" />
        <img className="w-40 h-40" src={img12} alt="" />
      </Marquee>
    </div>
  );
};

export default Gallery;
