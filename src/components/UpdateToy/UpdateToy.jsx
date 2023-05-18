import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const product = useLoaderData();
  //   console.log(product);

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const update = { price, quantity, description };
    console.log(update);
    fetch(`http://localhost:5000/mytoys/${product._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Good job!", "Successfully Product updated", "success");
        }
      });
  };

  return (
    <div className="my-10">
      <h3 className="text-3xl font-bold my-10 text-center underline">
        Update Product
      </h3>
      <form
        onSubmit={handleUpdateProduct}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            defaultValue={product?.price}
            name="price"
            type="number"
            placeholder="Price"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available quantity</span>
          </label>
          <input
            defaultValue={product?.quantity}
            name="quantity"
            type="number"
            placeholder="Available quantity"
            className="input input-bordered"
          />
        </div>
        <div className="form-control md:col-span-3">
          <label className="label">
            <span className="label-text">Detail description</span>
          </label>
          <textarea
            defaultValue={product?.description}
            name="description"
            placeholder="Detail description"
            className="input input-bordered h-40"
          ></textarea>
        </div>
        <input
          className="btn md:col-span-3"
          type="submit"
          value="Update Product"
        />
      </form>
    </div>
  );
};

export default UpdateToy;
