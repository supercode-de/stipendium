import React from "react";

const SupercodeUsp2 = () => {
  return (
    <>
      <div id="supercode-usp2">
        <span className="aside"> 4 x SUPER </span>

        <div className="twocolumn">
          <div className="center">
            <div className="flex">
              <div>
                <span className="super-green">01</span>
              </div>
              <div>
                <span className="super-stroke">2</span>
                Trainer*innen <br /> zeitgleich{" "}
                <span className="super-stroke">pro Tag</span>
              </div>
            </div>
            <div className="flex">
              <div>
                <span className="super-green">02</span>
              </div>
              <div>
                über <span className="super-stroke">60%</span> Praxis
              </div>
            </div>

            <div className="flex">
              <div>
                <span className="super-green">03</span>
              </div>
              <div>
                Fokus auf <span className="super-stroke">Javascript</span>
              </div>
            </div>
            <div className="flex">
              <div>
                <span className="super-green">04</span>
              </div>
              <div>
                <span className="super-stroke">Moderner Campus</span>
              </div>
            </div>
          </div>
          <img src="/img/Usp2.png" alt="" />
        </div>
      </div>

      <style jsx>{`
          .flex {
            display: flex;
            font-family: "Neue_Machina_Regular_400";
            font-size: 4em;
            color: #fff;
            line-height: 80px;
          }
          .flex:hover div:last-of-type {
            text-decoration: line-through;
            text-decoration-color: #30e1b9;
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
          #supercode-usp2 {
            padding: 100px 0 100px 10%;

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
            background-size: calc(100vw / 12) calc(100vw / 12);
          }
          .twocolumn {
            display: grid;
            grid-template-columns: 70% 30%;
            padding-bottom: 40px;
          }

          .twocolumn > img {
            width: 100%;
          }
          .center {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .super-stroke {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: #fff;
            font-weight: 300;
          }

          .super-green {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #30e1b9;
            font-weight: 300;
            font-size: 0.5em;
            padding-right: 10px;
          }
          @media (max-width: 1040px) {
            .flex {
              font-size: 3em;
              line-height: 50px;
            }
            h1 {
              font-size: 2em;
              line-height: 40px;
            }
          }
          @media (max-width: 768px) {
            #supercode-usp2 {
              padding: 60px 0% 60px 6%;
            }
            h1 {
              font-size: 3.5em;
            }
            p {
              font-size: 2em;
              margin-bottom: 50px;
            }
            .super-stroke {
              color: transparent;
              letter-spacing: 2px;
              -webkit-text-stroke-width: 1px;
              -webkit-text-stroke-color: #fff;
              font-weight: 300;
            }
          }
          @media (max-width: 568px) {
            img {
              display: none;
            }
            .twocolumn {
              grid-template-columns: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default SupercodeUsp2;
