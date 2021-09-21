import Arrow from "./small/Arrow";
import Telefon from "./small/Telefon";
import Link from 'next/link'


const ImpressumHeader = (props) => {
  const pixelSize = 1; // Width of Lines in Background
  return (
    <div id="impressum">
      <div className="center">
        <Link href="/"><a>Zurück</a></Link>
      </div>
      <h1>Impressum</h1>


      <Telefon color="#fff" />
      <Arrow />
      <style jsx>{`
      .center{
        text-align:center
      }
      a {
        text-decoration: none;
        display: block;
        padding: .5em 0;
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
        #impressum {
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
          height: 90vh;
        }
        h1 {
          margin: 0;
          padding-top: 36vh;
          padding-bottom: 10vh;
          font-size: 5em;
          letter-spacing: 2px;
          color: #fff;
          text-align: center;
        }
        // .aside {
        //   position: absolute;
        //   transform: rotate(-90deg);
        //   transform-origin: right;
        //   right: 3%;
        //   top: 30vh;
        //   color: #fff;
        // }
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

export default ImpressumHeader;
