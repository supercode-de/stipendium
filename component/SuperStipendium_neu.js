import TypeForm from './TypeForm';
import Typeform_neu2022 from './TypeForm_neu2022';
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
              </span>
            </span>
          </h1>
        </div>
        <p>
          Die Digital-Agentur Diginexus, StartSteps, SuperCode und SuperDigital e.V. ermöglichen dir ein Stipendium und damit die Teilnahme an einem der zertifizierten Vollzeit-Bootcamps bei SuperCode im Bereich UX/UI-Design. Anschließend wendest du das Erlernte direkt in einem 2-monatigem Praktikum bei Diginexus an.
        </p>
        <p>Der Ablauf:</p>

        <div className="bewerben-ablauf">
          <div className="bewerben-ablauf--punkte">
            <h3 className="bewerben-ablauf--punkte--number">01</h3>
            <h3 className="bewerben-ablauf--punkt">Bis zum 08.12. bewerben</h3>
          </div>
          <div className="bewerben-ablauf--punkte">
            <h3 className="bewerben-ablauf--punkte--number">02</h3>
            <h3 className="bewerben-ablauf--punkt">Teilnahme am Workshop</h3>
          </div>
          <div className="bewerben-ablauf--punkte">
            <h3 className="bewerben-ablauf--punkte--number">03</h3>
            <h3 className="bewerben-ablauf--punkt">Start des Stipendiums am 12.12.</h3>
          </div>
        </div>
      </article>
      <article className='stipendium-right'>
        <div className="kursCard">
          <div className="kursCard-hl">
            <h4>UX/UI-Design</h4>
            <h4>Bootcamp</h4>
          </div>
          <div className="kursCard-preInfos">
            <p>Kursstart: 13.02.2022</p>
            <p>Umfang: 18 Wochen Vollzeit</p>
            <p>Mo. bis Fr.: 09:00 – 17:00 Uhr</p>
          </div>
          <div className="kursCard-Inhalte">
            <p>Inhalte:</p>
            <p>UX-Design, User-Research & -Methods, Prototyping & Wireframing, benutzerzentriertes Designs, UI-Design/Gestaltung von Benutzeroberflächen, Design-Grundlagen für UI und erstellst ein responsives Design mit Designsystemen.</p>
          </div>
          <div className="kursCard-abbinder">
            <p>Anschließend wendest du das Erlernte direkt in einem 2-monatigen Praktikum bei Diginexus (remote) an.</p>
          </div>
          <div className="kursCard-btns">
            <Typeform_neu2022 />
          </div>
        </div>

      </article>

      <style jsx>{`
        #super-stipendium {
          display: flex;
          background-color: #10375c;
          padding: 100px 100px 100px 8.5%;
          position: relative;
          color: #fff;
        }
        .stipendium-left p:nth-of-type(1) {
          width: 90%;
        }
        .stipendium-left p:nth-of-type(2) {
          margin-top: 5%;
        }
        .headline-left {
          margin-bottom: 70px;
        }
        .tech-position {
          position: relative;
          font-family: inherit;
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
        .bewerben-ablauf {
          margin-top: 5%;
        }
        .bewerben-ablauf--punkte {
          // font-size: 2.3rem;
          font-size: clamp(1.25rem, 1.04rem + 1.05vw, 2.3rem);
          display: flex;
          gap: 2rem;
        }
        .bewerben-ablauf--punkte--number {
          color: #30E1B9;
          letter-spacing: 2px;
          color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #30E1B9;
        }
        .bewerben-ablauf--punkt {
          font-family: "Fira Sans_bold";
          letter-spacing: 2px;
          color: transparent;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: #fff;
        }

        .kursCard {
          border: 1px solid #fff;
          padding: 5%
        }
        .kursCard-hl {
          margin-bottom: 2rem;
        }
        .kursCard-hl h4 {
          // font-size: 4rem;
          font-size: clamp(1.875rem, 1.5rem + 1.875vw, 3.75rem);
          font-family: "Fira Sans_bold";
          line-height: 3rem;
        }
        .kursCard-preInfos p:nth-of-type(1) {
          font-family: "Fira Sans_bold";
          letter-spacing: 1px;
        }
        .kursCard-Inhalte {
          margin: 5% 0;
        }
        .kursCard-abbinder {
          margin-bottom: 5%;
        }
        .kursCard-btns {
          margin-top: 10%;
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
            width: 90%;
            margin: 0 auto;
          }
        }

        @media (max-width: 767px) {
          #super-stipendium {
            padding: 40px 20px 50px 20px;
          }
        }

        @media (max-width: 568px) {

          .stipendium-left {
            margin-bottom: 0;
          }
          .headline-left {
            margin-bottom: 20px;
          }
        }

        @media (max-width: 479px) {
          .stipendium-left {
            width: 100%;
          }
          .stipendium-right {
            width: 100%;
            padding: 0 6% 0 6%;
          }
          @media (max-width: 425px) {
            .bewerben-ablauf--punkt,
            .bewerben-ablauf--punkte--number {
              -webkit-text-stroke-width: unset;
            }
            .bewerben-ablauf--punkte--number {
              color: #30E1B9;
            }
            .bewerben-ablauf--punkt {
              color: #fff;
            }
            .bewerben-ablauf {
              margin-bottom: 15%;
            }
            .stipendium-left,
            .stipendium-right {
              padding: 0;
            }
            #super-stipendium {
              padding: 30px 30px 50px;
            }
          }
          @media (max-width: 375px) {
            
          }
        }
      `}</style>
    </div>
  );
};

export default SuperStipendium_neu;
