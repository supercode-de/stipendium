import React, { useState, useEffect } from "react";
import TypeForm_blau from "./TypeForm_blau";

const CTA4 = () => {
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
          <TypeForm_blau />
        </div>
      </div>
      <style jsx>{`
        #unser-campus {
          padding: 100px 0 100px;
          min-height: 68vh;
          position: relative;
          background-color: #ffda19;
          color: #10375c;
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
        h1 {
          font-family: "Fira Sans_extra_bold";
          font-weight: 900;
          font-size: 5.1em;
          line-height: 80px;
          margin-left: 9%;
        }
        h1 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: #10375c;
          font-weight: 300;
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
            font-size: 60px;
            line-height: 60px;
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
