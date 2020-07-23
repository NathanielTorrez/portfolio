import React from "react";
import SkillsCard from "./SkillsCard.js";
import Slide from "react-reveal/Slide";

export default function ProjectTile({ title, description, tech, image }) {
  return (
    <>
      <Slide left>
        <div className="projectTile">
          <div className="projectTitleHidden">{title}</div>
          <div className="projectPictureContainer">
            <img className="projectPicture" src={image} />
            <Slide left>
              <a className="button" href={tech[0][2]}>
                View on Github
              </a>
            </Slide>
          </div>
          <div className="projectDescriptionContainer">
            <div className="projectTitle">{title}</div>
            <div className="projectBody">{description}</div>
            <div style={{ fontSize: "4vh", marginBottom: "1.5%" }}>
              Technologies
            </div>
            <div className="projectTechContainer">
              {tech.map((skill) => (
                <div className="techAdjustment">
                  {" "}
                  <SkillsCard photo={skill[1]} software={skill[0]} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>
      <style jsx>{`


        .projectTile {
          min-width: 20%;
          max-width: 85%;
          height: 29%;
          border: 0.1vh solid black;
          margin-top: 2%;
          display: flex;
          flex-direction: row;
          align-content: center;
          justify-content:center:
          box-shadow: 0 0.5vh 1vh 0 rgba(0, 0, 0, 0.3);
          border-radius: 2.5vh;
          background:#f4f4f4;
        }
        .projectPictureContainer {
          display: flex;
          justify-content:center;
          min-width: 30%;
          max-width: 40%;
          height:90%;
        }

        .projectPicture {
          margin: 1%;
          margin-left:3%;
          border-radius: 2.5vh;
          width:100%;
          box-shadow: 0 0.3vh 1vh 0 rgba(0, 0, 0, 0.3);
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
          margin-bottom:1%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }
        .techAdjustment{
          margin-bottom:2%;
        }


        @media (max-width: 800px) {
          .projectTile {
            margin-bottom: 5%;
            flex-direction: column;
            align-items: center;
            text-align: center;
            max-width:98%;
          }
          .projectPicture {
            min-width: 80%;
            max-width: 100%;
          }
          .projectDescriptionContainer {
            width: 90%;
          }
          .projectBody {
            margin-top: 5%;
            margin-bottom: 5%;
            font-size:2.2vh;
          }
          .projectTitle {
            display: none;
            font-size: 5vh;
          }
          .projectTitleHidden {
            display: block;
          }
          .projectPictureContainer {
            flex-direction:column;
            max-width:70%;
          }
          .button {

            color:  #2892d7;
            font-family: "Montserrat", sans-serif;
            font-size:22px;
            //background-color: #2892d7;
            max-width: 90%;
            min-height: 5%;
            max-height:5%;
            margin-top:3%;
            margin-left:5%;
            border-radius:3px;
            padding:.5rem 1rem;
            border:.5px solid  #2892d7;
            box-shadow: 0 0.8vh 1vh 0 rgba(0, 0, 0, 0.6);
            line-height:20px;
            text-decoration: none;

          }
        }
        @media (min-width:801px) {
          .projectPictureContainer:hover .button {
            display: flex;
            position: absolute;
            align-self: center;
            width: 20%;
            justify-content: center;
            align-content: center;
            align

         }
         .projectPictureContainer:hover .projectPicture {
              filter:gray;
            -webkit-filter: grayscale(100%);
            -o-transition:.5s;
            -ms-transition:.5s;
            -moz-transition:.5s;
            -webkit-transition:.5s;
            transition:.5s;
         }
         .button {
          display: none;
          color: white;
          font-family: "Montserrat", sans-serif;
          font-size:22px;
          background-color: #2892d7;
          max-width: 10%;
          min-height: 5%;
          max-height:10%;
          border-radius:2px;
          border:.3px solid black;
          box-shadow: 0 0.8vh 1vh 0 rgba(0, 0, 0, 0.6);
          line-height:45px;
          text-decoration: none;

        }
      }
      `}</style>
    </>
  );
}
