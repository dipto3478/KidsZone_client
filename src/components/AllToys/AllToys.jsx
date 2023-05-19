import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    document.title = "All Toys";
  });

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/search?text=${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, [searchText]);

  return (
    <>
      {isLoading ? (
        <>
          <div className="flex justify-center items-center h-[calc(100vh-323px)]">
            <progress className="progress w-56"></progress>
          </div>
        </>
      ) : (
        <>
          <div className="my-10">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold text-center mb-5">All Toys</h3>
              <input
                onChange={(e) => setSearchText(e.target.value)}
                type="text"
                placeholder="search by toy name"
                className="input input-bordered w-full   mb-5 max-w-xs"
              />
            </div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>0</th>
                    <th>Seller Name</th>
                    <th>Toy Name</th>
                    <th>Sub-category</th>
                    <th>Price</th>
                    <th>Available Quantity</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={product?._id}>
                      <td>{index + 1}</td>
                      <td>{product?.sellerName}</td>
                      <td>{product?.productName}</td>
                      <td>{product?.sub_category}</td>
                      <td>{product?.price}</td>
                      <td>{product?.quantity}</td>
                      <td>
                        <Link className="btn" to={`/toydetails/${product._id}`}>
                          Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AllToys;
