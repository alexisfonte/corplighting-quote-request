import React, { useState, useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { UserContext } from "../App";
import GoogleButton from "../components/GoogleButton";

function Login() {
  const { setUser, setIsLoggedIn } = useContext(UserContext)

  const [signUp, setSignUp] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [consfirm, setConfirm] = useState("")
  const [errors, setErrors] = useState([]);

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      await fetch("api/auth/google_oauth2/callback", {
        method: "POST",
        body: JSON.stringify({ code: codeResponse.code }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "X-Requested-With": "XMLHttpRequest",
        },
      }).then((res) => {
        if (res.ok) {
          res.json().then((user) => {
            console.log(user)
            setUser(user);
            setIsLoggedIn(true)
          });
        } else {
          res.json().then((data) => {
            setErrors("Login failed");
            console.log(data);
          });
        }
      });
    },
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    fetch('api/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setIsLoggedIn(true)
          // navigate("/");
        });
      } else {
        res.json().then((data) => {
            setErrors(data.errors) 
        });
      }
    });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    fetch('api/signup', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          // navigate("/dashboard");
          setUser(user);
          setIsLoggedIn(true)
        });
      } else {
        res.json().then((data) => {
            setErrors("Invalid user info")
        })  
      }
    });
  };

  return (
    <>
      <div className="w-screen bg-base-200">
        <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="flex items-center justify-center">
              <div className="-m-1.5 p-1.5">
                <span className="text-5xl font-bold leading-6 text-primary">
                  Corp
                </span>
                <span className="text-5xl font-bold leading-6 text-base-content">
                  Lighting
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-base-100 py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={signUp ? handleSignUpSubmit : handleLoginSubmit}>
                {signUp && ( 
                  <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                )}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-base-content"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-300 placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-base-content"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      className="block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-300 placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {signUp && (
                <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
                )}

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-primary py-2 px-3 text-sm font-semibold text-primary-content shadow-sm hover:bg-primary-focus focus:bg-primary-focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-focus"
                  >
                    {signUp ? 'Create account' : 'Sign in'}
                  </button>
                </div>
              </form>

              <div className="mt-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-base-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-base-100 px-2 text-neutral">Or</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  <GoogleButton googleLogin={googleLogin}/>
                  <p className="mt-1 text-center text-sm text-neutral">
                    {signUp ? 'Already have an account? ' : 'Don\'t have an account? '}
                    <button
                      className="font-medium text-primary hover:text-primary-focus underline"
                      onClick={() => setSignUp(!signUp)}
                    >
                      {signUp ? 'Login-in here' : 'Sign-up here'}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
