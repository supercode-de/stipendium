import Arrow from "./small/Arrow";
import Telefon from "./small/Telefon";
import Link from "next/link";

const ImpressumHeader = () => {
  const pixelSize = 1; // Width of Lines in Background
  return (
    <div id="impressum">
      <div className="center">
        <Link href="/">
          <a aria-label="zurück">Zurück</a>
        </Link>
      </div>
      <h1>Impressum</h1>

      <Telefon color="#fff" />
      <Arrow />
      <style jsx>{`
        .center {
          text-align: center;
        }
        a {
          text-decoration: none;
          display: block;
          padding: 0.5em 0;
          font-size: 3em;
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
          -webkit-text-stroke-color: #ffda19;
        }
        a:active {
          -webkit-text-stroke-color: #ffda19;
        }
        #impressum {
          background-color: #10375c;
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
