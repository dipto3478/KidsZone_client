import { useEffect, useState } from "react";

const AllToys = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h3>all toys: {products.length}</h3>
    </div>
  );
};

export default AllToys;
