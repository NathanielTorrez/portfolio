import React from "react";
import SkillsCard from "./SkillsCard.js";
import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";
import Roll from "react-reveal/Roll";
import Bounce from "react-reveal/Bounce";

export default function AboutSection() {
  const softwares = [
    ["Javascript", "/jsLogo.png"],
    ["Node", "/nodeLogo.jpg"],
    ["Express", "/expressImage.jpg"],
    ["React", "/reactLogo.jpg"],
    ["CSS", "/cssLogo.jpg"],
    ["HTML", "/htmlLogo.jpg"],
    ["PostgreSQL", "/postgresLogo.jpg"],
    ["MYSQL", "/mysqlLogo.jpg"],
    ["MongoDB", "mongoLogo.jpg"],
  ];

  return (
    <>
      <section className="aboutContainer">
        <Flip right>
          <h1 className="title">About</h1>
        </Flip>
        <div className="bioAndSkillsContainer">
          <Roll left>
            <img src="/bio1.jpg" className="bioImg"></img>
          </Roll>
          <Slide right>
            <div className="skillsContainer">
              {softwares.map((arr, index) => (
                <div className="skillsAdjustment">
                  {" "}
                  <SkillsCard photo={arr[1]} software={arr[0]} key={index} />
                </div>
              ))}
            </div>
          </Slide>
        </div>
        <Bounce bottom>
          <p className="bio">
            That's me, Nathaniel Torrez and I am a full stack software engineer
            with a passion for making peoples lives easier or more fun through
            the use of technology! I take pride in my ability to adapt and learn
            new technologies very fast. Above is a list of my strongest
            technical skills, however my skills go far beyond just the
            technical. Having owned and grown a business I started at just 17, I
            know what it takes to be succesful in a team enviorment and even
            lead a team as well as the communication and collaboration skills it
            takes to create a truly great product. This and my geniune passion
            for development and betterment of oneself is what sets me apart from
            the crowd!
          </p>
        </Bounce>
      </section>
      <style jsx>{`
        .aboutContainer {
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          //background: #eaeaea;
          background: white;
          color: #252934;
          font-family: "Montserrat", sans-serif;
        }

        .title {
          font-size: 4.99vh;
          text-decoration: underline;
        }
        .skillsContainer {
          height: 90%;
          width: 57%;
          margin-left: 5%;
          padding-top: 3%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        }
        .bioImg {
          max-width: 30%;
          // border: 1vh solid white;
          border-radius: 15px;
          box-shadow: 0 0.5vh 1.5vh 0px rgba(0, 0, 0, 0.6);
        }
        .bio {
          width: 70%;
          font-size: 3vh;
          margin-bottom: 4%;
          margin-top: 8%;
        }
        .bioAndSkillsContainer {
          min-height: 45%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        .skillsAdjustment {
          margin-bottom: 5%;
          margin-right: 5%;
        }
        @media (max-width: 800px) {
          .bio {
            width: 90%;
            font-size: 3vh;
          }
          .title {
            font-size: 7vh;
          }
          .bioAndSkillsContainer {
            flex-direction: column;
          }
          .bioImg {
            max-width: 90%;
          }
          .skillsContainer {
            width: 100%;
          }
          .skillsAdjustment {
            margin-bottom: 2%;
            margin-right: 2%;
          }
        }
      `}</style>
    </>
  );
}
