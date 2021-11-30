import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 479 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 479, min: 0 },
    items: 1,
  },
};

const SuperStipendium = () => {
  return (
    <div id="super-stipendium">
      <span className="aside">Arbeitsplatz der Zukunft</span>
      <article className="stipendium-left">
        <div className="headline-left">
          <h1>
            Das{" "}
            <span className="super">
              Super-<span className="break"></span>
              <span className="tech-position">
                Stipendium
                <img
                  src="/Frauen_in_Tech_2.svg"
                  alt=""
                  className="frauen-in-tech"
                />
              </span>
            </span>
          </h1>
        </div>
        <p>
          Das Female Innovation Hub und der SuperDigital e.V. ermöglichen dir
          ein Stipendium bei SuperCode und damit die Teilnahme an einem der
          zertifizierten Teilzeit-Bootcamps im Bereich Front-End Webentwicklung.
          <br />
          <br />
          Damit möchten wir noch mehr Frauen ermutigen, den Karrierewechsel in
          die IT-Branche zu starten. Das Super-Stipendium ist damit ein nächster
          Schritt in Richtung einer neuen Kultur der Wertschätzung von Frauen,
          die sich für eine digitale Karriere entscheiden.
          <br />
          <br />
          Bewirb dich jetzt bis zum 31.12.2021
          <br />
          <br />
          <div className="bold">
            Der Prozess:
            <br />
            1. Bis zum <span className="circle">&nbsp;31.12.2021&nbsp;</span>
            &nbsp; bewerben und Fragen beantworten
            <br />
            2. Teilnahme am kostenlosen Workshop
            <br />
            3. Persönliches Gespräch
          </div>
          <br />
          {"..."}und mit etwas Glück erhälst du das Stipendium und startest
          deine IT-Karriere!
        </p>
      </article>
      <article className="stipendium-right">
        <img src="/img/StipendiumArrow.svg" alt="" className="arrow-mobile" />

        <div className="general">
          <h5>
            Web-Developerin Front-End
            <br /> Umfang: 7 Monate / Teilzeit
            <br /> Start: 28.02.2022 Ende: 15.10.2022
          </h5>
          <img src="/img/StipendiumArrow.svg" alt="" className="arrow" />
        </div>
        <div className="information">
          <p>
            Unser Front-End-Kurs ermöglicht dir einen Deep Dive in die
            Web-Entwicklung verpackt in einem ultra praxisorientierten
            Intensiv-Kurs. Lerne das Programmieren moderner Websites & Apps und
            finde einen Job mit Zukunft.
            <br />
            <br />
            <span className="bold">Inhalte:</span>
            <br />
            <br />
            Front-End: Essentials, HTML, CSS, GIT, Terminal, Javascript,
            Javascript Frameworks und Libraries, CMS
            <br />
            <br />
            Plus Skills: Grundlagen Projekt-Management & Präsentation, Design &
            UX, Learn-To-Learn, Abschlussprojekt
            <br />
            <br />
            <span className="bold">Trainer*innen:</span> 2 Trainer*innen pro Tag
          </p>
        </div>
      </article>

      <style jsx>{`
        .certqua {
          display: flex;
          align-items: center;
          margin: 15px 0;
        }
        .certqua h4 {
          margin-left: 15px;
          color: #30e1b9;
        }
        .bold {
          font-weight: 500;
          line-height: 1.8em;
        }
        .headline-left {
          margin-bottom: 70px;
        }
        .tech-position {
          position: relative;
        }
        .frauen-in-tech {
          position: absolute;
          right: -10%;
          top: 35%;
          max-width: 80vw;
          height: 7rem;
        }
        .arrow {
          position: relative;
          transform: rotate(20deg);
        }
        .arrow-mobile {
          display: none;
          margin: 20px;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .stipendium-right > .stipendium-box1 {
          transition: all 0.4s;
        }
        .stipendium-right > .stipendium-box2 {
          transition: transform 0.4s;
        }
        .stipendium-right > .stipendium-box1:hover {
          transform: scale(1.05);
        }
        .stipendium-right > .stipendium-box2:hover {
          transform: scale(1.19);
          border-left: 2px solid #30e1b9;
        }
        .stipendium-right > .stipendium-box1:hover h5:first-of-type {
          color: #30e1b9;
          font-weight: 500;
          opacity: 1;
        }
        .stipendium-right > .stipendium-box2:hover h5:first-of-type {
          color: #30e1b9;
          font-weight: 500;
          opacity: 1;
        }

        * {
          margin: 0;
          padding: 0;
        }

        #myCarousel {
          display: none;
          position: relative;
          z-index: 30;
        }

        #super-stipendium {
          display: flex;
          background-color: #10375c;
          z-index: -2;
          overflow: hidden;
          padding: 100px 0;
          position: relative;
        }

        .bg-line {
          position: absolute;
          z-index: -1;
          width: 100%;
        }

        .aside {
          position: absolute;
          transform: rotate(-90deg);
          transform-origin: left;
          color: #fff;
          font-weight: 300;
          left: 3%;
          top: 60%;
          //font-family: "Poppins", sans-serif;
          font-family: "Fira Sans";
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 18px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #ffffff;
        }

        .stipendium-left {
          padding: 0 4% 0 8.5%;
          width: 50%;
        }

        h1 {
          font-family: "Fira Sans_bold";
          font-size: 5.1em;
          line-height: 80px;
          color: #fff;
          margin: 0 0 3vh;
          text-transform: uppercase;
          font-weight: bold;
        }

        .break {
          display: block;
        }

        h1 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: #fff;
          font-weight: 300;
        }

        .square,
        .line,
        .line2,
        .circle {
          position: relative;
        }

        .square:after {
          content: "";
          position: absolute;
          top: -5%;
          bottom: 0;
          left: -5px;
          right: 0;
          display: block;
          width: 110%;
          height: 1.6em;
          background: url(/img/StipendiumSquare.svg) center/contain no-repeat;
        }

        .circle:after {
          content: "";
          position: absolute;
          top: -10px;
          bottom: 0;
          left: -5px;
          right: 0;
          display: block;
          width: 115%;
          height: 2.5em;
          background: url(/img/StipendiumDateCircle.svg) center/contain
            no-repeat;
        }

        .line::after {
          position: absolute;
          background: url("/Vector52.svg") center/cover no-repeat;
          height: 2px;
          width: 110%;
          right: -12px;
          bottom: 0;
          content: "";
          display: block;
        }

        .line2::after {
          position: absolute;
          background: url("/Vector53.svg") center/cover no-repeat;
          height: 2px;
          width: 50%;
          right: -5px;
          bottom: -3px;
          content: "";
          display: block;
        }

        p {
          color: #fff;
          font-family: "Fira Sans_regular";
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 22px;
          justify-self: center;
        }

        .bold {
          font-weight: bold;
        }

        .stipendium-right {
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 8.5% 0 4%;
          position: relative;
        }

        .stipendium-box1 {
          background: #5d3ede;
          border: 2px solid #30e1b9;
          padding: 2vh 5% 0 3%;
          width: 60%;
          height: 100%;
        }

        .stipendium-box2 {
          width: 50%;
          padding: 2vh 4% 0 2%;
          background: #5d3ede;
          border: 2px solid #30e1b9;
          border-left: none;
          height: 92%;
        }

        h6 {
          //   font-family: 'Neue_Machina_Regular_400';
          font-family: "Fira Sans_regular";
          color: #ffffff;
          font-size: 16px;
          line-height: 18px;
          font-weight: 600;
        }

        .general {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 50px;
          position: relative;
          z-index: -200;
        }

        .general:after {
          content: "";
          position: absolute;
          top: -50%;
          bottom: 0;
          left: -10%;
          right: 0;
          display: block;
          width: 120%;
          height: 200%;
          background: url(/img/StipendiumLargeCircle.svg) center/contain
            no-repeat;
        }

        .general h5 {
          font-family: "Fira Sans_regular";
          color: #fff;
          font-size: 1.3rem;
          line-height: 28px;
          letter-spacing: 1px;
        }

        .general img {
          position: absolute;
          left: -50px;
          top: 50%;
        }

        @media (max-width: 1199px) {
          .break {
            display: inline;
          }
        }

        @media (max-width: 1023px) {
          #super-stipendium {
            display: block;
          }
          .stipendium-left {
            width: 100%;
            margin-bottom: 9vh;
          }

          .stipendium-right {
            width: 100%;
            padding: 0 6% 0 6%;
          }
        }

        @media (max-width: 767px) {
          h1 {
            font-size: 60px;
            line-height: 50px;
          }

          h1 span.super {
            -webkit-text-stroke-width: 1px;
          }

          p {
            font-size: 16px;
            line-height: 20px;
          }

          .frauen-in-tech {
            top: 40%;
            height: 6rem;
          }
        }

        @media (max-width: 568px) {
          .arrow,
          .general:after {
            display: none;
          }
          .arrow-mobile {
            display: block;
          }
          .stipendium-left {
            margin-bottom: 0;
          }
        }

        @media (max-width: 479px) {
          h1 {
            font-size: 50px;
            line-height: 45px;
          }

          .stipendium-left {
            width: 100%;
          }

          .stipendium-right {
            width: 100%;
            padding: 0 6% 0 6%;
          }

          .stipendium-box1 {
            width: 100%;
          }

          #myCarousel .stipendium-box2 {
            width: 100%;
            border: 2px solid #30e1b9;
            border-top: none;
          }
        }
      `}</style>
    </div>
  );
};

export default SuperStipendium;
