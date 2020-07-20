import React from "react";
import SkillsCard from "./SkillsCard.js";

export default function ProjectsSection() {
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
      <section className="projectsSectionContainer">
        <div className="title">Projects</div>
        <div className="projectTile">
          <img className="projectPicture" src="/BottomsUp.jpg"></img>
          <div className="projectDescriptionContainer">
            <div className="projectTitle">BottomsUp!</div>
            <div className="projectBody">
              Full Stack React Native ios application with a Express.js backend
              and PostgreSQL database. Allows users to become an expert
              bartender with just a tap of a button. Supplying them with a list
              of drinks as well as instructions and ingredients list to craft
              the cocktail!
            </div>
            <div style={{ fontSize: "30px" }}>Technologies</div>
            <div className="projectTechContainer">
              <SkillsCard photo={softwares[0][1]} software={softwares[0][0]} />
              <SkillsCard photo={softwares[3][1]} software={softwares[3][0]} />
              <SkillsCard photo={softwares[1][1]} software={softwares[1][0]} />
              <SkillsCard photo={softwares[4][1]} software={softwares[4][0]} />
              <SkillsCard photo={softwares[5][1]} software={softwares[5][0]} />
              <SkillsCard photo={softwares[6][1]} software={softwares[6][0]} />
            </div>
          </div>
        </div>
        <div className="projectTile"></div>
        <div className="projectTile"></div>
        <div className="projectsContainer"></div>
      </section>
      <style jsx>{`
        .projectsSectionContainer {
          height: 100vh;
          width: 100vw;
          background: white;
          color: #252934;
          display: flex;
          flex: auto;
          flex-direction: column;
          align-items: center;
        }
        .title {
          font-size: 50px;
          text-decoration: underline;
        }
        .projectTile {
          width: 80%;
          height: 29%;
          border: 1px solid black;
          margin-top: 1%;
          display: flex;
          flex-direction: row;
          box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.3);
          border-radius: 25px;
        }
        .projectPicture {
          margin-top: 0.5%;
          margin-left: 0.5%;
          border-radius: 25px;
          height: 90%;
          box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.6);
        }
        .projectDescriptionContainer {
          display: flex;
          flex-direction: column;
          flex: auto;
          align-items: center;
          // border: 1px solid black;
          height: 100%;
          width: 70%;
          margin-left: 0.5%;
        }
        .projectTitle {
          height: 20%;
          width: 20%;
          font-size: 36px;
          // border: 1px solid black;
          text-decoration: underline;
        }
        .projectBody {
          width: 100%;
          height: 30%;
          margin-top: 1%;
          // border: 1px solid black;
          font-size: 20px;
        }
        .projectTechContainer {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          // border: 1px solid black;
          width: 100%;
          height: 40%;
        }
      `}</style>
    </>
  );
}
