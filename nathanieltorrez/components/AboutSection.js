import React from "react";
import SkillsCard from "./SkillsCard.js";

export default function AboutSection() {
  return (
    <>
      <section className="aboutContainer">
        <h1 className="title">About</h1>
        <div>
          <SkillsCard />
        </div>
      </section>
      <style jsx>{`
        .aboutContainer {
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #eaeaea;
          color: #252934;
        }

        .title {
          font-size: 50px;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
