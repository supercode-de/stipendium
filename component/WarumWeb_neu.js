import React, { useState, useEffect } from 'react';

const WarumWeb_neu = (props) => {
  return (
    <div id='unser-campus'>
      <span className='aside'>Digitale Zukunft</span>

      <div className='threecolumn'>
        <div className='imgleft'>
          <img src='/img/WarumWeb.png' alt='' />
        </div>

        <div className='onecolumn'>
          <h1>
            WARUM <br />
            <span className='super'>UX/UI-Design?</span>
          </h1>
          <p>
            Die fortschreitende Digitalisierung in Unternehmen kann nur dann
            erfolgreich sein, wenn die Nutzer*innen noch stärker in den
            Mittelpunkt rücken. Der Bedarf an qualifizierten
            UX/UI-Designer*innen ist hoch und wird weiter steigen, denn
            nutzerzentrierte Produkte bieten nicht nur einen Wettbewerbsvorteil,
            sondern werden im Zuge der fortschreitenden Digitalisierung zu
            <span className='web-app'> dem Erfolgskriterium </span> Nummer Eins
            werden.
            <br />
            <br />
            <span className='bold'>
              {' '}
              Unternehmen investieren in UX und UI
              <br />
            </span>{' '}
            <br /> Immer mehr Unternehmen setzen UX und UI als festen
            Bestandteil des Entwicklungsprozesses ein. Damit sichern sie sich
            Wettbewerbsvorteile und machen ihr Produkt zu einem einzigartigen
            Erlebnis
          </p>
        </div>

        <div className='imgright'>
          <img src='/img/DSC7185_LowRes.png' alt='' />
        </div>
      </div>
      <style jsx>{`
        .aside {
          position: absolute;
          transform: rotate(-90deg);
          transform-origin: left;

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
        }
        #unser-campus {
          padding: 150px 0 100px;
          min-height: 100vh;
          position: relative;
          //   background-color: #10375c;
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
        }
        #unser-campus .imgleft,
        #unser-campus .imgright {
          overflow: hidden;
        }

        #unser-campus img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        .threecolumn {
          display: grid;
          grid-template-columns: 45% 42% 3%;
          padding-bottom: 40px;
          gap: 0 5%;
        }
        .onecolumn {
          display: grid;
          grid-template-columns: 100%;
        }

        h1 {
          //   font-family: 'Neue_Machina_Regular_400';
          font-family: 'Fira Sans_extra_bold';

          font-weight: 900;
          font-size: 5.1em;

          line-height: 0.85em;
          margin: 0;
        }
        h1 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: #000;
          font-weight: 900;
        }
        .super,
        .internet,
        .web-app {
          position: relative;
        }
        .web-app {
          white-space: nowrap;
        }
        .super::after {
          position: absolute;
          background: url('/Vector49.svg') center/cover no-repeat;
          height: 3px;
          width: 130px;
          left: -160px;
          bottom: 0;
          content: '';
          display: block;
        }
        .internet::after {
          position: absolute;
          background: url('/Vector55.svg') center/cover no-repeat;
          height: 100%;
          width: 120%;
          left: -7px;
          bottom: 0;
          content: '';
          display: block;
        }
        .web-app::after {
          position: absolute;
          background: url('/Vector56.svg') center/cover no-repeat;
          height: 10%;
          width: 100%;
          right: 0;
          bottom: -1px;
          content: '';
          display: block;
        }
        p {
          //   font-family: 'Neue_Machina_Regular_400';

          font-family: 'Fira Sans_regular';
          color: #10375c;
          font-style: normal;
          font-weight: normal;
          font-size: 1em;
          line-height: 20px;
          justify-self: center;
        }
        .bold {
          font-weight: 900;
          font-family: 'Fira Sans_medium';
          font-size: 1.3rem;
        }
        @media only screen and (max-width: 1635px) {
          h1 {
            font-size: 5.1em;
          }
        }
        @media only screen and (max-width: 1440px) {
          h1 {
            font-size: 5.1em;
          }
        }
        @media only screen and (max-width: 1040px) {
          // h1 {
          //   font-size: 2.6em;
          // }
        }
        @media only screen and (max-width: 768px) {
          #unser-campus {
            padding: 50px 0 0;
            min-height: 50vh;
          }
          // h1 {
          //   font-size: 3.4em;

          //   line-height: 2em;
          // }
          h1 span.super {
            -webkit-text-stroke-width: 2px;
          }

          .threecolumn {
            grid-template-columns: 14fr 1fr;
            gap: 50px 0;
          }
          h1 span.super {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: #000;
            font-weight: 300;
            opacity: 0.7;
          }
          #unser-campus .imgleft {
            grid-column: 1/-1;
          }
          .onecolumn {
            padding: 0 5% 0 10%;
          }
          p {
            font-size: 1.4em;
            line-height: 24px;
          }
          @media only screen and (max-width: 450px) {
            h1 {
              font-size: 4em;
            }
          }
          @media only screen and (max-width: 375px) {
            // h1 {
            //   font-size: 2em;
            // }
          }
        }
      `}</style>
    </div>
  );
};

export default WarumWeb_neu;

// .img-three {
//   margin-left: ${props.width * 3}px;
//   margin-top: ${props.width * .5}px;
// }
// .img-four {
//   margin-left: ${props.width * 8}px;
//   margin-top: -${1.5 * props.width}px
// }
// .img-five {
//   margin-top: ${props.width}px;
// }
// .img-six {
//   margin-left: ${props.width * 7}px;
//   margin-top: ${props.width}px
// }
