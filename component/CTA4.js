import React, { useState, useEffect } from "react";
import TypeForm from "./TypeForm";


const CTA4 = (props) => {
  return (
    <div id="unser-campus">
      <div>
        <h1>
          WARTE NICHT LÄNGER <br />
          UND NUTZE <span className="super">DEINE CHANCE!</span>
        </h1>
      </div>

      <div className="twocolumn">


        <div className="buttoncolumn">
          <TypeForm />
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
          padding: 100px 0 100px;
          min-height: 68vh;
          position: relative;
          background-color: #070021;
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
          background-size: ${props.width}px ${props.width}px;
        }
        .twocolumn {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4%;
          padding: 0 8.3% 40px;
        }
        .onecolumn {
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
        }
        .twocolumn > img {
          width: 100%;
          height: 100%;
        }
        h1 {
          font-family: "Neue_Machina_Regular_400";
          color: #fff;
          font-weight: 300;
          font-size: 6em;

          line-height: 105px;

          margin-left: 8.3%;
        }
        h1 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: #fff;
          font-weight: 300;
        }
        
        p {
          color: #fff;
          font-family: 'Fira Mono', monospace;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 29px;
          justify-self: center;
          max-width: 480px;
        }
        
        button {
          margin: 2em 1em;
          font-family: 'Fira Mono', monospace;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 16px;
          text-align: center;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          padding: 18px 32px;
          background: transparent;
          border: 1px solid #fff;
          color: #fff;
          justify-self: center;
        }
        @media only screen and (max-width: 1024px) {
          #unser-campus {
            padding: 50px 0;
          }
          h1 {
            font-size: 4em;

            line-height: 1em;
          }
        }

        @media only screen and (max-width: 768px) {
          #unser-campus {
            padding: 50px 0 0;
            min-height: 50vh;
          }
          h1 {
            font-size: 3em;

            line-height: 2em;
          }
          h1 span.super {
            -webkit-text-stroke-width: 2px;
          }

          .twocolumn {
            grid-template-columns: 1fr;
          }
          .onecolumn {
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }
          .buttoncolumn {
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default CTA4;

// .img-three {
//   margin-left: ${props.width * 3}px;
//   margin-top: ${props.width * .5}px;
// }
// .img-four {
//   margin-left: ${props.width * 8}px;
//   margin-top: -${1.5 * props.width}px
// }
// .img-five {
//   margin-top: ${props.width}px;
// }
// .img-six {
//   margin-left: ${props.width * 7}px;
//   margin-top: ${props.width}px
// }
