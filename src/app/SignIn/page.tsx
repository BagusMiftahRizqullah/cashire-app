"use client";
import React, { useState } from "react";
// import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const SignIn: React.FC = () => {
  const router = useRouter();
  const [hide, setHide] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  
  const handleSignIn = async (e: React.FormEvent) => {
    console.log("handleSignIn", username, password);
    e.preventDefault();
    // setError(""); // Reset error
    // setLoading(true); // Start loading
    router.push("/Home");
  }

  return (
    <div className="bg-[#1153A2] flex h-screen items-center justify-center">
      <div className="bg-white w-[420PX] px-10 py-8 rounded-lg border shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex rounded-lg flex-wrap items-center">
          <div className="w-full dark:border-strokedark">
            <div className="w-full">
              <p className="text-[#434C25] text-[18px] font-bold">Udayana Cashire</p>
              {/* <Image src={Logo} width={63} height={70} alt="logo" /> */}
              <h2 className="mt-4 mb-4 text-[18px] font-bold text-[#1153A2] dark:text-white">
                Masuk ke Dasboard
              </h2>

              <form onSubmit={handleSignIn}>
                <div className="mb-2">
                  <label
                    htmlFor="username"
                    className="text-[15px] mb-2.5 block font-bold text-black "
                  >
                    Username
                  </label>
                  <div className="relative">
                    <input
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      placeholder="Contoh. Admin"
                      className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input "
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="text-[15px] mb-2.5 block font-bold text-black"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={hide ? "password" : "text"}
                      placeholder="Password"
                      className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input "
                    />

                    <span className="absolute right-4 top-4">
                      <button
                        type="button"
                        onClick={() => setHide(!hide)}
                        className="focus:outline-none"
                        aria-label="Toggle password visibility"
                      >
                        {hide ? <AiFillEyeInvisible size={23} /> : <AiFillEye size={23} />}
                      </button>
                    </span>
                  </div>
                </div>

                <div className="flex mb-5 flex-row justify-between items-center">
                  <button
                    type="submit"
                    className={` flex-1 cursor-pointer rounded-lg border border-primary bg-[#1153A2] py-2 px-4 text-white transition hover:bg-opacity-90`}
                  >
                    {"Masuk"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;