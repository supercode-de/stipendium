import React, { useState, useEffect } from 'react';

const WarumWeb_neu = () => {
  return (
    <div id='unser-campus'>
      {/* <span className='aside'>Digitale Zukunft</span> */}

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
            UX/UI-Designer:innen ist hoch und wird weiter steigen, denn
            nutzerzentrierte Produkte bieten nicht nur einen Wettbewerbsvorteil,
            sondern werden im Zuge der fortschreitenden Digitalisierung zu
            <span className='web-app'> dem Erfolgskriterium </span> Nummer Eins
            werden.
          </p>

          <h3>Unternehmen investieren in UX und UI</h3>
          <p>
            Immer mehr Unternehmen setzen UX und UI als festen
            Bestandteil des Entwicklungsprozesses ein. Damit sichern sie sich
            Wettbewerbsvorteile und machen ihr Produkt zu einem einzigartigen
            Erlebnis.
          </p>
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
          //   font-family: 'Fira Sans_regular';
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
          position: relative;

        }
        #unser-campus .imgleft{
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
          font-family: "Fira Sans_extra_bold";

          line-height: 0.85em;
        }
        h1 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: #000;
          font-weight: 900;
          font-family: inherit;
        }
        .super,
        .internet,
        .web-app {
          position: relative;
        }
        .web-app {
          white-space: nowrap;
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
          color: #10375c;
        }
        h3 {
          font-weight: 900;
          font-family: 'Fira Sans_bold';
          font-size: 1.3rem;
          color: #10375c;
          margin-top: 2%;
        }
        @media (max-width: 1024px) {
          h1 {
            margin-bottom: 10%;
          }
        }
        @media only screen and (max-width: 768px) {
          #unser-campus {
            padding: 100px 0 0;
            min-height: 50vh;
          }

          h1 span.super {
            -webkit-text-stroke-width: 2px;
          }

          .threecolumn {
            grid-template-columns: 14fr 1fr;
            gap: 50px 0;
            padding-bottom: 100px;
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

          @media only screen and (max-width: 425px) {
            h1 {
              margin-bottom: 10%;
            }
          }
          @media only screen and (max-width: 375px) {

          }
        }
      `}</style>
    </div>
  );
};

export default WarumWeb_neu;
