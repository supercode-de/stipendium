import React, { useState, useEffect } from 'react';
import TypeForm from './TypeForm';

const CTA4_uxui = () => {
  return (
    <div id='unser-campus'>
      <div>
        <h1>
          DEINE CHANCE <span className='super'>UX/UI-DESIGN</span><br />
          kostenlos zu lernen!
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
          text-transform: uppercase;
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

export default CTA4_uxui;
