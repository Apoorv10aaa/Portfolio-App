import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section className="body-font">
      <div className="p-5 mt-3 mx-auto md:mt-5 md:mx-10 lg:mx-16">
        <div id="about" className="flex flex-col text-center w-full mb-3">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
            About Me
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg mx-auto leading-relaxed font-medium text-[#8A9A5B] text-center"
          >
            Why hire me ?
          </p>
        </div>
        <div className="mx-auto flex lg:flex-row flex-col items-center justify-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="lg:max-w-md sm:w-2/3 lg:w-1/2 w-full mb-10 md:mb-0"
          >
            <img
              className="object-cover object-center pointer-events-none rounded backdrop-contrast-200 backdrop-brightness-200"
              alt="hero"
              src={require("../assets/Images/about.png")}
            />
          </div>
          <div className="lg:w-1/2 justify-center lg:p-5 xl:p-7 md:p-5 flex flex-col items-center text-justify">
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="false"
              className="font-medium text-gray-700 text-lg lg:text-base xl:text-xl leading-loose xl:leading-8"
            >
              As a passionate web developer with 2 years of experience, I
              specialize in crafting visually captivating, high-performing
              websites that deliver seamless user experiences. My expertise
              spans <b>HTML5</b>, <b>CSS3</b>, <b>JavaScript</b>, and modern
              tools like <b>ReactJs</b>, <b>Next.js</b>, and <b>Tailwind CSS</b>
              , equipping me to build responsive, scalable, and innovative web
              solutions.
              <br />
              With a keen eye for design and a strong technical foundation, I
              take pride in turning complex ideas into polished, user-friendly
              digital experiences.
              <br />
              Why hire me? I’m adaptable, constantly learning, and driven by the
              excitement of solving real-world problems through technology. I
              thrive in fast-paced environments, collaborate effectively with
              teams, and am always eager to take on new challenges.
              <br />
              Let’s create something incredible together—check out my work and
              let’s connect!
            </p>
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="false"
              className="mt-7 flex gap-x-4 md:gap-x-5 justify-center md:justify-between"
            >
              <button className="inline-flex font-medium text-white bg-black border-2 border-black py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
                <Link
                  to={"contact"}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Hire Me
                </Link>
              </button>
              <a
                href="https://drive.google.com/file/d/1FA_tY629JS6GFAxvRXVsfeb_Xm1XSq86/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button className="inline-flex font-medium text-white bg-[#8A9A5B] border-2 border-black py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
                  Get Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
