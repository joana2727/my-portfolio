import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import AboutImg from "../../assets/about.webp";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          <Data />
        </div>
        <ScrollDown />
      </div>

      <div id="about__me"> <br></br>
        <h2 className="section__title">About Me</h2> <br></br>
      </div>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <span className="section__subtitle1">Who am I?</span>
          <p className="about__description">
            Hi, I’m Mikks Garcia, a Computer Science student at CVSU Bacoor with a knack for combining creativity and technology.
            I specialize in crafting captivating content and designing stunning presentations that leave an impression.
            Whether I'm designing custom graphics or taking on commissions, I bring a fresh perspective to every project.
            My journey as a Computer Science student fuels my drive for innovation, helping me deliver high-quality, visually engaging work that stands out.
          </p>
        </div>
      </div>

      <div className="about__extra container grid">
        <div className="about__card">
          <span className="section__subtitle1">What Got Me Into Design</span>
          <p className="about__description">
            Ever since I was little, I’ve always enjoyed putting things together in a way that looks nice.
            Whether it was organizing my space or creating visually appealing projects, I found joy in making things look and feel right.
            As I grew older, this love for design evolved into an interest in web and app development.
            While I have a background in coding, I’ve found my true passion in the visual side of things.
            I enjoy creating designs that are not only functional but also aesthetically pleasing. Though I'm not deeply focused on back-end development,
            I’m eager to contribute to the tech industry because I believe design plays a crucial role in shaping the future of technology.
          </p>
        </div>

        <div className="about__card">
          <span className="section__subtitle1">Life at Home</span>
          <p className="about__description">
            I was born into a family of four. My parents separated when I was young, which shaped much of my perspective on life.
            Growing up, I’ve learned to navigate challenges, cherishing the moments with my family and gaining strength from them.
            Despite the early changes, I’ve always been surrounded by love and support, which has played a huge role in who I am today.
          </p>

        </div>
      </div>





    </section>


  );
};

export default Home;
