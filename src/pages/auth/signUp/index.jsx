import React, { useState } from "react";
import background from "../../../assets/svg/backgroundImageAuth.svg";
import { useNavigate } from "react-router-dom";
import InputField from "../../../components/EmailInput";
import PasswordInput from "../../../components/PasswordInput";
import Button from "../../../components/Button";
import { successToast, errorToast } from "../../../components/Toast";
import ImageCarousel from "../../../components/ImageCarousel";
import { FaRegEnvelope } from "react-icons/fa6";
import { LuUser2 } from "react-icons/lu";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleCreateAccount = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      errorToast("Please fill all fields");
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(fullName)) {
      errorToast("Full Name should contain only alphabets");
      return;
    }

    if (!validateEmail(email)) {
      errorToast("Invalid email format");
      return;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*,.])[A-Za-z\d!@#$%^&*,.]{8,}$/;
    if (!passwordRegex.test(password)) {
      errorToast(
        "Password must be at least 8 characters long, containing at least one uppercase letter, one numeric digit, and one special character (e.g., @, #, $, %, &, *, .)."
      );
      return;
    }

    if (password !== confirmPassword) {
      errorToast("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = { email, password, fullName };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    successToast("Account created successfully!");
    navigate("/");
  };

  const handleLoginNavigation = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen p-10 bg-offWhiteColor">
      <div
        className="flex flex-col lg:flex-row bg-white rounded-3xl w-full h-full lg:max-w-[1220px] lg:max-h-[750px]"
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
              <p className="text-black font-semibold text-xl">Registration</p>
              <div className="w-full mt-5 space-y-5">
                <InputField
                  type="text"
                  placeholder="Name"
                  icon={<LuUser2 />}
                  className="w-full"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <InputField
                  type="text"
                  placeholder="Email"
                  icon={<FaRegEnvelope />}
                  className="w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <PasswordInput
                  placeholder="Password"
                  className="mt-6 w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <PasswordInput
                  placeholder="Re-enter Password"
                  className="mt-6 w-full"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <Button
                onClick={handleCreateAccount}
                className="flex items-center justify-center font-normal p-3 px-8 w-full min-w-max h-12 text-navbar bg-purpleColor rounded-full hover:ring-2 hover:ring-gradientEnd focus:ring-2 focus:ring-gradientEnd mt-5"
              >
                Create Account
              </Button>

              <div className="my-5 text-center w-full">
                <p className="text-gray-400">Already have an account?</p>
                <Button
                  onClick={handleLoginNavigation}
                  className="flex items-center justify-center font-normal p-3 px-8 w-full min-w-max h-12 text-purpleColor bg-white border border-purpleColor rounded-full hover:ring-2 hover:ring-gradientEnd focus:ring-2 focus:ring-gradientEnd mt-5"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
