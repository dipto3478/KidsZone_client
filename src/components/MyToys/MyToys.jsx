import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = `http://localhost:5000/mytoys?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
        console.log(data);
      });
  }, [url]);
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
                        <Link className="btn" to={`/updatetoy/${product._id}`}>
                          Edit
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

export default MyToys;
