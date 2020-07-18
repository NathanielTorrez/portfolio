import React from "react";

export default function SkillsCard() {
  return (
    <>
      <div className="cardContainer">Javascript</div>

      <style jsx>{`
        .cardContainer {
          width: 350px;
          height: 50px;
          border: 0.5px solid black;
          border-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
        }
      `}</style>
    </>
  );
}
