import React, { useState, useEffect } from "react";

const JetztBewerben = () => {
  return (
    <div id="unser-campus">
      <span className="aside">Digitale Zukunft</span>

      <div className="threecolumn">
        <div className="imgleft">
          <img src="/img/WarumWeb.png" alt="" />
        </div>

        <div className="onecolumn">
          <h1>
            WARUM <br />
            <span className="super">WEB-ENTWICKLUNG?</span>
          </h1>
          <p>
            Die ganze Welt wird digitaler – ganze Branchen und Bereiche shiften
            ihre Aktivitäten immer mehr ins{" "}
            <span className="internet">Internet</span>. Als Webentwicklerin hast
            du nicht nur hervorragende Karrierechancen für einen zukunftsfähigen
            Job, du profitierst auch von flexiblen{" "}
            <span className="web-app">Arbeitszeiten,&nbsp;Home Office </span>
            und flachen Hierarchien.
            <br />
            <br />
            Gerade in der IT werden qualifizierte Frauen dringend benötigt - die
            Branche tut einiges, um Entwicklerinnen für sich zu gewinnen. Mehr
            Vielfalt und neue Perspektiven führen nachweislich zu mehr Erfolg
            und einen guten Teamgeist. Also mehr weibliche Nerds? Nicht nur! Als
            Entwicklerin übernimmst du vielfältge Aufgaben und bist in viele
            Prozesse eingebunden.
          </p>
        </div>

        <div className="imgright">
          <img src="/img/DSC7185_LowRes.png" alt="" />
        </div>
      </div>
      <style jsx>{`
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
          padding: 150px 0 100px;
          min-height: 100vh;
          position: relative;
          background-color: #fff;
        }
        #unser-campus .imgleft,
        #unser-campus .imgright {
          overflow: hidden;
        }

        #unser-campus img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        .threecolumn {
          display: grid;
          grid-template-columns: 45% 42% 3%;
          padding-bottom: 40px;
          gap: 0 5%;
        }
        .onecolumn {
          display: grid;
          grid-template-columns: 100%;
        }

        h1 {
          font-family: "Fira Sans_extra_bold";
          font-weight: 900;
          font-size: 70px;
          line-height: 45px;
          color: #10375c;
          margin: 0;
        }
        h1 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: #10375c;
          font-weight: 300;
        }
        .super,
        .internet,
        .web-app {
          position: relative;
        }
        .web-app {
          white-space: nowrap;
        }
        .super::after {
          position: absolute;
          background: url("/Vector49.svg") center/cover no-repeat;
          height: 3px;
          width: 130px;
          left: -160px;
          bottom: 0;
          content: "";
          display: block;
        }
        .internet::after {
          position: absolute;
          background: url("/Vector55.svg") center/cover no-repeat;
          height: 100%;
          width: 120%;
          left: -7px;
          bottom: 0;
          content: "";
          display: block;
        }
        .web-app::after {
          position: absolute;
          background: url("/Vector56.svg") center/cover no-repeat;
          height: 10%;
          width: 100%;
          right: 0;
          bottom: -2px;
          content: "";
          display: block;
        }
        p {
          color: #10375c;
          font-family: "Fira Sans_regular";
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 22px;
          justify-self: center;
        }
        @media only screen and (max-width: 1635px) {
          h1 {
            font-size: 5em;
          }
        }
        @media only screen and (max-width: 1440px) {
          h1 {
            font-size: 3em;
          }
        }
        @media only screen and (max-width: 1040px) {
          h1 {
            font-size: 2.6em;
          }
        }
        @media only screen and (max-width: 768px) {
          #unser-campus {
            padding: 50px 0 0;
            min-height: 50vh;
          }
          h1 {
            font-size: 45px;
            line-height: 38px;
          }
          h1 span.super {
            -webkit-text-stroke-width: 2px;
          }

          .threecolumn {
            grid-template-columns: 14fr 1fr;
            gap: 50px 0;
          }
          h1 span.super {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 2px;
          }
          #unser-campus .imgleft {
            grid-column: 1/-1;
          }
          .onecolumn {
            padding: 0 5% 0 10%;
          }
          p {
            font-size: 16px;
            line-height: 20px;
          }
          @media only screen and (max-width: 375px) {
            h1 {
              font-size: 3em;
              line-height: 1em;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default JetztBewerben;
