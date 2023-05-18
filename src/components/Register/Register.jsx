import { Link } from "react-router-dom";
import login from "../../assets/login/login.png";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
  };
  return (
    <div>
      <div className="hero h-[calc(100vh-103px)] ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left lg:w-1/2">
            <img src={login} alt="Login logo" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl text-center font-bold">Sign In !</h1>
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
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                  <p className="text-center my-5">
                    Already have an account?
                    <Link to="/login" className="text-orange-600 font-bold">
                      Login
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
