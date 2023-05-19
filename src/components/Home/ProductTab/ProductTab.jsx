import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const ProductTab = () => {
  const [category, setCategory] = useState("Hero_Toys");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/tab/${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setIsLoading(false);
      });
  }, [category]);

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      className="my-20"
    >
      <h3 className="text-4xl font-bold text-center mb-10">Sub Category</h3>
      <Tabs>
        <TabList>
          <Tab onClick={() => setCategory("Hero_Toys")}>Hero Toys</Tab>
          <Tab onClick={() => setCategory("Car_Toys")}>Car Toys</Tab>
          <Tab onClick={() => setCategory("Bike_Toys")}>Bike Toys</Tab>
          <Tab onClick={() => setCategory("Cricket_Toys")}>Cricket Toys</Tab>
        </TabList>
        <TabPanel>
          {" "}
          {/* Moved outside the conditional rendering block */}
          {isLoading ? (
            <div className="flex justify-center items-center h-[300px]">
              <progress className="progress w-56"></progress>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
              {products.map((product) => (
                <section key={product._id}>
                  <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img
                        src={product?.productImg}
                        alt="toy"
                        className="rounded-xl h-60"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{product?.productName}</h2>
                      <p>Price: {product?.price}</p>
                      <p>Ratting: {product?.ratting}</p>
                      <div className="card-actions">
                        <Link
                          to={`/toydetails/${product._id}`}
                          className="btn btn-primary"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {" "}
          {/* Moved outside the conditional rendering block */}
          {isLoading ? (
            <div className="flex justify-center items-center h-[300px]">
              <progress className="progress w-56"></progress>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
              {products.map((product) => (
                <section key={product._id}>
                  <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img
                        src={product?.productImg}
                        alt="toy"
                        className="rounded-xl h-60"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{product?.productName}</h2>
                      <p>Price: {product?.price}</p>
                      <p>Ratting: {product?.ratting}</p>
                      <div className="card-actions">
                        <Link
                          to={`/toydetails/${product._id}`}
                          className="btn btn-primary"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {" "}
          {/* Moved outside the conditional rendering block */}
          {isLoading ? (
            <div className="flex justify-center items-center h-[300px]">
              <progress className="progress w-56"></progress>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
              {products.map((product) => (
                <section key={product._id}>
                  <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img
                        src={product?.productImg}
                        alt="toy"
                        className="rounded-xl h-60"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{product?.productName}</h2>
                      <p>Price: {product?.price}</p>
                      <p>Ratting: {product?.ratting}</p>
                      <div className="card-actions">
                        <Link
                          to={`/toydetails/${product._id}`}
                          className="btn btn-primary"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {" "}
          {/* Moved outside the conditional rendering block */}
          {isLoading ? (
            <div className="flex justify-center items-center h-[300px]">
              <progress className="progress w-56"></progress>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
              {products.map((product) => (
                <section key={product._id}>
                  <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img
                        src={product?.productImg}
                        alt="toy"
                        className="rounded-xl h-60"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{product?.productName}</h2>
                      <p>Price: {product?.price}</p>
                      <p>Ratting: {product?.ratting}</p>
                      <div className="card-actions">
                        <Link
                          to={`/toydetails/${product._id}`}
                          className="btn btn-primary"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ProductTab;
