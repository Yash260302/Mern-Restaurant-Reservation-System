import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>No Jokes, When it comes to Food.</p>
            </div>
            <p className="mid">
              At Plateful, we believe every meal deserves a perfect seat. 
              We connect diners to restaurants with a seamless reservation 
              system that makes booking your next table simple, fast, and 
              reliable. Whether you’re planning a cozy dinner, a lively 
              group gathering, or a special occasion, Plateful makes it easy to 
              discover and reserve the best spots in town. We’re passionate 
              about food, dedicated to service, and serious about making 
              every dining experience memorable, one plate at a time.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
