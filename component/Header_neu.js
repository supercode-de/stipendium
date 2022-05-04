import Arrow from './small/Arrow';

const Header = () => {
  const pixelSize = 1; // Width of Lines in Background

  return (
    <div id='header'>
      <div className="nav-headlines">
        <h2>#SUPERSTIPENDIUM</h2>
        <h2>EINE AKTION VON</h2>
      </div>
      <div className="nav-logos">
        <img src="/img/shetani-logo-2.png" alt="shetani logo" title="Shetani oHG"/>
        <img src="/img/supercode-signet.svg" alt="supercode logo" title="supercode GmbH"/>
        <img src="/img/SuperDigital-signet.svg" alt="super digital logo" title="SuperDigital e.V."/>
      </div>
      <div className="graphical-headlines">
        <div>
          <h1>
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
          background: url('/img/hero_2.png') top/cover no-repeat;
          height: 110vh;
        }
        .nav-headlines {
          display: flex;
          justify-content: space-between;
          padding: 46px 32px 20px 32px;
        }
        .nav-headlines h2 {
          font-family: 'Fira Sans_SemiBold';
          font-size: 20px;
          color: #fff;
          margin: 0;
        }
        .nav-logos {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          column-gap: 20px;
          padding-right: 32px;
        }
        .nav-logos img:nth-of-type(1) {
          width: 80px;
        }
        .nav-logos img:nth-of-type(2),
        .nav-logos img:nth-of-type(3) {
          width: 50px;
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
          h1 {
            font-size: 4em;
            line-height: 32px;
          }

        }
        @media (max-width: 468px) {
          h1 {
            font-size: 3em;
            line-height: 0px;
            width: 100%;
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
