import React from "react";
import "./Winner.scss";
import MePresent from "../../images/winner/me-present.jpg";
import MayPresent from "../../images/winner/may-present.jpg";
import ThreeAmigos from "../../images/winner/three-amigos.jpg";
import WinnersOrganizers from "../../images/winner/winners-with-organizers.jpg";
import TopThreeWinners from "../../images/winner/top-three-winners.jpg";

function Winner() {
  return (
    <section className="winner">
      <div className="container">
        <div className="top-text">
          <h2>WINNERS: 3MTT Kaduna TechForGood Hackathon</h2>
          <p>
            Participated in the 3MTT Kaduna TechForGood Hackathon, where me and
            my Team as #TeamHealthConnect won the grand price. Our solution, A
            Centralized Patients Record Management System aim to....
          </p>
        </div>
        <div className="content">
          <div className="left">
            <div className="winner-images">
              <img src={MePresent} alt="winner One" />
            </div>
          </div>
          <div className="right">
            <div className="right-content">
              <div className="winner-images">
                <img src={MayPresent} alt="winner One" />
              </div>
              <div className="winner-images">
                <img src={ThreeAmigos} alt="winner Two" />
              </div>
              <div className="winner-images">
                <img src={WinnersOrganizers} alt="winner Three" />
              </div>
              <div className="winner-images">
                <img src={TopThreeWinners} alt="winner Four" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Winner;
