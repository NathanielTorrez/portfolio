import React from "react";
import Fade from "react-reveal/Fade";

export default function TopSection() {
  return (
    <>
      <section className="top">
        <Fade left>
          <p className="intro">
            <span className="introName">Nathaniel Torrez.</span>
            <br />
            <span className="introTextRed">Full Stack Developer</span>,{" "}
            <span className="introTextGreen">Tech Enthusiast</span> and
            <span className="introTextBlue"> Entrepeneur</span>.
          </p>
        </Fade>
      </section>
      <style jsx>
        {`
          .top {
            color: #eaeaea;
            height: 100vh;
            width: 90%;
            display: flex;
            align-items: center;
            font-family: "Montserrat", sans-serif;
          }

          .intro {
            font-size: 6vh;
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
