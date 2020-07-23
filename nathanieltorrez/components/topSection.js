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
        <Fade right>
          <a
            href="./NathanielTorrezCopy.pdf"
            download="Resume"
            className="resumeButton"
          >
            View Resume
          </a>
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
            max-height: 100vh;
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
          .resumeButton {
            display: flex;
            position: relative;
            font-size: 16px;
            border: 1.25px solid #2892d7;
            border-radius: 2px;
            color: #2892d7;
            padding: 1.3rem 1.8rem;
            margin-top: 10%;
            text-decoration: none;
          }
          .resumeButton:hover {
            background: rgba(40, 146, 215, 0.1);
            border-width: 1.3px;
            text-decoration: none;
          }

          @media (min-width: 800px) {
            .introContainer {
              font-size: 50px;
            }
          }
          @media (max-width: 600px) {
            .resumeButton {
              margin-top: 20%;
            }
            .resumeButton:hover {
              background: #252934;
              border-width: 1.25px;
              text-decoration: none;
            }
          }
        `}
      </style>
    </>
  );
}
