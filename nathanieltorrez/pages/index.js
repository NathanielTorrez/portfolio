import Head from "next/head";
import React from "react";
import TopSection from "../components/topSection.js";
import AboutSection from "../components/AboutSection.js";

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
        </Head>

        <main>
          <TopSection />
          <AboutSection />
        </main>

        <footer>Created by Nathaniel Torrez Development</footer>

        <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #252934;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      `}</style>

        <style jsx global>{`
          html,
          body {
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
