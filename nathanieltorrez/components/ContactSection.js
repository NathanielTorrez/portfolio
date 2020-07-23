import React from "react";

export default function ContantSection() {
  return (
    <>
      <section>
        <div className="title">Need a developer?</div>
        <p className="body">
          I am currently open to hearing about new opportunities in the San
          Francisco Bay Area or remotely and would be happy to showcase my
          skills. Just hit the email button below and I will be sure to get back
          to you shortly.
        </p>
        <div className="buttonsContainer">
          <a
            href="https://www.linkedin.com/in/nathanieltorrez/"
            className="button"
          >
            LinkedIn
          </a>
          <a href="https://github.com/NathanielTorrez" className="button">
            Github
          </a>
          <a
            href="mailto:nathanieltorrezdev@gmail.com?subject=I%20was%20just%20on%20your%20website..."
            className="button"
          >
            Email
          </a>
        </div>
      </section>

      <style jsx>{`
        section {
          min-height: 60vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 5%;
          text-align: center;
        }
        .title {
          font-size: 4.99vh;
          text-decoration: underline;
          color: rgb(204, 214, 246);
          font-family: "Montserrat", sans-serif;
          font-weight: 600;
        }
        .body {
          font-size: 3vh;
          color: rgb(250, 250, 250);
          max-width: 70%;
          margin-top: 5%;
          padding-left: 10%;
          padding-right: 10%;
        }
        .buttonsContainer {
          display: flex;
          min-height: 20%;
          width: 80%;
          justify-content: center;
        }
        .button {
          display: flex;
          font-size: 20px;
          border: 1.25px solid #2892d7;
          border-radius: 2px;
          color: #2892d7;
          padding: 1.5rem 3rem;
          margin: 5%;
          text-decoration: none;
        }
        .button:hover {
          background: rgba(40, 146, 215, 0.1);
          border-width: 1.3px;
          text-decoration: none;
        }
        @media (max-width: 600px) {
          .button {
            margin-top: 5%;
            padding: 1.3rem 6.5rem;
          }
          .button:hover {
            background: #252934;
            border-width: 1.25px;
            text-decoration: none;
          }
          .body {
            max-width: 100%;
          }
          .buttonsContainer {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
