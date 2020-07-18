import React from "react";

export default function TopSection() {
  return (
    <>
      <section className="top">
        <h1 className="intro">
          <span className="introName">Nathaniel Torrez.</span>
          <br />
          <span className="introTextRed">Full Stack Developer</span>,{" "}
          <span className="introTextGreen">Tech Enthusiast</span> and
          <span className="introTextBlue"> Entrepeneur</span>.
        </h1>
      </section>
      <style jsx>
        {`
          .top {
            color: #eaeaea;
            height: 100vh;
          }

          .intro {
            margin-top: 25%;
            font-size: 60px;
            width: 100%;
            font-weight: 600;
          }
          .introTextRed :hover {
            color: red;
            text-decoration: underline;
          }
          .introTextGreen :hover {
            color: green;
            text-decoration: underline;
          }
          .introTextBlue :hover {
            color: CornflowerBlue;
            text-decoration: underline;
          }
          .introName {
            color: rgb(204, 214, 246);
            text-decoration: underline;
          }
        `}
      </style>
    </>
  );
}
