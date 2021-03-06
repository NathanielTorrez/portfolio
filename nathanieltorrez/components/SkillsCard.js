import React from "react";

export default function SkillsCard({ photo, software }) {
  return (
    <>
      <div className="cardContainer">
        <img src={photo} alt="js logo" />
        <div className="cardName">{software}</div>
      </div>
      <style jsx>{`
        .cardContainer {
          max-width: 34vh;
          min-width: 30vh;
          height: 5vh;
          border: 0.02vh solid gray;
          border-radius: 10px;
          display: flex;
          align-items: center;
          font-size: 2.1vh;
          margin-left: 1%;
          margin-bottom: 1%;
          box-shadow: 0 0.2vh 0.4vh 0 rgba(0, 0, 0, 0.4);
        }
        img {
          max-width: 40%;
          margin-left: 5%;
          margin-right: 5%;
          border-radius: 15px;
          box-shadow: 0 0.3vh 0.5vh 0 rgba(0, 0, 0, 0.5);
        }
        .cardName {
          width: 60%;
          text-align: center;
        }
        @media (max-width: 800px) {
          .cardContainer {
            width: 13vh;
            min-width: 13vh;
            min-height: 10vh;
            flex-direction: column;
            font-size: 2vh;
            margin-bottom: 1%;
            box-shadow: 0 0.2vh 0.4vh 0 rgba(0, 0, 0, 0.5);
          }
          img {
            margin: 1%;
            margin-bottom: 4%;
          }
          .cardName {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
