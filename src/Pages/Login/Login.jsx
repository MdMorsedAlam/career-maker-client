import { useContext } from "react";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, googleLogin } = useContext(MyContext);
  const navigate = useNavigate();
  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pwd = form.password.value;
    loginUser(email, pwd)
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "Successfully Loged In",
          icon: "success",
        });
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          title: "Opps!!",
          text: "Invalid Email Or Password",
          icon: "error",
        });
      });
    form.reset();
  };
  const handelGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "Loged In By Google Success",
          icon: "success",
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className=" bg-current py-16">
      <div className="w-2/3 bg-gray-900 flex flex-col md:flex-row justify-between gap-10 items-center mx-auto p-4 rounded-md shadow sm:p-8 text-gray-100">
        <div className="flex-1">
          <h2 className="mb-3 text-3xl font-semibold text-center">
            Login To Your Account
          </h2>
          <p className="text-sm font-semibold text-center text-gray-400">
            Create A New Account ?
            <Link to="/register" className="focus:underline hover:underline">
              {" "}
              Sign up here
            </Link>
          </p>
          <div className="my-6 space-y-4">
            <button
              onClick={handelGoogleLogin}
              className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri border-gray-400 focus:ri"
            >
              <BsGoogle className="w-5 h-5 fill-current" />
              <p>Login with Google</p>
            </button>
            <button className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri border-gray-400 focus:ri">
              <BsGithub className="w-5 h-5 fill-current" />
              <p>Login with GitHub</p>
            </button>
            <button className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri">
              <BsFacebook className="w-5 h-5 fill-current" />
              <p>Login with Facebook</p>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center w-full my-4">
            <hr className="w-full dark:text-gray-400" />
            <p className="px-3 dark:text-gray-400">OR</p>
            <hr className="w-full dark:text-gray-400" />
          </div>
          <form onSubmit={handelLogin} className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block font-bold text-sm">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-bold">Password</label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-400"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
