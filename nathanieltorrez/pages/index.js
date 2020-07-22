import Head from "next/head";
import React from "react";
import TopSection from "../components/topSection.js";
import AboutSection from "../components/AboutSection.js";
import ProjectsSection from "../components/ProjectsSection.js";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Head>
          <title>Nathaniel Torrez</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body>
          <main>
            <TopSection />
            <AboutSection />
            <ProjectsSection />
          </main>
        </body>

        <footer>Created by Nathaniel Torrez Development</footer>

        <style jsx>{`
        main {
          display: block;
          min-height:100vh;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 30px solid #252934;
          display: flex;
          justify-content: center;
          align-items: center;
          background:white;

        }
      }
      `}</style>

        <style jsx global>{`
          html,
          body {
            background: #252934;
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </>
    );
  }
}
