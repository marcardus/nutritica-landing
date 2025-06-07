import React from "react";
import BannerBackground from "../assets/home-banner-background.png";
import BannerBackground2 from "../assets/about2-background-image.png";
import IaBackground from "../assets/Ia-background-image.svg";
import IaBanner from "../assets/about2-background-image.png";
import BannerImage from "../assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
       <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Avatar and voice-led health companion.
          </h1>
          <p className="primary-text">
            Nutritica is an avatar and voice-led health companion that guides individuals with chronic conditions, 
            health enthusiasts, and health professionals through personalized nutrition and lifestyle journeys
          </p>
          <button className="secondary-button">
            More... <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={IaBackground} alt="AI and Nutrition" />
        </div>
      </div>
    </div>
  );
};

export default Home;