import Telefon from "./small/Telefon";
import Link from 'next/link'

const Header404 = () => {
  const pixelSize = 2; // Width of Lines in Background
  return (
    <div id="header">
      <Link href="/"><a aria-label="zurück">Zurück</a></Link>
      <h1>
        <span>404</span>
        Baby
      </h1>
      <div className="buttons"></div>
      <Telefon />

      <img src="/error.png" alt="" />

      <style jsx>{`
      a {
        text-decoration: none;
        display: block;
        padding: .5em 0;
        color: #fff;
        font-size:3em;
        color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: #fff;
    }
    a:visited {
      -webkit-text-stroke-color: #fff;
    }

    a:hover {
        text-decoration: underline;
        -webkit-text-stroke-color: #3dd7ac;
    }
    a:active {
      -webkit-text-stroke-color: #5d3ede;
    }
        #header {
          background: linear-gradient(
              90deg,
              #070021 calc(100vw / 12 - ${pixelSize}px),
              transparent 1%
            ),
            linear-gradient(
              #070021 calc(100vw / 12 - ${pixelSize}px),
              transparent 1%
            ),
            #fff;
          background-size: calc(100vw / 12) calc(100vw / 12);
          display: flex;
          flex-direction: column;
          align-items: center;
          //   position: relative;
          min-height: 95vh;
        }
        .large {
          background: #070021;
          width: 100%;
          text-align: center;
        }
        h1 {
          margin: 0;
          padding-top: 11vh;
          font-size: 9em;
          letter-spacing: 2px;
          color: #fff;
          text-align: center;
        }
        h1 span {
          display: block;
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: #fff;
        }
        #header img {
          position: relative;
          z-index: 2;
         
          width: 33.2%;
          margin: 5% 0;
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 3em;
            width: 90%;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Header404;
