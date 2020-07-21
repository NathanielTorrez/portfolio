import React from "react";
import SkillsCard from "./SkillsCard.js";
export default function ProjectTile({ title, description, tech, image }) {
  return (
    <>
      <div className="projectTile">
        <img className="projectPicture" src={image}></img>
        <div className="projectDescriptionContainer">
          <div className="projectTitle">{title}</div>
          <div className="projectBody">{description}</div>
          <div style={{ fontSize: "30px", marginBottom: "2%" }}>
            Technologies
          </div>
          <div className="projectTechContainer">
            {tech.map((skill) => (
              <SkillsCard photo={skill[1]} software={skill[0]} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .projectTile {
          width: 80%;
          height: 29%;
          border: 1px solid black;
          margin-top: 2%;
          display: flex;
          flex-direction: row;
          box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.3);
          border-radius: 25px;
        }
        .projectPicture {
          margin-top: 1%;
          margin-left: 0.5%;
          border-radius: 25px;
          height: 90%;
          width: 30%;
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
          justify-content: space-evenly;
          margin-right: 1%;
          margin-bottom: 1%;
          width: 100%;
          height: 40%;
        }
      `}</style>
    </>
  );
}
