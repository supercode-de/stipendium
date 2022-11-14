import Carousel from 'react-multi-carousel';
import Link from 'next/link';
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
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Partner = () => {
  return (
    <div id='Absolventen'>
      <h2>
        <img src='/image14.png' alt='' />
        <span>
          UNSERE <br /> <span>PARTNER</span>
        </span>
      </h2>
      <div className='Absolventen-list'>
        <div className='container'>
          <Carousel
            responsive={responsive}
            ssr
            showDots={false}
            slidesToSlide={1}
            infinite={false}
            partialVisible
            containerClass='container-with-dots'
            deviceType={''}
            itemClass='carousel-item-margin-20-px'
            width='100%'
          >
            <figure>
              <img src='/img/shetani-logo-2.png' alt='' />
              <figcaption>
                <p>Wir helfen Unternehmen aller Art bei der Digitalisierung. Unsere Kunden sind sehr vielfältig: vom kleinen Museum „um die Ecke“ bis hin zu renommierteren Projekten wie der Wuppertaler Schwebebahn oder dem Düsseldorfer Flughafen.
                </p>
                <ul className="partner-links">
                  <li>
                    <Link href='https://shetani.de/'>
                      <a aria-label="shetani website">WEBSITE </a>
                    </Link>
                  </li>
                  <li>–</li>
                  <li>
                    <Link href='https://www.linkedin.com/company/shetani-agency/'>
                      <a aria-label="shetani linkedin">LINKEDIN</a>
                    </Link>
                  </li>
                  <li>–</li>
                  <li>
                    <Link href='https://de-de.facebook.com/shetani.agency'>
                      <a aria-label="shetani facebook">FACEBOOK</a>
                    </Link>
                  </li>
                </ul>
              </figcaption>
            </figure>
            <figure>
              <img src='/superdigital.svg' alt='' />
              <figcaption>
                <p>
                  Unser Ziel ist es, Menschen für das Verstehen von digitaler
                  Logik und Technologie zu begeistern, Kompetenzen für
                  Gestaltung der digitalen Welt zu vermitteln und Wege der
                  selbstbestimmten Nutzung aufzuzeigen.
                </p>
                <ul className="partner-links">
                  <li>
                    <Link href='https://www.super-digital.xyz/'>
                      <a aria-label="super-digital website">WEBSITE</a>
                    </Link>
                  </li>
                  <li>–</li>
                  <li>
                    <Link href='https://www.linkedin.com/company/superdigitalev'>
                      <a aria-label="super-digital facebook">LINKEDIN</a>
                    </Link>
                  </li>
                  <li>–</li>
                  <li>
                    <Link href='https://www.facebook.com/superdigitalev'>
                      <a aria-label="super-digital linkedin">FACEBOOK</a>
                    </Link>
                  </li>
                </ul>
              </figcaption>
            </figure>
            <figure>
              <img src='/supercode_logo_2022.svg' alt='' />
              <figcaption>
                <p>
                  SuperCode steht für digitale Bildung für alle! Modern,
                  zertifiziert, nachhaltig und ultra praxisorientiert. Der
                  Rockstar unter allen IT-Bildungsinstituten in NRW!
                </p>
                <ul className="partner-links">
                  <li>
                    <Link href='https://super-code.de'>
                      <a aria-label="super-code website">WEBSITE</a>
                    </Link>
                  </li>
                  <li>–</li>
                  <li>
                    <Link href='https://www.linkedin.com/school/19099791'>
                      <a aria-label="super-code linkedin">LINKEDIN</a>
                    </Link>
                  </li>
                  <li>–</li>
                  <li>
                    <Link href='https://www.facebook.com/supercodegmbh'>
                      <a aria-label="super-code facebook">FACEBOOK</a>
                    </Link>
                  </li>
                </ul>
              </figcaption>
            </figure>
            <figure>
              <img src='/img/startsteps-logo.svg' alt='' />
              <figcaption>
                <p>
                  Mit StartSteps kannst du herausfinden, was dein Traumjob in der Technologiebranche ist. Mach deinen ersten Schritt zu den Kompetenzen und Arbeitsplätzen von morgen.
                </p>
                <ul className="partner-links">
                  <li>
                    <Link href='https://startsteps.org/de'>
                      <a aria-label="startsteps website">WEBSITE</a>
                    </Link>
                  </li>
                  <li>–</li>
                  <li>
                    <Link href='https://www.linkedin.com/company/startsteps/'>
                      <a aria-label="startsteps linkedin">LINKEDIN</a>
                    </Link>
                  </li>
                  <li>–</li>
                  <li>
                    <Link href='https://www.facebook.com/startsteps'>
                      <a aria-label="startsteps facebook">FACEBOOK</a>
                    </Link>
                  </li>
                </ul>
              </figcaption>
            </figure>
          </Carousel>
        </div>
      </div>

      <style jsx>{`
        .aside {
          position: absolute;
          transform: rotate(-90deg);
          transform-origin: left;
          color: #fff;
          font-weight: 300;
          left: 3%;
          top: 60%;
          font-family: 'Fira Sans_regular';
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 18px;
          letter-spacing: 3px;
          text-transform: uppercase;

          color: #ffffff;
        }
        #Absolventen {
          padding: 10vh 9vw 20vh;
          background: #10375c;
          position: relative;
        }
        .container {
          width: 100%;
          padding: 0 -5%;
        }
        h2 {
          font-size: clamp(2.8125rem, 2.3125rem + 2.5vw, 5.3125rem);
          padding: 0 0 5vh 3%;
          color: #fff;
          border-bottom: 1px solid #10375c;
          position: relative;
          height: 220px;
          font-family: 'Fira Sans_extra_bold';
          font-weight: 900;
          line-height: 68px;
        }
        h2 span {
          position: absolute;
          z-index: 10;
          font-family: inherit;
        }
        h2 span span {
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: #fff;
        }
        h2 img {
          position: absolute;
          max-width: 50%;
          top: 13%;
          left: 60%;
          transform: translateX(-50%);
          max-height: 550px;
        }

        figure {
          border: 3px solid #fff;
          padding: 15px 20px;
          background: #10375c;
          min-height: 20vh;
          width: 90%;
          margin: 0 40px;
        }
        p {
          font-family: 'Fira Sans_regular';
          font-weight: 400;
          color: #fff;
          min-height: 15vh;
          font-size: 1rem;
        }

        figure > img {
          height: 30px;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        figcaption p {
          margin-bottom: 0px;
          margin: 0 1%;
        }
        .partner-links {
          list-style: none;
          display: inline-flex;
          color: #fff;
          border: 1px solid #fff;
          padding: 2%;
          font-size: .7rem;
          letter-spacing: 2px;
        }
        .partner-links li:nth-of-type(even) {
          margin: 0 .7rem;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        @media (max-width: 1024px) {
          h2 img {
            position: absolute;
            max-width: 80%;
            top: 13%;
            left: 60%;
            transform: translateX(-50%);
            max-height: 550px;
          }

        }

        @media (max-width: 768px) {
          h2 {
            height: 150px;
          }
          figure {
            padding: 10px 10px;
          }
        }
        @media (max-width: 568px) {
          h2 img {
            position: absolute;
            max-width: 90%;
            top: 13%;
            left: 60%;
            transform: translateX(-50%);
            max-height: 550px;
          }
          h2 {
            font-size: 4em;
            line-height: 0.87em;
          }
          .block {
            display: block;
          }

          .hide {
            display: block;
          }
          #Absolventen {
            padding: 50px 30px 40px 30px;
          }
          figure {
            margin-left: 20px;
          }
        }
        @media (max-width: 425px) {
          figure {
            padding: 20px;
          }
          figure:nth-of-type(1) figcaption p{
            margin-bottom: 5%;
          }
        }
        @media (max-width: 375px) {
          figure {
            width: 100%;
            margin: 0;
          }
          .partner-links {
            letter-spacing: .6px;
          }
        }
      `}</style>
    </div>
  );
};

export default Partner;
