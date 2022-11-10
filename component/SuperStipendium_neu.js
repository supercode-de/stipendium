import Carousel from 'react-multi-carousel';

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

const SuperStipendium_neu = () => {
  return (
    <div id='super-stipendium'>
      <span className='aside'>Arbeitsplatz der Zukunft</span>

      <article className='stipendium-left'>
        <div className='headline-left'>
          <h1>
            Das{' '}
            <span className='super'>
              Super-<span className='break'></span>
              <span className='tech-position'>
                Stipendium
                <img src='/img/UI.svg' alt='' className='frauen-in-tech' />
              </span>
            </span>
          </h1>
        </div>
        <p>
          Die Digital-Agentur Shetani, SuperCode und der SuperDigital e.V. ermöglichen dir ein Stipendium und damit die Teilnahme an einem der zertifizierten Vollzeit-Bootcamps bei SuperCode im Bereich UX/UI-Design. Anschließend wendest du das Erlernte direkt in einem 2-monatigem Praktikum bei Shetani an.
          <br />
          <br />
          Mit diesem Stipendium möchten wir noch mehr Kreativschaffende ermutigen, den Karrierewechsel in die Digital-Branche zu starten.
          <br />
          <br />
          <span className='circle'>
            {' '}
            Bewirb dich jetzt bis zum 11.12.2022
          </span>
          <br />
          <br />
          <br />
          <div className='bold'>
            Der Prozess:
            <br />
            <span className='nr'> 1. </span>Bis spätestens 11.12.2022 23:59 Uhr bewerben: <br /> Fragen beantworten und die kleine Design-Aufgabe einsenden.
            <br />
            <span className='nr'> 2. </span>Workshop - Teilnahme: wenn du eine Runde weiter bist, laden wir dich zum online Workshop am 14.12.2022 von 17:30 - 19:30 Uhr ein.
            <br />
            <span className='nr'> 3. </span>{'...'}und mit etwas Glück erhälst du das Stipendium und startest deine UX/UI-Karriere!
          </div>

        </p>

      </article>
      <article className='stipendium-right'>
        <img src='/img/StipendiumArrow.svg' alt='' className='arrow-mobile' />

        <div className='general'>
          <h5>
            Kursstart: 13.02.2022
            <br />
            Umfang: 18 Wochen / Vollzeit
            <br />
            <br />
            jeden Tag von 09:00 bis 17:00 Uhr
            <br />
            + anschließendes 2-monatiges Praktikum bei Shetani
          </h5>
        </div>
        <div className='information'>
          <p>
            Durch das Bootcamp UX/UI-Design bekommst du genau die Kenntnisse vermittelt, die für den Arbeitsmarkt relevant sind:
            <br />
            <br />
            Ein umfangreiches UX-Know-How in den Bereichen User-Research und -Methods, Prototyping & Wireframing und den Prinzipien des benutzerzentrierten Designs. Dazu erlernst du die Gestaltung von Benutzeroberflächen, arbeitest mit Design-Grundlagen für UI und erstellst ein responsives Design mit Designsystemen.

            <br />
            <br />
            Mit über 60% Praxisanteil bilden wir dich optimal für die Berufspraxis als UX/UI-Designer:in aus und erstellen mit dir dein eigenes Portfolio mit großartigen Praxisprojekten.
            <br />
            <br />
            Anschließend wendest du das Erlernte direkt in einem 2-monatigen Praktikum bei Shetani an.
            <br />
            <br />
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
          right: 10%;
          top: 35%;
          max-width: 70vw;
          height: 6.3rem;
        }
        .general .arrow {
          position: relative;
          transform: rotate(-10deg);
          // left: -102%;
          left: -652px;
          top: 73px;
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
        .nr {
          font-weight: 300;
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
          //   font-family: 'Poppins', sans-serif;
          font-family: 'Fira Sans';
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
          //   font-family: 'Neue_Machina_Regular_400';
          font-family: 'Fira Sans_bold';
          font-size: 5.1em;
          color: #fff;
          line-height: 60px;
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
          font-weight: bold;
        }
        .square,
        .line,
        .line2,
        .circle {
          position: relative;
        }

        .square:after {
          content: '';
          position: absolute;
          top: -5%;
          bottom: 0;
          left: -5px;
          right: 0;
          display: block;
          width: 110%;
          height: 1.6em;
          background: url("/img/StipendiumSquare.svg") center/contain no-repeat;
        }

        .circle:after {
          content: '';
          position: absolute;
          top: -97%;
          bottom: 0;
          left: -8%;
          right: 0;
          display: block;
          width: 121%;
          height: 3.5em;
          transform: scale(1, 1);
          // background: url("/img/StipendiumDateCircle.svg") center/contain no-repeat;
          background: url("/img/Vector59.svg") center/contain no-repeat;
        }

        .line::after {
          position: absolute;
          background: url('/Vector52.svg') center/cover no-repeat;
          height: 2px;
          width: 110%;
          right: -12px;
          bottom: 0;
          content: '';
          display: block;
        }
        .line2::after {
          position: absolute;
          background: url('/Vector53.svg') center/cover no-repeat;
          height: 2px;
          width: 50%;
          right: -5px;
          bottom: -3px;
          content: '';
          display: block;
        }

        p {
          color: #fff;
          //   font-family: 'Neue_Machina_Regular_400';
          font-family: 'Fira Sans_regular';
          font-style: normal;
          font-weight: normal;
          font-size: 1em;
          line-height: 20px;
          justify-self: center;
        }

        p .trainer {
          font-weight: 900;
          font-size: 1.3rem;
        }

        .bold {
          font-weight: normal;
          font-family: 'Fira Sans_regular';
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
          font-family: 'Fira Sans_regular';
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
        }

        .general::after {
          content: '';
          position: absolute;
          top: -36%;
          bottom: 0;
          left: -21%;
          right: 0;
          display: block;
          width: 140%;
          height: 225%;
          transform: scale(1, 0.9);
          background: url("/img/Bubble.svg") center/contain no-repeat;
        }

        .general h5 {
          //   font-family: 'Neue_Machina_Regular_400';
          font-family: 'Fira Sans_regular';
          color: #fff;
          font-size: 1.3rem;
          line-height: 28px;
          letter-spacing: 1px;
        }

        .general img {
          position: absolute;
          left: -20%;
          top: 90%;
          transform: rotate(-10deg);
        }
        @media (max-width: 1440px) {
          .general::after {
            left: -166px;
            height: 177%;
            top: -17%;
          }
        }
        @media (max-width: 1199px) {
          .break {
            display: inline;
          }
        }
        @media (max-width: 1024px) {
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
          .general:after {
            display: none;
          }
        }

        @media (max-width: 767px) {

          .frauen-in-tech {
            top: 40%;
            height: 6rem;
          }

          #super-stipendium {
            padding: 40px 20px 50px 20px;
          }
        }

        @media (max-width: 568px) {
          .arrow,
          .general:after {
            display: none;
          }
          .arrow-mobile {
            display: none;
          }
          .arrow {
            display: none;
          }
          .stipendium-left {
            margin-bottom: 0;
          }
          h1 {
            font-size: 4em;
            line-height: 0.87em;
          }
          .frauen-in-tech {
            top: 40%;
            height: 4rem;
          }
          .headline-left {
            margin-bottom: 50px;
          }
          p {
            font-size: 1.8em;
          }

          .bold {
            line-height: 1.4em;
            font-weight: normal;
            font-family: 'Fira Sans_regular';
          }
        }

        @media (max-width: 479px) {
          .general {
            padding-top: 30px;
          }

          .general h5 {
            font-family: 'Fira Sans_regular';
            color: #fff;
            font-size: 1.2rem;
            line-height: 20px;
            letter-spacing: 1px;
          }

          .information {
            margin-top: -20px;
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
          // #myCarousel
          #myCarousel .stipendium-box2 {
            width: 100%;
            border: 2px solid #30e1b9;
            border-top: none;
          }
          @media (max-width: 375px) {
            .bold {
              margin-top: -20px;
            }
            .circle:after {
              content: '';
              position: absolute;
              top: 3%;
              bottom: 0;
              left: 10.5%;
              right: 0;
              display: block;
              width: 115%;
              height: 3.5em;
              transform: scale(1.5, 1);
              background: url(/img/StipendiumDateCircle.svg) center/contain
                no-repeat;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default SuperStipendium_neu;
