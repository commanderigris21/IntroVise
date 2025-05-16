import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,          
  autoplaySpeed: 2500,     
  pauseOnHover: false,
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    // Store email and navigate to resume page
    localStorage.setItem("userEmail", email);
    navigate("/resume");
  };

  return (
    <div>
      <nav className="Nav">
        <h1 className="Inrovise">INTROVISE</h1>
      </nav>

      <div className="half">
        <div className="slider">
          <Slider {...settings}>
            <div>
              <img className="slider-img" src="/cards1.png" alt="Abstract 1" />
            </div>
            <div>
              <img className="slider-img" src="/cards2.png" alt="Abstract 2" />
            </div>
            <div>
              <img className="slider-img" src="/cards3.png" alt="Abstract 3" />
            </div>
          </Slider>
        </div>
      </div>

      <p className="head">
        Welcome Back to <span>INTROVISE</span>
      </p>

      <p className="E">Email</p>
      <input
        className="Email"
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <p className="P">Password</p>
      <input
        className="Pass"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btnSign" onClick={handleSignIn}>
        Sign In
      </button>
      <a href="#" className="a">
        Forgot password?
      </a>

      <p className="np">
        Don&lsquo;t have an account? <Link to="/resume">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
