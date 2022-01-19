import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
      toast.success("Loged In succesfully"); 
    } else {
      // alert("please enter correct details");
      toast.error("Please Enter correct Details")
      setEmail("");
      setPassword("");
    }
  };
  useEffect(() => {
    const auth = localStorage.getItem('user'); 
    if(auth){
      navigate('/')
    }
}, [])
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex-col justify-center hero-content lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="mb-5 text-5xl font-bold text-indigo-700">Wellcome Back!</h1>
          <p className="mb-5">
            Thanks for revisting E-dashbord! Many of products waiting for you, glad to see you again. 

          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  placeholder="email"
                  className="input input-bordered"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  placeholder="password"
                  className="input input-bordered"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <label className="label text-indigo-700 text-sm">
                  <a href="/" className="">
                    Forgot password?
                  </a>
                  <p className=" ">
                    <Link to="/signup">Signup</Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  value="Login"
                  onClick={handleLogin}
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
