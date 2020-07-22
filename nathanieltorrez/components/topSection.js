import React from "react";
import Fade from "react-reveal/Fade";

export default function TopSection() {
  return (
    <>
      <section className="top">
        <Fade left>
          <div className="introContainer">
            <div className="introName">Nathaniel Torrez.</div>
            <div>Full Stack Developer, Tech Enthusiast and Entrepeneur.</div>
          </div>
        </Fade>
      </section>
      <style jsx>
        {`
          .top {
            color: #eaeaea;
            min-height: 100vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-right: 1rem;
            padding-left: 1rem;
            font-family: "Montserrat", sans-serif;
          }

          .introContainer {
            font-size: 2rem;
            max-width: 100%;
            max-height: 100vh;
            font-weight: 600;
            margin: 0;
            display: flex;
            flex-direction: column;
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

          @media (min-width: 800px) {
            .introContainer {
              font-size: 50px;
            }
          }
        `}
      </style>
    </>
  );
}
