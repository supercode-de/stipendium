import React, { useState, useEffect } from "react";
import Typeform from "./TypeForm";

const JetztBewerben = () => {
  return (
    <div id="unser-campus">
      <span className="aside"> Bewirb dich jetzt! </span>

      <div className="twocolumn">
        <div className="onecolumn">
          <h1>
            “An alle Karrierewechsel*innen da draußen... wenn ihr es wirklich
            wollt - fangt einfach an. Überlegt nicht zu viel. Schreibt die
            ersten Zeilen in HTML, denn “Hallo Welt” könnte der Beginn von etwas
            Großem sein!”
          </h1>
          <div className="circle">
            <h1>
              Emilija Sekulic, Video-
              <br />
              Journalistin und Bootcamp-
              <br />
              Teilnehmerin
            </h1>
          </div>

          {/* 
                    <h1> Du willst < br /> < span > programmieren </span> lernen <br /> und einen Job mit < br /> Zukunft ? Das < span className="super" > Super - < br /> Stipendium </span> ist deine <br /> <span> Chance! </span></h1>
                  */}
          <p>
            Worauf wartest Du noch?
            <br />
            Bewirb dich jetzt und mit etwas Glück
            <br />
            startest du bald deine IT Karriere!
          </p>
          <div className="center">
            <Typeform />
          </div>
        </div>
        <img src="/Emilija.png" alt="" />
      </div>

      <style jsx>
        {`
          .center {
            text-align: center;
          }
          .aside {
            position: absolute;
            transform: rotate(-90deg);
            transform-origin: left;
            color: #fff;
            font-weight: 300;
            left: 3%;
            top: 60%;
            font-family: "Poppins", sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #ffffff;
          }
          #unser-campus {
            padding: 100px 0 100px 10%;

            position: relative;
            background-color: #5d3ede;
            background-image: linear-gradient(
                to right,
                rgba(255, 255, 255, 0.25) 0,
                rgba(255, 255, 255, 0.25) 1px,
                transparent 1px,
                transparent 100%
              ),
              linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.25) 0,
                rgba(255, 255, 255, 0.25) 1px,
                transparent 1px,
                transparent 100%
              );
            background-position: 0 0, 0 0;
            background-size: calc(100vw / 12) calc(100vw / 12);
          }
          .twocolumn {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 0 10%;
            // padding-bottom: 40px;
            // margin-bottom: 100px;
          }
          .onecolumn {
            display: grid;
            grid-template-columns: 1fr;
          }
          .twocolumn > img {
            width: 100%;
            align-self: center;
          }
          h1 {
            // font-family: 'Neue_Machina_Regular_400';
            font-family: "Fira Sans_regular";
            font-size: 1.9em;
            color: #fff;
          }
          h1 span.super {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: #fff;
            font-weight: 300;
          }
          h1 span:first-of-type,
          h1 span:last-of-type {
            position: relative;
          }
          h1 span:first-of-type::after {
            position: absolute;
            background: url("/vector41.svg") center/cover no-repeat;
            height: 2px;
            width: 70%;
            right: 0;
            bottom: 4px;
            content: "";
            display: block;
          }
          h1 span:first-of-type::before {
            position: absolute;
            background: url("/Vector41.svg") center/cover no-repeat;
            height: 2px;
            width: 50%;
            right: 0;
            bottom: 0px;
            content: "";
            display: block;
            transform: rotate(0.5deg);
          }
          h1 span:last-of-type::after {
            position: absolute;
            background: url("/Vector43.svg") center/cover no-repeat;
            height: 160%;
            width: 100%;
            right: 0;
            bottom: -10px;
            content: "";
            display: block;
          }

          .circle {
            position: relative;
            display: flex;
          }
          .circle h1 {
            display: inline-block;
          }
          .circle:after {
            content: "";
            display: flex;
            position: absolute;
            top: 0;
            bottom: 0;
            left: -70px;
            right: 0;
            display: block;
            // height: 100%;
            // width: 100%;
            background: url(/img/CircleVectorEmilija.svg) center/contain
              no-repeat;
          }

          p {
            color: #fff;
            font-family: "Fira Sans_regular";
            font-style: normal;
            font-weight: normal;
            //font-size: 1.5em;
            line-height: 22px;
            justify-self: center;
            //max-width: 620px;
            padding-left: 10%;
          }
          button {
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 3px;
            text-transform: uppercase;
            padding: 10px 30px;
            background: transparent;
            border: 1px solid #fff;
            color: #fff;
            justify-self: center;
          }
          button:hover {
            color: #5d3ede;
            background: #fff;
          }

          @media (max-width: 1040px) {
            h1 {
              font-size: 2em;
              line-height: 40px;
            }
            .twocolumn {
              grid-template-columns: 1fr;
              margin-bottom: 40px;
            }
            .twocolumn > img {
              width: 60%;
              align-self: center;
              justify-self: center;
            }
            #unser-campus {
              padding: 100px 6%;
            }

            .circle {
            }
            .circle:after {
              width: 70%;
              left: -7%;
            }
          }
          @media (max-width: 768px) {
            h1 {
              font-size: 3em;
            }
            p {
              font-size: 2em;
              margin-bottom: 50px;
            }
            .twocolumn {
              grid-template-columns: 1fr;
            }
            .twocolumn > img {
              width: 80%;
              align-self: center;
              justify-self: center;
            }
          }
          @media (max-width: 468px) {
            #unser-campus {
              padding: 100px 30px;
            }
            h1 {
              font-size: 2em;
            }
            p {
              font-size: 1.3em;
            }
            .twocolumn {
              grid-template-columns: 1fr;
              margin-bottom: 10px;
            }
            .twocolumn > img {
              width: 100%;
              align-self: center;
              justify-self: center;
            }

            .circle:after {
              height: 100;
              width: 110%;
              // left: -7%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default JetztBewerben;
