import { Link } from "react-router-dom";
import login from "../../assets/login/login.png";

const Login = () => {
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
              <form>
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
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
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
                <button className="btn">
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
