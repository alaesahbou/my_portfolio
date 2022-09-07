import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BannerImg from "./BannerImg";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </h1>
              <h1 className="greeting-sub" style={{ color: theme.grayText }}>
                I'm <mark data-entity="person">{greeting.sub}</mark>
              </h1>
              <h1 className="greeting-typewriter" style={{color: theme.blue}}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Full Stack Developer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Bioinformatician")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("UI/UX Designer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Biologist")
                      .pauseFor(200)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}>
                <div className="entities">
                  I study as a <mark data-entity="skill">developer</mark> and a <mark data-entity="skill">biologist</mark>, my passion is programming and I like to know how things work and are composed. I am proficient in programming languages like <mark data-entity="dev">JAVA, C etc., web design with HTML5, CSS, JAVASCRIPT, PHP etc., database creation with MYSQL, graphic design, logo design etc.</mark>

                </div>
              </span>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
              <div className="button-greeting-div">
                <Button text="Contact me" href="/contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <BannerImg />
          </div>
        </div>
      </div>
    </Fade>
  );
}
