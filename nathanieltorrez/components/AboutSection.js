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
          flex-direction: column;
          flex: auto;
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
      `}</style>
    </>
  );
}
