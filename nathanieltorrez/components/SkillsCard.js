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
          width: 350px;
          height: 50px;
          border: 0.3px solid #252934;
          border-radius: 25px;
          display: flex;
          align-items: center;
          font-size: 2.1vh;
          margin-left: 1%;
        }
        img {
          margin-left: 5%;
          margin-right: 5%;
          border-radius: 15px;
        }
        .cardName {
          width: 60%;
          text-align: center;
        }
      `}</style>
    </>
  );
}
