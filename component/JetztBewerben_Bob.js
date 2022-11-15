import Typeform from './TypeForm';

const JetztBewerben_neu = () => {
  return (
    <div id='unser-campus'>
      <span className='aside'> Bewirb dich jetzt! </span>

      <div className='twocolumn'>
        <div className='onecolumn'>
          <h2>
          “Im Bootcamp habe ich nicht nur viel über die Gestaltung, Technik und Psychologie von Digitalprodukten gelernt, sondern konnte das neue Wissen auch direkt praktisch anwenden. Das Team und die Gruppe waren super motivierend und ich habe mich jeden Tag auf den Kurs gefreut!” 
          </h2>
          <div className='circle'>
            <h2 className='persona'>Bob Boost, Medienmanager und <br className="breakHide"/> Audience Developer</h2>
          </div>

          <div className='cta-container'>
            <div className='center'>
              <Typeform />
            </div>
            <div className="cta-container--hl">
              <p>Worauf wartest Du noch?</p>
              <p>Bewirb dich jetzt und mit etwas Glück</p>
              <p>startest du bald deine UX/UI-Karriere!</p>
            </div>
          </div>
        </div>
        <img src='/persona_bob.jpg' alt='Unser Alumni Bob' />
      </div>

      <style jsx>{`
          #unser-campus {
            color: #fff;
          }
          .center {
            text-align: center;
          }
          .aside {
            position: absolute;
            transform: rotate(-90deg);
            transform-origin: left;
            font-weight: 300;
            left: 3%;
            top: 60%;
            font-family: 'Fira Sans_regular';
            font-size: 12px;
            letter-spacing: 3px;
            text-transform: uppercase;
          }
          #unser-campus {
            padding: 100px 0 100px 10%;

            position: relative;
            background-color: #10375c;
          }
          .twocolumn {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            grid-gap: 0  8%;
          }
          .onecolumn {
            display: grid;
            grid-template-columns: 1fr;
          }
          .twocolumn > img {
            width: 100%;
            align-self: center;
          }
          h2 {
            font-size: clamp(1.25rem, 1.125rem + 0.625vw, 1.875rem);
          }
          h2 span.super {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: #fff;
            font-weight: 300;
          }
          h2 span:first-of-type,
          h2 span:last-of-type {
            position: relative;
          }
          h2 span:first-of-type::after {
            position: absolute;
            background: url('/vector41.svg') center/cover no-repeat;
            height: 2px;
            width: 70%;
            right: 0;
            bottom: 4px;
            content: '';
            display: block;
          }
          h2 span:first-of-type::before {
            position: absolute;
            background: url('/Vector41.svg') center/cover no-repeat;
            height: 2px;
            width: 50%;
            right: 0;
            bottom: 0px;
            content: '';
            display: block;
            transform: rotate(0.5deg);
          }
          h2 span:last-of-type::after {
            position: absolute;
            background: url('/Vector43.svg') center/cover no-repeat;
            height: 160%;
            width: 100%;
            right: 0;
            bottom: -10px;
            content: '';
            display: block;
          }

          .circle {
            position: relative;
            display: flex;
          }
          .circle h2 {
            display: inline-block;
          }
          .circle:after {
            content: '';
            position: absolute;
            top: -35%;
            bottom: 0;
            left: 0;
            right: 0;
            max-width: 60%;
            transform: scale(1.2, 0.8);
            background: url(/img/CircleVectorEmilija.svg) center/contain no-repeat;
          }
          .cta-container{
              display:flex;
              margin-top:9%;
          }
          .cta-container div:nth-of-type(2){
            width:70%;
          }
          .cta-container--hl {
            margin-left: 5%;
          }
          .twocolumn img{
            width:80%;
            justify-self:end;
          }
          .jetzt_bewerbern_img img{
            width:100%;
          }

          .jetzt_bewerbern_img{
              width:90%;
              position:relative;
              right:0;
          }
          @media (max-width: 1040px) {
            .twocolumn {
              grid-template-columns: 1fr;
              margin-bottom: 40px;
            }
            .twocolumn > img {
              width: 60%;
              align-self: center;
              justify-self: center;
            }
            #unser-campus {
              padding: 100px 6%;
            }
          }

          // .breakHide {
          //   display: none;
          // }
          @media (max-width: 1024px) {
            .circle::after {
              top: -17%;
              left: -10%;
              max-width: 60%;
              transform: scale(1.8,1.5);
            }
            .circle {
              margin-top: 5%;
            }
            .twocolumn > img {
              margin-top: 5%;
            }
          }
          @media (max-width: 768px) {
            .circle::after {
              left: -7%;
            }
            .twocolumn {
              grid-template-columns: 1fr;
            }
            .twocolumn > img {
              width: 80%;
              align-self: center;
              justify-self: center;
            }
            .cta-container{
              display:block;
              margin-bottom: 5%;
              text-align: center;
            }
            .cta-container div:nth-of-type(2) {
              width: 100%;
            }
            .cta-container--hl {
              margin-left: 0;
            }
            #unser-campus {
              padding: 50px 30px;
  
          }
          @media (max-width: 468px) {
            #unser-campus {
              padding: 50px 30px;
            }
            .twocolumn {
              grid-template-columns: 1fr;
              margin-bottom: 10px;
            }
            .twocolumn > img {
              width: 100%;
              align-self: center;
              justify-self: center;
            }

            .circle::after {
              display: none;
            }
          }
          @media (max-width: 320px) {
            .breakHide,
            .aside {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default JetztBewerben_neu;
