import React from "react";
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://picsum.photos/id/1005/1600/1400)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Egle-DashBoard</h1>
          <p className="mb-5">
            Welcome to largest E-commerece website where you can buy any product as well as sell your own product.
          </p>
          <Link to="/products">
          <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
