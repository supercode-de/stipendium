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

          {/* <video autoPlay loop muted>
            <source src="/Google-Store.mp4" type="video/mp4" />
            "FILE should be deleted again!"
          </video> */}
        </div>
      </div>

      <style jsx>
        {`
          .flex {
            display: flex;
            font-family: "Fira Sans_bold";
            font-size: 70px;
            line-height: 60px;
            color: #10375c;
          }
          .flex:hover div:last-of-type {
            text-decoration: line-through;
            text-decoration-color: #ffda19;
          }
          .flex div {
            margin-bottom: 30px;
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
            background-color: #fff;
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
            -webkit-text-stroke-color: #10375c;
            font-weight: 300;
          }

          .super-green {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 1.5px;
            -webkit-text-stroke-color: #ffda19;
            font-weight: 300;
            font-size: 0.5em;
            padding-right: 10px;
          }
          @media (max-width: 1040px) {
            .flex {
              font-size: 3em;
              line-height: 50px;
            }
          }
          @media (max-width: 768px) {
            #supercode-usp2 {
              padding: 60px 0% 60px 6%;
            }
            .flex div {
              font-size: 40px;
              line-height: 40px;
            }

            .super-stroke {
              color: transparent;
              letter-spacing: 2px;
              -webkit-text-stroke-width: 1px;
              -webkit-text-stroke-color: #10375c;
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
