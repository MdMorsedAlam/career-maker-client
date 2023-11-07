import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { MyContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import profile from "../../../public/avatar.png";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, googleLogin, logOut } = useContext(MyContext);
  const navigate = useNavigate();
  const handelRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const url = form.photo.value;
    const pwd = form.password.value;
    const validpass =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    // Minimum eight characters, at least one letter, one number and one special character:
    if (!validpass.test(pwd)) {
      Swal.fire({
        title: "Oppss!!",
        text: "Password will be eight characters, at least one letter, one number and one special character",
        icon: "error",
      });
    } else {
      createUser(email, pwd)
        .then((res) => {
          updateProfile(res.user, {
            displayName: name,
            photoURL: url ? url : profile,
          })
            .then(() => {
              logOut()
                .then(() => {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Has Been Created",
                    showConfirmButton: false,
                    timer: 1500,
                  });

                  navigate("/login");
                })
                .catch();
            })
            .catch();
        })
        .catch(()=>{
          Swal.fire({
            title: "Opps!",
            text: "Already Created Account By This Email",
            icon: "error",
          });
        });
    }
  };
  const handelGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Loged In By Google Success",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
      })
      .catch();
  };
  return (
    <div className=" bg-current py-16">
      <div className="w-2/3 bg-gray-900 flex flex-col md:flex-row md:justify-between md:gap-10 md:items-center mx-auto p-4 rounded-md shadow sm:p-8 text-gray-100">
        <div className="flex-1">
          <h2 className="mb-3 text-3xl font-semibold text-center">
            Create A New Account
          </h2>
          <p className="text-sm font-semibold text-center text-gray-400">
            You Have An Account ?
            <Link to="/login" className="focus:underline hover:underline">
              {" "}
              Sign in here
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
          <div className="flex items-center w-full my-4">
            <hr className="w-full dark:text-gray-400" />
            <p className="px-3 dark:text-gray-400">OR</p>
            <hr className="w-full dark:text-gray-400" />
          </div>
        </div>
        <div className="md:flex-1">
          <form onSubmit={handelRegister} className="space-y-8">
            <div className="space-y-4 w-full">
              <div className="space-y-2 w-full">
                <label className="block font-bold text-sm">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Full Name"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                />
              </div>
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
                <label className="block font-bold text-sm">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
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

export default Register;
