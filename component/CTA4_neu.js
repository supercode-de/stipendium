import React, { useState, useEffect } from 'react';
import TypeForm from './TypeForm';

const CTA4_neu = () => {
  return (
    <div id='unser-campus'>
      <div>
        <h1>
          WARTE NICHT LÄNGER <br />
          UND NUTZE <span className='super'>DEINE CHANCE!</span>
        </h1>
      </div>

      <div className='twocolumn'>
        <div className='buttoncolumn'>
          <TypeForm/>
        </div>
      </div>
      <style jsx>{`
        #unser-campus {
          padding: 100px 0 100px;
          background-color: #070021;          
          display: flex;
          justify-content: space-around;
          align-items: end;
        }

        h1 {
          font-family: 'Fira Sans_extra_bold';
          color: #fff;
          line-height: 68px;
          margin-left: 5.3%;
        }
        h1 span.super {
          font-family: inherit;
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: #fff;
          font-weight: 900;
        }
        
        @media only screen and (max-width: 1024px) {
          h1 {
            line-height: 1em;
          }
        }

        @media only screen and (max-width: 768px) {
          #unser-campus {
            flex-direction: column;
          }
          .buttoncolumn {
            text-align: center;
          }
          h1 span.super {
            -webkit-text-stroke-width: 2px;
          }
        }

          @media only screen and (max-width: 568px) {
            h1 {
              line-height: 1em;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default CTA4_neu;
