import Typeform from './TypeForm';

const JetztBewerben_neu = () => {
  return (
    <div id='unser-campus'>
      <span className='aside'> Bewirb dich jetzt! </span>

      <div className='twocolumn'>
        <div className='onecolumn'>
          <h1>
          “Im Bootcamp habe ich nicht nur viel über die Gestaltung, Technik und Psychologie von Digitalprodukten gelernt, sondern konnte das neue Wissen auch direkt praktisch anwenden. Das Team und die Gruppe waren super motivierend und ich habe mich jeden Tag auf den Kurs gefreut!” 
          </h1>
          <div className='circle'>
            <h1 className='persona'>Bob Boost, Medienmanager und <br /> Audience Developer</h1>
          </div>

          <div className='cta-container'>
            <div className='center'>
              <Typeform />
            </div>
            <div>
              <p>
                Worauf wartest Du noch?
                <br />
                Bewirb dich jetzt und mit etwas Glück
                <br />
                startest du bald deine neue Karriere!
              </p>
            </div>
          </div>
        </div>
        <img src='/persona_bob.jpg' alt='' />
      </div>

      <style jsx>{`
          .center {
            text-align: center;
          }
          .aside {
            position: absolute;
            transform: rotate(-90deg);
            transform-origin: left;
            color: #fff;
            font-weight: 300;
            left: 3%;
            top: 60%;
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #ffffff;
          }
          #unser-campus {
            padding: 100px 0 100px 10%;

            position: relative;
            background-color: #10375c;
            // background-image: linear-gradient(
            //     to right,
            //     rgba(255, 255, 255, 0.25) 0,
            //     rgba(255, 255, 255, 0.25) 1px,
            //     transparent 1px,
            //     transparent 100%
            // );
            // background-position: 0 0, 0 0;
            // background-size: calc(100vw / 12) calc(100vw / 12);
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
          h1 {
            font-family: 'Fira Sans_regular';
            font-size: 1.9em;
            color: #fff;
          }
          h1 span.super {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: #fff;
            font-weight: 300;
          }
          h1 span:first-of-type,
          h1 span:last-of-type {
            position: relative;
          }
          h1 span:first-of-type::after {
            position: absolute;
            background: url('/vector41.svg') center/cover no-repeat;
            height: 2px;
            width: 70%;
            right: 0;
            bottom: 4px;
            content: '';
            display: block;
          }
          h1 span:first-of-type::before {
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
          h1 span:last-of-type::after {
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
          .circle h1 {
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
              margin-top:90px;
          }
          .cta-container div:nth-of-type(2){
            width:70%;
          }

          p {
            color: #fff;
            font-family: 'Fira Sans_regular';

            font-style: normal;
            font-weight: normal;
            line-height: 22px;
            justify-self: center;
            padding-left:10%;
          }
          button {
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 3px;
            text-transform: uppercase;
            padding: 10px 30px;
            background: transparent;
            border: 1px solid #fff;
            color: #fff;
            justify-self: center;
          }
          button:hover {
            color: #5d3ede;
            background: #fff;
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
            h1 {
              font-size: 2em;
              line-height: 40px;
            }
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

            .circle:after {
              display:none;
            }
          }
          @media (max-width: 768px) {
            h1 {
              font-size: 3em;
            }
            p {
              font-size: 2em;
              margin-bottom: 50px;
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
            }
            #unser-campus {
              padding: 50px 30px;
  
          }
          @media (max-width: 468px) {
            #unser-campus {
              padding: 20px 30px;
            }
            h1 {
              font-size: 2em;
              line-height:1em;
            }
            p {
              font-size: 1.3em;
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
          .persona{
            margin-bottom:-50px;
          }

            .circle:after {
              height: 100;
              width: 110%;
              // left: -7%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default JetztBewerben_neu;
