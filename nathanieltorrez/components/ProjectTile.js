import React from "react";
import SkillsCard from "./SkillsCard.js";
import Slide from "react-reveal/Slide";
export default function ProjectTile({ title, description, tech, image }) {
  return (
    <>
      <Slide left>
        <div className="projectTile">
          <img className="projectPicture" src={image}></img>
          <div className="projectDescriptionContainer">
            <div className="projectTitle">{title}</div>
            <div className="projectBody">{description}</div>
            <div style={{ fontSize: "4vh", marginBottom: "1.5%" }}>
              Technologies
            </div>
            <div className="projectTechContainer">
              {tech.map((skill) => (
                <SkillsCard photo={skill[1]} software={skill[0]} />
              ))}
            </div>
          </div>
        </div>
      </Slide>
      <style jsx>{`
        .projectTile {
          width: 80%;
          height: 29%;
          border: 0.1vh solid black;
          margin-top: 2%;
          display: flex;
          flex-direction: row;
          box-shadow: 0 0.5vh 1vh 0 rgba(0, 0, 0, 0.3);
          border-radius: 2.5vh;
        }
        .projectPicture {
          margin-top: 1%;
          margin-left: 0.5%;
          border-radius: 2.5vh;
          height: 90%;
          width: 30%;
          box-shadow: 0 0.5vh 1vh 0 rgba(0, 0, 0, 0.6);
        }
        .projectDescriptionContainer {
          display: flex;
          flex-direction: column;
          flex: auto;
          align-items: center;
          text-align: center;
          height: 100%;
          width: 70%;
          margin-left: 0.5%;
        }
        .projectTitle {
          font-size: 3.6vh;
          width: 100%;
          text-decoration: underline;
          margin-bottom: 2%;
        }
        .projectBody {
          width: 100%;
          height: 30%;
          margin-top: 1%;
          // border: .1vh solid black;
          font-size: 2vh;
        }
        .projectTechContainer {
          width: 70%;
          height: 20%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }

        @media (max-width: 1000px) {
          .projectTile {
            width: 98%;
            height: 30%;
          }
          .projectBody {
            font-size: 2.2vh;
            margin-top: 0;
          }
        }
        @media (max-width: 600px) {
          .projectTile {
            width: 98%;
            height: 30%;
          }
          .projectPicture {
            height: 70%;
            width: 40%;
            margin-top: 10%;
            margin-right: 2%;
          }
          .projectBody {
            font-size: 3.5vh;
            margin-top: 0;
            margin-bottom: 10%;
          }
          .projectTitle {
            font-size: 5vh;
          }
        }
      `}</style>
    </>
  );
}
