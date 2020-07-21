import React from "react";
import ProjectTile from "./ProjectTile.js";
import Flip from "react-reveal/Flip";

export default function ProjectsSection() {
  const BottomsUpStack = [
    ["Javascript", "/jsLogo.png"],
    ["Node", "/nodeLogo.jpg"],
    ["React", "/reactLogo.jpg"],
    ["CSS", "/cssLogo.jpg"],
    ["HTML", "/htmlLogo.jpg"],
    ["PostgreSQL", "/postgresLogo.jpg"],
  ];
  const BookTripStack = [
    ["Javascript", "/jsLogo.png"],
    ["Node", "/nodeLogo.jpg"],
    ["Express", "/expressImage.jpg"],
    ["PostgreSQL", "/postgresLogo.jpg"],
  ];
  const RentsyStack = [
    ["Javascript", "/jsLogo.png"],
    ["Node", "/nodeLogo.jpg"],
    ["Express", "/expressImage.jpg"],
    ["React", "/reactLogo.jpg"],
    ["CSS", "/cssLogo.jpg"],
    ["HTML", "/htmlLogo.jpg"],
  ];
  return (
    <>
      <section className="projectsSectionContainer">
        <Flip right>
          <div className="title">Projects</div>
        </Flip>
        <ProjectTile
          title={"BottomsUp"}
          description={
            "Full Stack React Native ios application with a Express.js backend and PostgreSQL database. Allows users to become an expert bartender with just a tap of a button. Supplying them with a list of drinks as well as instructions and ingredients list to craft the cocktail!"
          }
          tech={BottomsUpStack}
          image={"./BottomsUp.jpg"}
        />

        <ProjectTile
          title={"BookTrip"}
          description={
            "Full Stack booking app that allows users to find home rental. I primarly worked on the backend to optimize functions as well as scale project horizantally to handle more than 2000rps with a sub 1000ms latency under heavy load."
          }
          tech={BookTripStack}
          image={"./BookTrip.png"}
        />

        <ProjectTile
          title={"Rentsy - AirBnB Clone"}
          description={
            "Full Stack rental application built using a microservice structure and test-driven development. Designed review component that utilized an Express server backend, containerized with docker and deployed on AWS EC2!"
          }
          tech={RentsyStack}
          image={"./Rentsy.png"}
        />

        <div className="projectsContainer"></div>
      </section>
      <style jsx>{`
        .projectsSectionContainer {
          height: 150vh;
          width: 100%;
          background: white;
          color: #252934;
          display: flex;
          flex: auto;
          flex-direction: column;
          align-items: center;
          font-family: "Montserrat", sans-serif;
        }
        .title {
          font-size: 5vh;
          text-decoration: underline;
        }
        @media (max-width: 800px) {
          .projectsSectionContainer {
            height: 225vh;
          }
          .title {
            font-size: 7vh;
          }
        }
      `}</style>
    </>
  );
}
