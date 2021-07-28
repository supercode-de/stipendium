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
    partialVisibilityGutter: 70,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const HtmlCssWtf_neu = (props) => {
  return (
    <div id='html-css-wtf'>
      <div className='asidebg'>
        <span className='aside'>Arbeitsplatz der Zukunft</span>
      </div>
      <div className='twocolumn'>
        <div>
          <h1>
            UX, UI, <br /> <span>WTF</span> ?!
          </h1>
          <p>
            Ganz gleich, ob du Mediengestalter- *in, Kommunikationsdesigner*in,
            Grafik-Designer*in oder anderweitig kreativ ausgebildet bist:
            SuperCode bringt dich innerhalb von{' '}
            <span className='underline'>3 Monaten</span> auf das nächste Level
            der Karriereleiter. Mit deinen bisherigen Kenntnissen im Design und
            in der Konzeption in Kombination mit den Kursinhalten zu{' '}
            <span className='circle'>UX und </span> UI wirst du optimal
            qualifiziert und zur begehrten Fachkraft in der{' '}
            <span className='square'> Digitalwirtschaft.</span>
          </p>
          <p>
            Der Bedarf an qualifizierten UX/UI-Designer*innen ist hoch und wird
            weiter steigen, denn nutzerzentrierte Produkte bieten nicht nur
            einen Wettbewerbsvorteil, sondern werden im Zuge der
            fortschreitenden Digitalisierung zu dem Erfolgskriterium Nummer Eins
            werden.
          </p>
        </div>
        <div className='gallery'>
          <img src='/img/htmlcsswtf_bild2.png' alt='' />
          <img src='/img/htmlcsswtf_bild3.png' alt='' />
          <img src='/img/htmlcsswtf_bild4.png' alt='' />
          <img src='/img/htmlcsswtf_bild5.png' alt='' />
        </div>
        <section id='carousel'>
          <Carousel
            responsive={responsive}
            ssr
            showDots={false}
            slidesToSlide={1}
            infinite
            containerClass='container-with-dots'
            deviceType={''}
            itemClass='carousel-item-padding-20-px'
          >
            <figure>
              <img src='/img/htmlcsswtf_bild3.png' alt='' />
            </figure>
            <figure>
              <img src='/img/htmlcsswtf_bild4.png' alt='' />
            </figure>
            <figure>
              <img src='/img/htmlcsswtf_bild5.png' alt='' />
            </figure>
          </Carousel>
        </section>
      </div>
      <style jsx>{`
        #carousel {
          display: none;
        }
        .aside {
          transform: rotate(-90deg);
        //   color: #fff;
          font-weight: 300;
          font-family: 'Poppins', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 18px;
          letter-spacing: 3px;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .asidebg {
          position: absolute;
          background: url('/img/htmlcsswtf_bild1.png') center/contain no-repeat;
          top: 50%;
          left: 0;
          width: 3vw;
          min-width: 30px;
          height: 80vh;
          transform: translateY(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9;
        }
        .asidebg:before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          display: block;
          background: rgba(0, 0, 0, 0.5) center/contain no-repeat;
        }
        #html-css-wtf {
        //   font-family: 'Neue_Machina_Regular_400';
        font-family: 'Fira Sans_regular';

          overflow: hidden;
          padding: 100px 0 100px 10%;
          position: relative;
        //   background-color: #070021;
        //   background-image: linear-gradient(
        //       to right,
        //       rgba(255, 255, 255, 0.25) 0,
        //       rgba(255, 255, 255, 0.25) 1px,
        //       transparent 1px,
        //       transparent 100%
        //     ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.25) 0,
              rgba(255, 255, 255, 0.25) 1px,
              transparent 1px,
              transparent 100%
            );
          background-position: 0 0, 0 0;
          background-size: ${props.width}px ${props.width}px;
        }
        .twocolumn {
          display: grid;
          grid-template-columns: 50% 50%;
          padding-bottom: 40px;
        }
        h1 {
        //   font-family: 'Neue_Machina_Regular_400';
        font-family: 'Fira Sans_extra_bold';
          font-size: 5.1em;
          line-height: 0.87em;
        //   max-width: 300px;
          color: transparent;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: #000;
          font-weight: 900;
          margin: 0.5em 0 0.3em;
        }
        .twocolumn div:first-of-type {
          color: #000;
          width: 90%;
          z-index: 99;
        }

        h1 span{
            color:#000;
        }
        p {
        
        //   font-family: 'Neue_Machina_Regular_400';
        font-family: 'Fira Sans_regular';

          font-style: normal;
          font-weight: normal;
          font-size: 1.1em;
          line-height: 30px;
          justify-self: center;
        }
        .twocolumn div:first-of-type p:first-of-type span:nth-of-type(1) {
          background: url(/img/htmlcsswtf_line1.svg) center bottom/100%
            no-repeat;
        }
        .underline {
          background: url(/img/htmlcsswtf_line1.svg) center bottom/100%
            no-repeat;
        }
        .square,
        .circle {
          position: relative;
        }

        .circle:after {
          content: '';
          position: absolute;
          top: -0.25em;
          bottom: 0;
          left: -5px;
          right: 0;
          display: block;
          width: 110%;
          height: 1.4em;
          background: url(/img/StipendiumDateCircle.svg) center/contain no-repeat;
        }

        .square:after {
          content: '';
          position: absolute;
          top: -0.55em;
          bottom: 0;
          left: -25%;
          right: 0;
          display: block;
          width: 150%;
          height: 2.5em;
          transform: scale(1.4, 0.8);
          background: url(/img/htmlcsswtf_line3.svg) center/contain no-repeat;
        }
        .one-line {
          display: inline-block;
          width: 9em;
          background: url(/img/htmlcsswtf_line4.svg) center bottom/contain
            no-repeat;
        }
        .twocolumn div:first-of-type p:last-of-type {
          width: 70%;
        }
        .twocolumn div:last-of-type {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .twocolumn div:last-of-type img:nth-of-type(1) {
          width: 50%;
          min-width: 200px;
          transform: translate(3vw, 12vh);
        }
        .twocolumn div:last-of-type img:nth-of-type(2) {
          width: 60%;
          min-width: 280px;
          transform: translate(-1vw, 10vh);
        }
        .twocolumn div:last-of-type img:nth-of-type(3) {
          width: 80%;
          min-width: 280px;
          transform: translate(-4vw, 7vh);
        }
        .twocolumn div:last-of-type img:nth-of-type(4) {
          width: 100%;
          min-width: 280px;
          transform: scale(1.2, 1.2) translate(0vw, -6vh);
        }
        @media (max-width: 1024px) {
          figure {
            margin: 0;
          }
          #html-css-wtf .gallery {
            display: none;
          }
          #html-css-wtf #carousel {
            display: block;
          }
          #html-css-wtf #carousel img {
            width: 100%;
          }
          .twocolumn {
            display: block;
          }
        }
        @media (max-width: 768px) {
          .twocolumn {
            display: block;
          }
          .twocolumn div:last-of-type {
            width: 80%;
          }
          h1 {
            font-size: 5em;
            margin-bottom: 50px;
          }
          p {
            color: #fff;
            // font-family: 'Neue_Machina_Regular_400';
            font-family: 'Fira Sans_regular';

            font-style: normal;
            font-weight: normal;
            font-size: 1.4em;
            line-height: 24px;
            justify-self: center;
          }
          .asidebg,
          .asidebg:before {
            background: none;
          }
        }
        @media (max-width: 468px) {
        }
      `}</style>
    </div>
  );
};

export default HtmlCssWtf_neu;
