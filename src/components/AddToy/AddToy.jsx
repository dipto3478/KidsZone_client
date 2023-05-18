import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email;
    const productName = form.toy.value;
    const productImg = form.photo.value;
    const sellerName = form.name.value;
    const sub_category = form.sub_category.value;
    const price = form.price.value;
    const ratting = form.ratting.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const productDetails = {
      productName,
      productImg,
      sellerName,
      sub_category,
      price,
      ratting,
      quantity,
      description,
      email,
    };
    console.log(productDetails);
    fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Good job!", "Successfully Added Product", "success");
        }
      });
  };
  return (
    <div className="mb-10">
      <h3 className="text-3xl font-bold my-10 text-center underline">
        Add A Toy
      </h3>
      <form
        onSubmit={handleAddToy}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            defaultValue={user?.email}
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Name</span>
          </label>
          <input
            name="toy"
            type="toy"
            placeholder="Toy name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            name="photo"
            type="url"
            placeholder="Photo url"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input
            name="name"
            defaultValue={user?.displayName}
            type="text"
            placeholder="seller name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Sub-category</span>
          </label>
          <select
            defaultValue={"Hero Toys"}
            className="select select-bordered"
            name="sub_category"
          >
            <option value="Hero Toys">Hero Toys</option>
            <option value="Car Toys">Car Toys</option>
            <option value="Bike Toys">Bike Toys</option>
            <option value="Cricket Toys">Cricket Toys</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            name="price"
            type="number"
            placeholder="Price"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Ratting</span>
          </label>
          <input
            name="ratting"
            type="text"
            placeholder="Ratting"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available quantity</span>
          </label>
          <input
            name="quantity"
            type="number"
            placeholder="Available quantity"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Detail description</span>
          </label>
          <textarea
            name="description"
            placeholder="Detail description"
            className="input input-bordered"
          ></textarea>
        </div>
        <input className="btn col-span-3" type="submit" value="Add Toy" />
      </form>
    </div>
  );
};

export default AddToy;
