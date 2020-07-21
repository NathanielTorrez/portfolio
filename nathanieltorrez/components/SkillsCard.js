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
          width: 34vh;
          height: 5vh;
          border: 0.03vh solid #252934;
          border-radius: 25px;
          display: flex;
          flex: auto;
          align-items: center;
          font-size: 2.1vh;
          margin-left: 1%;
          box-shadow: 0 0.4vh 0.8vh 0 rgba(0, 0, 0, 0.5);
        }
        img {
          width: 4vh;
          margin-left: 5%;
          margin-right: 5%;
          border-radius: 15px;
          box-shadow: 0 0.3vh 0.5vh 0 rgba(0, 0, 0, 0.5);
        }
        .cardName {
          width: 60%;
          text-align: center;
        }
        @media (max-width: 600px) {
          .cardContainer {
            width: 23.2vh;
            height: 7vh;
            font-size: 3vh;
          }
        }
      `}</style>
    </>
  );
}
