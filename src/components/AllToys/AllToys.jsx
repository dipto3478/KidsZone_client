import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading && (
        <>
          <div className="flex justify-center items-center h-[calc(100vh-323px)]">
            <progress className="progress w-56"></progress>
          </div>
        </>
      )}

      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>0</th>
                <th>Seller Name</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
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
    </div>
  );
};

export default AllToys;
