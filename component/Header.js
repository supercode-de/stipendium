import Arrow from "./small/Arrow";

const Header = () => {
  const pixelSize = 1; // Width of Lines in Background

  return (
    <div id="header">
      <div className="bg">
        <span className="aside">lerne programmieren</span>

        <div className="content">
          <h1>
            <span>Super-Stipendium</span>
            <span>Super-Stipendium</span>
            Super-Stipendium
          </h1>
          <img src="/Frauen_in_Tech_2.svg" alt="" className="frauen-in-tech" />
        </div>
      </div>
      <style jsx>{`
        #header {
          background: url("/Header_neu.png") center/cover no-repeat;
        }
        .bg {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          position: relative;
          background: rgba(0, 0, 0, 0.3);
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

        .content {
          position: relative;

          padding-top: 70px;
        }
        .frauen-in-tech {
          position: absolute;
          right: 0;
          bottom: -50%;
          max-width: 40vw;
          height: 15rem;
        }

        h1 {
          font-family: "Fira Sans_bold";
          margin: 0;
          padding-bottom: 10vh;
          font-size: 80px;
          letter-spacing: 2px;
          color: #fff;
          text-align: center;
          line-height: 20px;
          font-weight: 200;
        }

        h1 span:nth-of-type(1) {
          display: block;
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: #fff;
        }
        h1 span:nth-of-type(2) {
          display: block;
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: #fff;
        }
        h3 {
          font-family: "Fira Sans";
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 37px;
          color: #fff;
          margin: 0;
          text-align: center;
        }
        h3:first-of-type {
          margin-top: 100px;
        }
        h3:last-of-type {
          margin-bottom: 50px;
        }
        p {
          font-family: "Fira Sans";
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 14px;
          letter-spacing: 3px;
          text-transform: uppercase;

          color: #ffffff;
        }

        @media (max-width: 1040px) {
          h1 {
            font-size: 50px;
            line-height: 12px;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 40px;
            line-height: 10px;
          }

          .frauen-in-tech {
            right: 0;
            bottom: -30%;
            max-width: 45vw;
            height: 10rem;
          }
        }

        @media (max-width: 468px) {
          h3 {
            font-size: 1.6em;
            margin-bottom: 0;
          }

          h1 {
            font-size: 24px;
            line-height: 6px;
          }
          h1 span:nth-of-type(1),
          h1 span:nth-of-type(2) {
            -webkit-text-stroke-width: 0.8px;
          }

          .frauen-in-tech {
            top: 40%;
            height: 6rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
