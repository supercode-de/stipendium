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

const SuperStipendium_neu = (props) => {
  return (
    <div id='super-stipendium'>
      <span className='aside'>Arbeitsplatz der Zukunft</span>
      {/* <img src="/img/bgLine.png" alt="" className="bg-line" /> */}
      {/* <div className="grid"> */}
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
          Die Performance-Agentur Pine, das Düsseldorfer DigiHub und der
          SuperDigital e.V. ermöglichen dir ein Stipendium bei SuperCode und
          damit die Teilnahme an einem der zertifizierten Teilzeit-Bootcamp im
          Bereich UX / UI Design.
          <br />
          <br />
          Damit möchten wir noch mehr Kreativschaffende ermutigen, den
          Karrierewechsel in die Digital-Branche zu starten. <br /> <br />
          <span className='circle'>
            {' '}
            Bewirb&nbsp; dich jetzt bis zum 31.08.2021
          </span>
          <br />
          <br />
          <br />
          <div className='bold'>
            Der Prozess:
            <br />
            <span className='nr'> 1. </span>Bis zum 31.08.2021 bewerben: Fragen
            beantworten und die kleine Design-Aufgabe einsenden.
            <br />
            <span className='nr'> 2. </span>Workshop -Teilnahme: wenn du eine
            Runde weiter bist, laden wir dich zum Workshop ein. Die genauen
            Termine findest du im Briefing.
            <br />
            <span className='nr'> 3. </span> Persönliches Gespräch
          </div>
          <br />
          <br />
          {'...'}und mit etwas Glück erhälst du das Stipendium und startest
          deine UX / UI-Karriere!
        </p>

        {/* <span className="square">Stipendium</span>
          <span className="line2">
            <span className="line">zertifizierten</span>
          </span>{" "}
          <span className="circle">16.10.2020</span> */}
      </article>
      <article className='stipendium-right'>
        <img src='/img/StipendiumArrow.svg' alt='' className='arrow-mobile' />

        <div className='general'>
          <h5>
            Start: 25.10.2021 Ende: 04.02.2022 Umfang: 13 Wochen / Teilzeit{' '}
            <br /> <br /> 1 x pro Woche ganztägig (von 9:00 - 17:00 Uhr) 2x pro
            Woche abends (von 18:00 bis 21:00 Uhr)
          </h5>
          <img src='/img/StipendiumArrow.svg' alt='' className='arrow' />
        </div>
        <div className='information'>
          <p>
            Durch unser Bootcamp UX/UI-Design bekommst du genau die Kenntnisse
            vermittelt, die für den Arbeitsmarkt relevant sind:
            <br />
            <br />
            Ein umfangreiches UX-Know-How in den Bereichen User-Research und
            -Methods, Prototyping & Wireframing und den Prinzipien des
            benutzerzentrierten Designs. Dazu erlernst du die Gestaltung von
            Benutzeroberflächen, arbeitest mit Design-Grundlagen für UI und
            erstellst ein responsives Design mit Designsystemen.
            <br />
            <br />
            <span className='trainer'>Trainer*innen: </span>
            2 Trainer*innen pro Tag
            <br />
            <br />
            Mit über 60% Praxisanteil bilden wir dich optimal für die
            Berufspraxis als UX/UI-Designer*in aus und erstellen mit dir dein
            eigenes Portfolio mit großartigen Praxisprojekten.
            <br />
            <br />
          </p>
        </div>

        {/* <div className="stipendium-box1 hide">
          <h5>
            Web-Developer Full-Stack <br /> Umfang: 22 Wochen / Vollzeit <br />{" "}
            Start: 22.03.2021 Ende: 27.08.2021
          </h5>
          <p>
            Unser Full-Stack-Kurs ermöglicht dir einen Deep Dive in die
            Web-Entwicklung verpackt in einem ultra praxisorientierten
            Intensiv-Kurs. Lerne das Programmieren moderner Websites & Apps und
            finde einen Job mit Zukunft.
          </p>
          <h5>Inhalte:</h5>
          <p>
            Front-End: Essentials, HTML, CSS, GIT, Terminal, Javascript,
            Javascript Frameworks und Libraries, CMS <br />
            <br />
            Back-End: Essentials, Node.js, Express.js, npm, API & Datenbanken{" "}
            <br />
            <br />
            Plus Skills: Grundlagen Projekt-Management & Präsentation, Design &
            UX, Learn-To-Learn, Bewerbungscoaching, Abschlussprojekt.
          </p>
          <h5>Trainer*innen:</h5>
          <p>2 Trainer*innen pro Tag</p>
          <h5>Umfang:</h5>
          <p>
            _22 Wochen Vollzeit <br />
            _Montag bis Freitag <br />
            _09:00 - 18:00 Uhr
          </p>
          <div className="certqua">
            <img src="/img/Certqua_Zeichen_AZAV_klein_4c.png" alt="" />
            <h4>zertifizierte und anerkannte Maßnahme durch Certqua</h4>
          </div>
        </div> */}
        {/* <div className="stipendium-box2 hide">
                    <h5>Web-Developer Front-End<br /> Umfang: 30 Wochen / Teilzeit <br /> Start: 24.05.2021 Ende: 23.12.2021</h5>
                    <p>Programmieren lernen neben dem Beruf? <br /> Kein Problem! Unser Front-End Kurs findet abends und online statt! In 30 Wochen lernst du das Programmieren moderner Websites & Apps.</p>
                    <h5>Inhalte:</h5>
                    <p>Front-End: Essentials, HTML, CSS, GIT, Terminal, Javascript, Javascript Frameworks und Libraries, CMS <br /><br />Plus Skills: Grundlagen Projekt-Management & Präsentation, Design & UX, Learn-To-Learn, Bewerbungscoaching, Abschlussprojekt.</p>
                    <h5>Trainer*innen:</h5>
                    <p>2 Trainer*innen pro Tag</p>
                    <h5>Umfang:</h5>
                    <p>_30 Wochen Teilzeit <br />_3 Abende und jeden 2. Samstag <br />_In der Woche: 18:00 - 21:00 Uhr <br />_Samstags: 09:00 - 18:00 Uhr</p>
                </div> */}
        {/* <div id="myCarousel">
          <Carousel
            responsive={responsive}
            ssr
            showDots={false}
            slidesToSlide={1}
            infinite
            containerClass="container-with-dots"
            deviceType={""}
            itemClass="carousel-item-padding-20-px"
          >
            <div className="stipendium-box1">
              <h5>
                Web-Developer Full-Stack <br /> Umfang: 22 Wochen / Vollzeit{" "}
                <br /> Start: 22.03.2021 Ende: 27.08.2021
              </h5>
              <p>
                Unser Full-Stack-Kurs ermöglicht dir einen Deep Dive in die
                Web-Entwicklung verpackt in einem ultra praxisorientierten
                Intensiv-Kurs. Lerne das Programmieren moderner Websites & Apps
                und finde einen Job mit Zukunft.
              </p>
              <h5>Inhalte:</h5>
              <p>
                Front-End: Essentials, HTML, CSS, GIT, Terminal, Javascript,
                Javascript Frameworks und Libraries, CMS <br />
                <br />
                Back-End: Essentials, Node.js, Express.js, npm, API &
                Datenbanken <br />
                <br />
                Plus Skills: Grundlagen Projekt-Management & Präsentation,
                Design & UX, Learn-To-Learn, Bewerbungscoaching,
                Abschlussprojekt.
              </p>
              <h5>Trainer*innen:</h5>
              <p>2 Trainer*innen pro Tag</p>
              <h5>Umfang:</h5>
              <p>
                _22 Wochen Vollzeit <br />
                _Montag bis Freitag <br />
                _09:00 - 18:00 Uhr
              </p>
            </div>
          <div className="stipendium-box2">
                            <h5>Web-Developer Front-End<br /> Umfang: 30 Wochen / Teilzeit <br /> Start: 24.05.2021 Ende: 23.12.2021</h5>
                            <p>Programmieren lernen neben dem Beruf? <br /> Kein Problem! Unser Front-End Kurs findet abends und online statt! In 30 Wochen lernst du das Programmieren moderner Websites & Apps.</p>
                            <h5>Inhalte:</h5>
                            <p>Front-End: Essentials, HTML, CSS, GIT, Terminal, Javascript, Javascript Frameworks und Libraries, CMS <br /><br />Plus Skills: Grundlagen Projekt-Management & Präsentation, Design & UX, Learn-To-Learn, Bewerbungscoaching, Abschlussprojekt.</p>
                            <h5>Trainer*innen:</h5>
                            <p>2 Trainer*innen pro Tag</p>
                            <h6>Umfang:</h6>
                            <p>_30 Wochen Teilzeit <br />_3 Abende und jeden 2. Samstag <br />_In der Woche: 18:00 - 21:00 Uhr <br />_Samstags: 09:00 - 18:00 Uhr</p>
                        </div> 
          </Carousel>
        </div> */}
      </article>
      {/* </div> */}

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
          left: -106%;
          top: 112px;
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
          //   background-image: linear-gradient(
          //       to right,
          //       rgba(255, 255, 255, 0.25) 0,
          //       rgba(255, 255, 255, 0.25) 1px,
          //       transparent 1px,
          //       transparent 100%
          //     ),
          //     linear-gradient(
          //       to bottom,
          //       rgba(255, 255, 255, 0.25) 0,
          //       rgba(255, 255, 255, 0.25) 1px,
          //       transparent 1px,
          //       transparent 100%
          //     );
          background-position: 0 0, 0 0;
          background-size: ${props.width}px ${props.width}px;
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
          background: url(/img/StipendiumSquare.svg) center/contain no-repeat;
        }

        .circle:after {
          content: '';
          position: absolute;
          top: -85%;
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

        // .square::after {
        //   position: absolute;
        //   background: url("/Vector51.svg") center/cover no-repeat;
        //   height: 109%;
        //   width: 110%;
        //   left: -4px;
        //   bottom: 0;
        //   content: "";
        //   display: block;
        // }
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
        // .circle::after {
        //   position: absolute;
        //   background: url("/Vector54.svg") center/cover no-repeat;
        //   height: 100%;
        //   width: 110%;
        //   left: -4px;
        //   bottom: 0;
        //   content: "";
        //   display: block;
        // }
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
        // p {
        //   font-family: "Neue_Machina_Regular_400";
        //   color: #ffffff;
        //   font-size: 14px;
        //   margin-bottom: 25px;
        //   line-height: 20px;
        // }

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
        // h5 {
        //   font-family: "Neue_Machina_Regular_400";
        //   color: #ffffff;
        //   opacity: 0.7;
        //   font-size: 16px;
        //   line-height: 18px;
        // }
        // h5:nth-of-type(1) {
        //   margin-bottom: 14px;
        // }

        h6 {
          //   font-family: 'Neue_Machina_Regular_400';
          font-family: 'Fira Sans';
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

        .general:after {
          content: '';
          position: absolute;
          top: -56%;
          bottom: 0;
          left: -20%;
          right: 0;
          display: block;
          width: 140%;
          height: 210%;
          transform: scale(0.95, 1.1);
          background: url(/img/StipendiumLargeCircle.svg) center/contain
            no-repeat;
        }

        .general h5 {
          //   font-family: 'Neue_Machina_Regular_400';
          font-family: 'Fira Sans_regular';
          color: #fff;
          font-size: 1.5rem;
          line-height: 28px;
          letter-spacing: 1px;
        }

        .general img {
          position: absolute;
          left: -20%;
          top: 90%;
          transform: rotate(-10deg);
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
          .general:after {
            content: '';
            position: absolute;
            top: -50%;
            bottom: 0;
            left: -20%;
            right: 0;
            display: block;
            width: 140%;
            height: 210%;
            background: url('') center/contain no-repeat;
          }
        }
        @media (max-width: 979px) {
        }
        @media (max-width: 767px) {
          // .myCarousel {
          //   display: none !important;
          //   position: relative;
          //   z-index: 30;
          // }
          // .hide {
          //   display: block;
          // }

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
          .arrow {
            display: none;
          }
          .stipendium-left {
            margin-bottom: 0;
          }
        }

        @media (max-width: 479px) {
          // .general:after {
          //   content: "";
          //   position: absolute;
          //   top: -50%;
          //   bottom: 0;
          //   left: -5px;
          //   right: 0;
          //   display: block;
          //   width: 100%;
          //   height: 200%;
          //   background: url(/img/StipendiumLargeCircleMobile.svg) center/contain
          //     no-repeat;
          // }

          // #myCarousel {
          //   display: block;
          // }
          // .hide {
          //   display: none;
          // }
          // #super-stipendium {
          //   display: block;
          // }
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
        }
      `}</style>
    </div>
  );
};

export default SuperStipendium_neu;
