import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { useState } from "react";
import Loading from "../components/atoms/loading";

export default function Login() {
  // Use router
  const router = useRouter();

  // State for form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   State for errors
  const [errors, setErrors] = useState("");
  // State for visible or invsible password
  const [isVisible, setIsVisible] = useState(false);
  // State for submitted button login
  const [isSubmitted, setIsSubmitted] = useState(false);

  //   Action
  const onSubmit = async () => {
    // (1) Get all payload
    const data = {
      username,
      password,
    };

    // (2) If username or password is empty
    if (!username || !password) {
      // If yes, Response error
      setErrors("Username dan Password wajib diisi!");
    } else {
      // If no, next process
      // logic login to backend
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-indigo-300 flex flex-col justify-center sm:py-12 ">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        {/* Start Logo */}
        <div className="font-bold flex flex-col justify-center text-2xl mb-5">
          <Image
            src="/image/logo.png"
            alt="logo"
            width={`100%`}
            height={`130%`}
          />

          {/* Title App */}
          <div className="text-center mt-5 text-2xl text-gray-800 font-mono italic">
            <p>Jabutech</p>
          </div>
        </div>
        {/* End logo */}

        {/* Start Error */}
        <div className="justify-center flex">
          {/* Display */}
          {
            // If error length greather than 0
            errors.length > 0 && (
              // Display error
              <div className="bg-red-200 w-full h-10 rounded-lg mb-6 text-gray-700 justify-center items-center flex flex-col">
                <span className="px-2 py-2 text-red-500 font-semibold">
                  {errors}
                </span>
              </div>
            )
          }
        </div>
        {/* End Error */}

        {/* Start form */}
        <div className="bg-white shadow-2xl w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <div className="mb-5">
              <label className="font-semibold text-sm text-gray-800 pb-1 block">
                Username
              </label>
              {/* Form username */}
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
                className={`border-2 shadow-md focus:bg-white focus:border-gray-600 focus:outline-none rounded-lg px-3 py-2 mt-1 text-sm w-full focus:placeholder-gray-500`}
                placeholder="Username"
              />
            </div>

            <div className="mb-5">
              <label className="font-semibold text-sm text-gray-800 pb-1 block">
                Password
              </label>
              <div className="relative">
                {/* Form password */}
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={isVisible ? "text" : "password"}
                  className={`border-2 shadow-md focus:bg-white focus:border-gray-600 focus:outline-none rounded-lg px-3 py-2 mt-1 text-sm w-full`}
                  placeholder="*****"
                />

                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  <button onClick={() => setIsVisible(!isVisible)}>
                    <div className="w-5 h-5 relative font-semibold">
                      {!isVisible ? (
                        <Image
                          src="/icon/login/eye.svg"
                          layout="fill"
                          objectFit="contain"
                          alt="icon-eye"
                        />
                      ) : (
                        <Image
                          src="/icon/login/eye-off.svg"
                          layout="fill"
                          objectFit="contain"
                          alt="icon-eye"
                        />
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {isSubmitted ? (
              // If isLoadingSubmitted status true
              <div className="text-center">
                <Loading />
              </div>
            ) : (
              <button
                onClick={onSubmit}
                type="submit"
                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-flex items-center justify-center"
              >
                <span className="inline-block mr-2">Login</span>
                <div className="w-5 h-5 relative font-semibold">
                  <Image
                    src="/icon/login/arrow-right.svg"
                    layout="fill"
                    objectFit="contain"
                    alt="icon-eye"
                  />
                </div>
              </button>
            )}
          </div>
        </div>
        {/* Start form */}

        {/* Start Footer */}
        <div className="text-center py-2 text-gray-800 font-semibold">
          <h1> IT Development JNE Medan @ {new Date().getFullYear()}</h1>
        </div>
      </div>
    </div>
  );
}
