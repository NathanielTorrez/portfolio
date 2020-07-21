import React from "react";
import SkillsCard from "./SkillsCard.js";
import Slide from "react-reveal/Slide";
export default function ProjectTile({ title, description, tech, image }) {
  return (
    <>
      <Slide left>
        <div className="projectTile">
          <div className="projectTitleHidden">{title}</div>
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
          min-width: 20%;
          max-width: 98%;
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
          min-width: 30%;
          max-width: 40%;
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
        .projectTitleHidden {
          display: none;
          font-size: 5.5vh;
          width: 100%;
          text-decoration: underline;
          margin-bottom: 2%;
        }
        .projectBody {
          width: 100%;
          height: 30%;
          margin-top: 1%;
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

        @media (max-width: 600px) {
          .projectTile {
            margin-top: 5%;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .projectPicture {
            min-width: 80%;
            max-width: 95%;
          }
          .projectDescriptionContainer {
            width: 90%;
          }
          .projectBody {
          }
          .projectTitle {
            display: none;
            font-size: 5vh;
          }
          .projectTitleHidden {
            display: block;
          }
        }
      `}</style>
    </>
  );
}

// .projectTile {
//   width: 98%;
//   height: 30%;
// }
// .projectPicture {
//  height: 70%;
//  width: 40%;
//  margin-top: 10%;
//  margin-right: 2%;
// }
// .projectTile {
//   width: 98%;
//   height: 30%;
// }
