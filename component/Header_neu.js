import Arrow from './small/Arrow';

const Header = (props) => {
  const pixelSize = 1; // Width of Lines in Background

  return (
    <div id='header'>
      <div className='bg'>
        <span className='aside'>lerne ux/ui-design</span>

        <div className='content'>
          <h1>
            <span>Super-Stipendium</span>
            <span>Super-Stipendium</span>
            Super-Stipendium
          </h1>
          <img src='/img/UI.svg' alt='' className='frauen-in-tech' />
        </div>
        {/* <h3>Erhalte ein Super-Stipendium</h3>
        <h3>und lerne Programmieren!</h3> */}
        {/* <Arrow /> */}
      </div>
      <style jsx>{`
        #header {
          background: url('/img/hero.jpg') center/cover no-repeat;
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
          font-family: 'Poppins', sans-serif;
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
          right: 11%;
          top: 37%;
          max-width: 37vw;
          height: 15rem;
        }

        h1 {
          // font-family: 'Neue_Machina_Regular_400';
          font-family: 'Fira Sans_bold';
          margin: 0;
          padding-bottom: 10vh;
          font-size: 5em;
          letter-spacing: 2px;
          color: #fff;
          text-align: center;
          line-height: 18px;
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
          // font-family: 'Neue_Machina_Regular_400';
          font-family: 'Fira Sans';
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
          // font-family: 'Neue_Machina_Regular_400';
          font-family: 'Fira Sans';
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
            font-size: 4em;
          }
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 4em;
            line-height: 32px;
          }

          .frauen-in-tech {
            top: 45%;
            height: 10rem;
          }
        }
        @media (max-width: 468px) {
          h3 {
            font-size: 1.6em;
            margin-bottom: 0;
          }
          // h3:first-of-type {
          //   margin-top: 20px;
          // }
          // h3:last-of-type {
          //   margin-bottom: 20px;
          // }
          h1 {
            font-size: 3em;
            line-height: 0px;
            //   font-weight: 500;
            //   margin-bottom: 40px;

            width: 100%;
          }

          .frauen-in-tech {
            top: 40%;
            height: 4rem;
            width: 50%;
            right: 28%;
          }
          #header {
            height: 90vh;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
