import Carousel from "react-multi-carousel";
import Link from "next/link";
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
    <div id="Absolventen">
      <span className="aside">Unsere Partner</span>
      <h2>
        <img src="/image14.png" alt="" />
        <span>
          UNSERE <br /> <span>PARTNER</span>
        </span>
      </h2>
      <div className="Absolventen-list">
        <div className="container">
          <Carousel
            responsive={responsive}
            ssr
            showDots={false}
            slidesToSlide={1}
            infinite
            partialVisible
            containerClass="container-with-dots"
            deviceType={""}
            itemClass="carousel-item-padding-20-px"
          >
            <figure>
              <img
                src="/logo-female-innovation-hub-partner.png"
                alt="female innovation hub logo"
              />
              <figcaption>
                <p>
                  Das Fe:male Innovation Hub ist die Plattform für Female
                  Empowerment und Entrepreneurship und steht für digitale
                  Bildung, Diversität und Chancengleichheit.
                </p>
                <div className="button">
                  <span className="block">
                    <Link href="https://www.femaleinnovationhub.com/">
                      <a
                        aria-label="femaleinnovationhub website"
                        target="_blank"
                      >
                        WEBSITE
                      </a>
                    </Link>
                  </span>{" "}
                  <span className="hide">–</span>
                  <span className="block">
                    <Link href="https://www.linkedin.com/company/female-innovation-hub/">
                      <a
                        aria-label="femaleinnovationhub linkedin"
                        target="_blank"
                      >
                        LINKEDIN
                      </a>
                    </Link>
                  </span>
                  <span className="hide"> –</span>
                  <span className="block">
                    <Link href="https://www.facebook.com/femaleinnovationhub/">
                      <a
                        aria-label="femaleinnovationhub facebook"
                        target="_blank"
                      >
                        FACEBOOK
                      </a>
                    </Link>
                  </span>
                </div>
              </figcaption>
            </figure>
            <figure>
              <img
                src="/logo-women-in-tech-partner.png"
                alt="Women in Tech logo"
              />
              <figcaption>
                <p>
                  Women in Tech e.V. ist ein branchenübergreifender,
                  gemeinnütziger Verein mit dem Ziel Frauen in technischen
                  Berufen zu gewinnen, fördern und sichtbarer zu machen.
                </p>
                <div className="button">
                  <span className="block">
                    <Link href="https://www.linkedin.com/company/womenintechde/">
                      <a aria-label="women in tech linkedin" target="_blank">
                        LINKEDIN
                      </a>
                    </Link>
                  </span>{" "}
                  <span className="hide">–</span>
                  <span className="block">
                    <Link href="https://www.instagram.com/womenintech_dach/">
                      <a aria-label="women in tech instagram" target="_blank">
                        INSTAGRAM
                      </a>
                    </Link>
                  </span>
                  <span className="hide"> –</span>
                  <span className="block">
                    <Link href="https://www.facebook.com/groups/womenintechgermany/">
                      <a aria-label="women in tech facebook" target="_blank">
                        FACEBOOK
                      </a>
                    </Link>
                  </span>
                </div>
              </figcaption>
            </figure>
            <figure>
              <img src="/logo-digihub-partner.png" alt="digihub logo" />
              <figcaption>
                <p>
                  Der digihub umfasst ein großes Netzwerk aus unterschiedlichen
                  Akteuren wie Städten und Gemeinden, IHKs, Mittelstand und
                  Corporates, Co-Working-Spaces, Finanzinstituten, Hochschulen
                  und Business Angels.
                </p>
                <div className="button">
                  <span className="block">
                    <Link href="https://digihub.de/">
                      <a aria-label="digihub website" target="_blank">
                        WEBSITE
                      </a>
                    </Link>
                  </span>{" "}
                  <span className="hide">–</span>
                  <span className="block">
                    <Link href="https://de.linkedin.com/company/digital-innovation-hub-d%C3%BCsseldorf-rheinland-gmbh">
                      <a aria-label="digihub linkedin" target="_blank">
                        LINKEDIN
                      </a>
                    </Link>
                  </span>
                  <span className="hide"> –</span>
                  <span className="block">
                    <Link href="https://de-de.facebook.com/digihub.de/">
                      <a aria-label="digihub facebook" target="_blank">
                        FACEBOOK
                      </a>
                    </Link>
                  </span>
                </div>
              </figcaption>
            </figure>
            <figure>
              <img src="/logo-supercode-partner.png" alt="super-code logo" />
              <figcaption>
                <p>
                  SuperCode steht für digitale Bildung für alle! Modern,
                  zertifiziert, nachhaltig und ultra praxisorientiert.
                  <br />
                  <br />
                  Der Rockstar unter allen IT-Bildungsinstituten in NRW!
                </p>

                <div className="button">
                  <span className="block">
                    <Link href="https://super-code.de">
                      <a aria-label="super-code website" target="_blank">
                        WEBSITE
                      </a>
                    </Link>
                  </span>{" "}
                  <span className="hide">–</span>
                  <span className="block">
                    <Link href="https://www.linkedin.com/school/19099791">
                      <a aria-label="super-code LINKEDIN" target="_blank">
                        LINKEDIN
                      </a>
                    </Link>
                  </span>
                  <span className="hide"> –</span>
                  <span className="block">
                    <Link href="https://www.facebook.com/supercodegmbh">
                      <a aria-label="super-code FACEBOOK" target="_blank">
                        FACEBOOK
                      </a>
                    </Link>
                  </span>
                </div>
              </figcaption>
            </figure>
            <figure>
              <img
                src="/logo-superdigital-partner.png"
                alt="superdigital logo"
              />
              <figcaption>
                <p>
                  Unser Ziel ist es, Menschen für das Verstehen von digitaler
                  Logik und Technologie zu begeistern, Kompetenzen für
                  Gestaltung der digitalen Welt zu vermitteln und Wege der
                  selbstbestimmten Nutzung aufzuzeigen.
                </p>
                <div className="button">
                  <span className="block">
                    <Link href="https://www.super-digital.xyz/">
                      <a aria-label="superdigital website" target="_blank">
                        WEBSITE
                      </a>
                    </Link>
                  </span>{" "}
                  <span className="hide">–</span>
                  <span className="block">
                    <Link href="https://www.facebook.com/superdigitalev">
                      <a aria-label="superdigital FACEBOOK" target="_blank">
                        FACEBOOK
                      </a>
                    </Link>
                  </span>
                  <span className="hide"> –</span>
                  <span className="block">
                    <Link href="https://www.linkedin.com/company/superdigitalev">
                      <a aria-label="superdigital LINKEDIN" target="_blank">
                        LINKEDIN
                      </a>
                    </Link>
                  </span>
                </div>
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
          font-family: "Poppins", sans-serif;
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
          margin-left: auto;
        }
        h2 {
          margin: 0;
          padding: 0 0 5vh 3%;
          color: #fff;
          font-size: 5.1em;
          line-height: 80px;
          position: relative;
          height: 220px;
          font-family: "Fira Sans_extra_bold";
          font-weight: 900;
        }
        h2 span {
          position: absolute;
          z-index: 10;
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
        .Absolventen-list {
        }
        figure {
          border: 2px solid #ffda19;
          padding: 15px 40px;
          background: #10375c;
          min-height: 250px;
        }
        p {
          font-weight: 400;
          color: #fff;
          min-height: 150px;
          font-size: 18px;
        }

        figure > img {
          height: 50px;
        }

        .button {
          font-family: "Fira Sans_regular";
          font-style: normal;
          font-weight: normal;
          font-size: 0.6rem;
          line-height: 18px;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 10px 30px;
          background: transparent;
          border: 1px solid #fff;
          color: #fff;
          align-self: flex-end;
          display: flex;
          justify-content: space-around;
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
          .block {
            display: block;
          }
          .button {
            display: block;
            text-align: center;
          }
          .hide {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default Partner;
