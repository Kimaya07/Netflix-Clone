import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log("Sign in:", email, password);
  };

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg")',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Netflix Logo */}
      <div className="relative z-10 px-8 py-5">
        <img
          className="w-40 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </div>

      {/* Login Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen -mt-20">
        <div className="bg-black bg-opacity-75 rounded-md p-14 w-full max-w-md">
          <h1 className="text-white text-3xl font-bold mb-8">Sign In</h1>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-white"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-white"
            />

            <button
              onClick={handleSignIn}
              className="w-full bg-red-600 text-white font-semibold py-3 rounded hover:bg-red-700 transition"
            >
              Sign In
            </button>

            <div className="flex items-center justify-between text-sm text-gray-400">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="hover:underline">
                Need help?
              </a>
            </div>
          </div>

          <div className="mt-12 text-gray-400">
            <p>
              New to Netflix?{" "}
              <a href="#" className="text-white hover:underline">
                Sign up now
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;