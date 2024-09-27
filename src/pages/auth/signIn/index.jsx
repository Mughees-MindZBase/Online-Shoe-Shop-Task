import React, { useState } from "react";
import background from "../../../assets/svg/backgroundImageAuth.svg";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../../components/EmailInput";
import PasswordInput from "../../../components/PasswordInput";
import Button from "../../../components/Button";
import { successToast, errorToast } from "../../../components/Toast";
import ImageCarousel from "../../../components/ImageCarousel";
import { FaRegEnvelope } from "react-icons/fa6";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (!email || !password) {
      errorToast("Please fill in both fields.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      localStorage.setItem("currentUser", JSON.stringify(userExists));

      successToast("Successfully signed in!");
      navigate("/dashboard");
    } else {
      errorToast("Invalid email or password.");
    }

    setEmail("");
    setPassword("");
  };

  const handleSignUp = () => {
    navigate("/signUp");
  };

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen p-10 bg-offWhiteColor">
        <div
          className="flex flex-col lg:flex-row bg-white  rounded-3xl w-full h-full lg:max-w-[1220px] lg:max-h-[750px]"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full lg:w-3/5 hidden lg:flex justify-center rounded-l-3xl items-center bg-purpleColor">
            <ImageCarousel />
          </div>

          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <div className="w-full px-14">
              <div className="w-full flex flex-col items-center">
                <p className="text-black font-semibold text-xl">Welcome</p>
                <div className="w-full mt-20">
                  <InputField
                    type="text"
                    placeholder="Email"
                    icon={<FaRegEnvelope />}
                    className=" w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <PasswordInput
                    placeholder="Password"
                    className="mt-6 w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="justify-end flex mt-3 mb-5 hover:underline w-full">
                  <Link className="text-purpleColor" to="/forgetPassword">
                    Forgot password?
                  </Link>
                </div>

                <Button
                  onClick={handleSignIn}
                  className="flex items-center justify-center font-normal p-3 px-8 w-full min-w-max h-12 text-navbar bg-purpleColor rounded-full hover:ring-2 hover:ring-gradientEnd focus:ring-2 focus:ring-gradientEnd mt-5"
                >
                  Login
                </Button>

                <div className="my-5 text-center w-full">
                  <p className="text-gray-400">Have no account yet?</p>
                  <Button
                    onClick={handleSignUp}
                    className="flex items-center justify-center font-normal p-3 px-8 w-full min-w-max h-12 text-purpleColor bg-white border border-purpleColor rounded-full hover:ring-2 hover:ring-gradientEnd focus:ring-2 focus:ring-gradientEnd mt-5"
                  >
                    Registeration
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
