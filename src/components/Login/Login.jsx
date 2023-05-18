import { Link } from "react-router-dom";
import login from "../../assets/login/login.png";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
        form.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully logged in",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .then((error) => {
        console.log(error);
        setError(error);
      });
  };

  const handleGoogleLogin = (event) => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully logged in",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .then((error) => {
        console.log(error);
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
              <h1 className="text-3xl text-center font-bold">Login !</h1>
              <form onSubmit={handleLogin}>
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
                  <p>{error}</p>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                  <p className="text-center my-5 ">
                    Have an account?
                    <Link to="/register" className="text-orange-600 font-bold">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
              <div className="flex flex-col justify-center">
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className="btn">
                  <img
                    className="w-4 h-4 mr-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt=""
                  />{" "}
                  Login with google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
