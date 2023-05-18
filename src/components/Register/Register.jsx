import { Link } from "react-router-dom";
import login from "../../assets/login/login.png";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-full">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left lg:w-1/2">
            <img src={login} alt="Login logo" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl text-center font-bold">Register !</h1>
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="name"
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
                    placeholder="photo url"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <p className="text-red-600">{error}</p>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Register"
                  />
                  <p className="text-center my-5">
                    Already have an account?
                    <Link to="/login" className="text-orange-600 font-bold">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
