const SuperStipendium_neu = () => {
  return (
    <div id='super-stipendium'>
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
        </p>
        <p>Mit diesem Stipendium möchten wir noch mehr Kreativschaffende ermutigen, den Karrierewechsel in die Digital-Branche zu starten.</p>
        <p className="marginTopBot">
          <span className='circle'>{' '}
            Bewirb dich jetzt bis zum 11.12.2022
          </span>
        </p>
        <p>Der Prozess:</p>
        <ol>
          <li>Bis spätestens 11.12.2022 23:59 Uhr bewerben: <br /> Fragen beantworten und die kleine Design-Aufgabe einsenden.</li>
          <li>Workshop - Teilnahme: wenn du eine Runde weiter bist, laden wir dich zum online Workshop am 14.12.2022 von 17:30 - 19:30 Uhr ein.</li>
          <li>...und mit etwas Glück erhälst du das Stipendium und startest deine UX/UI-Karriere!</li>
        </ol>
      </article>
      <article className='stipendium-right'>
        <div className='general'>
          <h5>Kursstart: 13.02.2022</h5>
          <h5>Umfang: 18 Wochen / Vollzeit</h5>
          <h5>jeden Tag von 09:00 bis 17:00 Uhr</h5>
          <h5>+ anschließendes 2-monatiges Praktikum bei Shetani</h5>
        </div>
        <div className='information'>
          <p>Durch das Bootcamp UX/UI-Design bekommst du genau die Kenntnisse vermittelt, die für den Arbeitsmarkt relevant sind:</p>
          <p>Ein umfangreiches UX-Know-How in den Bereichen User-Research und -Methods, Prototyping & Wireframing und den Prinzipien des benutzerzentrierten Designs. Dazu erlernst du die Gestaltung von Benutzeroberflächen, arbeitest mit Design-Grundlagen für UI und erstellst ein responsives Design mit Designsystemen.</p>
          <p>Mit über 60% Praxisanteil bilden wir dich optimal für die Berufspraxis als UX/UI-Designer:in aus und erstellen mit dir dein eigenes Portfolio mit großartigen Praxisprojekten.</p>
          <p>Anschließend wendest du das Erlernte direkt in einem 2-monatigen Praktikum bei Shetani an.</p>
        </div>
      </article>

      <style jsx>{`
        #super-stipendium {
          display: flex;
          background-color: #10375c;
          padding: 100px 0;
          position: relative;
          color: #fff;
        }
        .headline-left {
          margin-bottom: 70px;
        }
        .tech-position {
          position: relative;
          font-family: inherit;
        }
        .frauen-in-tech {
          position: absolute;
          right: 10%;
          top: 35%;
          max-width: 70vw;
          height: 6.3rem;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        
        .bg-line {
          position: absolute;
          z-index: -1;
          width: 100%;
        }
        .stipendium-left {
          padding: 0 4% 0 8.5%;
          width: 50%;
        }
        h1 {
          font-family: 'Fira Sans_bold';
          line-height: 60px;
          margin: 0 0 3vh;
          text-transform: uppercase;
        }
        .break {
          display: block;
        }
        h1 span.super {
          font-family: "Fira Sans_extra_bold";
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
        .marginTopBot {
          margin: 5% 0;
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
        ol {
          list-style-position: inside;
          font-size: clamp(1.125rem, 1.0375rem + 0.4375vw, 1.5625rem);
        }
        ol li {
          margin-bottom: 2%;
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

        .general {
          width: 100%;
          margin-bottom: 50px;
          position: relative;
        }

        .general::after {
          content: '';
          position: absolute;
          top: -35%;
          bottom: 0;
          left: -27%;
          right: 0;
          display: block;
          width: 140%;
          height: 225%;
          // transform: scale(1, 0.9);
          background: url("/img/Bubble2.svg") center/contain no-repeat;
        }

        .general h5 {
          font-family: 'Fira Sans_regular';
          font-size: clamp(1.25rem, 1.1875rem + 0.3125vw, 1.5625rem);
          line-height: 28px;
        }
        .information p {
          margin-bottom: 2%;
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
            padding: 0 4% 0 8.5%;
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
          .general:after {
            display: none;
          }
          .stipendium-left {
            margin-bottom: 0;
          }

          .frauen-in-tech {
            top: 40%;
            height: 4rem;
          }
          .headline-left {
            margin-bottom: 50px;
          }
        }

        @media (max-width: 479px) {
          .general {
            padding-top: 30px;
          }

          .general h5 {
            font-size: 1.2rem;
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
          @media (max-width: 425px) {
            .stipendium-left,
            .stipendium-right {
              padding: 0;
            }
            #super-stipendium {
              padding: 30px 30px 50px;
            }
          }
          @media (max-width: 375px) {
            .circle::after {
              top: -25%;
              left: 62%;
              width: 161%;
              transform: scale(2,3);
            }
            
          }
        }
      `}</style>
    </div>
  );
};

export default SuperStipendium_neu;
