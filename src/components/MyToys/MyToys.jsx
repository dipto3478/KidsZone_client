import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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
        // console.log(data);
      });
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`http://localhost:5000/mytoys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        const remaining = products.filter((p) => p._id !== id);
        setProducts(remaining);
      }
    });
  };
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
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td>{product.sellerName}</td>
                      <td>{product.productName}</td>
                      <td>{product.sub_category}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <Link className="btn" to={`/updatetoy/${product._id}`}>
                          Update
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="btn"
                        >
                          Delete
                        </button>
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
