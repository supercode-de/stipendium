const Header = () => {
  const pixelSize = 1; // Width of Lines in Background

  return (
    <div id='header'>
      <div className="graphical-headlines">
        <div>
          <h1 className="headerHeadline">
            <span>Super-Stipendium</span>
            <span>Super-Stipendium</span>
            Super-Stipendium
          </h1>
          <div className="graphic-headline-uxui">
            <img src='/img/UI.svg' alt='' className='uiuxheadline-graphic' />
          </div>
        </div>

      </div>
      <style jsx>{`
        #header {
          background: url('/img/hero_4.png') top/cover no-repeat;
        }
        .nav-headlines {
          display: flex;
          justify-content: space-between;
          padding: 46px 32px 20px 32px;
        }
        .nav-headlines h2 {
          font-family: 'Fira Sans_bold';
          font-size: 20px;
          color: #fff;
          margin: 0;
        }

        .graphical-headlines {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .graphic-headline-uxui {
          text-align: center;
          margin-top: -100px;
        }
        .graphic-headline-uxui img {
          width: 60%;
        }
        h1 {
          font-family: 'Fira Sans_bold';
          margin: 0;
          padding-bottom: 10vh;
          font-size: 120px;
          letter-spacing: 2px;
          color: #fff;
          text-align: center;
          line-height: 18px;
          font-weight: 200;
          position: relative;
        }

        h1 span {
          display: block;
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: #fff;
        }
        @media (max-width: 1040px) {
          h1 {
            font-size: 4em;
          }
        }
        @media (max-width: 768px) {
          img:nth-of-type(2){
            width: 15%;
          }
          .graphical-headlines{
            height: 60vh;
          }
          h1 {
            font-size: 4em;
            line-height: 32px;
          }
        }
          @media (max-width: 468px) {
            h1 {
              font-size: 2.8em;
              line-height: 13px;
              width: 100%;
            }
            #header {
              height: 70vh;
            }
          }
        @media (max-width: 425px) {

          .graphical-headlines{
            height: 58vh;
          } 

        }
        @media (max-width: 375px) {
          .nav-headlines {
            flex-direction: column;
            padding-bottom: 0;
          }
        }
        @media (max-width: 320px) {

          .graphical-headlines {
            height: 60vh;
          }
          .graphic-headline-uxui {
            margin-top: -80px;
          }
          #header {
            height: 46vh;
          }
        }

      `}</style>
    </div>
  );
};

export default Header;
