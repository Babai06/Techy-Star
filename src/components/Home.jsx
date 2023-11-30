import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Dipankar Samanta</h1>
          <p>Solution to all your problem</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            i am your one and only solution to the tech problem you face every
            day.We are leading tech company whose aim is to increase the problem
            solving ability in chindren.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are ? </h1>
          <p>
            Hello there! I'm Dipankar Samanta, a passionate and dedicated Web
            Developer with a knack for Web Development. With a background in
            Electronics and Communication, I've had the privilege of Project.
            Beyond the code and design, I thrive on Web Development. Whether
            it's crafting seamless user experiences or tackling complex
            challenges, I find joy in bringing ideas to life. My journey in Web
            Developement has taught me Valuable Lesson, shaping both my
            professional skills and personal philosophy. Let's embark on this
            digital adventure together, where creativity meets functionality,
            and innovation knows no bounds!😊
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instragram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
