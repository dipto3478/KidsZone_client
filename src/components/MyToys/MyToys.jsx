import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  const url = `http://localhost:5000/mytoys?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [url]);
  return (
    <div>
      <h3>my toys: {products.length}</h3>
    </div>
  );
};

export default MyToys;
