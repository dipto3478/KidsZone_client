import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  // console.log(toy);

  useEffect(() => {
    document.title = "Toy Details";
  });

  return (
    <>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col gap-5  lg:flex-row">
          <img
            src={toy?.productImg}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold mb-5">
              Toy Name: {toy?.productName}
            </h1>
            <p className="text-lg font-semibold">
              Seller Name: {toy?.sellerName}
            </p>
            <p className="text-lg font-semibold">
              Sub_category: {toy?.sub_category}
            </p>
            <p className="text-lg font-semibold">Seller Email: {toy?.email}</p>
            <p className="text-lg font-semibold">Price: {"$" + toy?.price}</p>
            <p className="text-lg font-semibold">Ratting: {toy?.ratting}</p>
            <p className="text-lg font-semibold">
              Available quantity: {toy?.quantity}
            </p>
            <p className="py-6">{toy?.description.slice(0, 250)}....</p>
            <Link to="/alltoys" className="btn btn-primary">
              Back to all toys
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyDetails;
