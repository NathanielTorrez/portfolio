import React from "react";
import SkillsCard from "./SkillsCard.js";

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
        <h1 className="title">About</h1>
        <img src="/bio1.jpg" className="bioImg"></img>
        <p className="bio">
          That's me Nathaniel Torrez and I am a full stack software engineer
          with passion for making peoples lives easier or more fun through the
          use of technology! I take pride in my ability to adapt and learn new
          technologies very fast, below is an interactice list of strongest
          skills!
        </p>
        <div className="skillsContainer">
          {softwares.map((arr, index) => (
            <SkillsCard photo={arr[1]} software={arr[0]} key={index} />
          ))}
        </div>
      </section>
      <style jsx>{`
        .aboutContainer {
          height: 100vh;
          width: 100%;
          display: flex;
          flex: auto;
          flex-direction: column;
          align-items: center;
          background: #eaeaea;
          color: #252934;
        }

        .title {
          font-size: 50px;
          text-decoration: underline;
        }
        .skillsContainer {
          height: 30%;
          width: 57%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .bioImg {
          width: 25%;
          height: 40%;
          border: 20px solid white;
          border-radius: 25px;
          margin-bottom: 2%;
          box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
        }
        .bio {
          width: 70%;
          font-size: 24px;
          margin-bottom: 4%;
          font-family: "Indie Flower", cursive;
        }
      `}</style>
    </>
  );
}
