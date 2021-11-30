import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
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
const HtmlCssWtf = () => {
  return (
    <div id="html-css-wtf">
      <div className="asidebg">
        <span className="aside">Arbeitsplatz der Zukunft</span>
      </div>
      <div className="twocolumn">
        <div>
          <h1>
            WE <br />
            CAN <br />
            DO <span>IT</span>!
          </h1>
          <p>
            Digitale Skills waren noch{" "}
            <span className="underline">nie&nbsp;wichtiger</span> – vor allem
            die Fähigkeit programmieren zu können ist gefragter denn je und
            ermöglicht den Zugang zu vielen tollen Jobs! Laut Bitkom sind allein
            in Deutschland über 124.000 Stellen für IT-Expert*innen nicht
            besetzt – und vor allem qualifizierte Frauen sind bei Unternehmen
            sehr gefragt.
          </p>
          <p>
            Metro, IBM, Vodafone, Trivago – der Düsseldorfer IT-Markt boomt! Das
            Super Stipendium ist dein Türöffner in den digitalen Arbeitsmarkt
            der <span className="one-line">Zukunft!</span>
          </p>
        </div>
        <div className="gallery">
          <img src="/img/htmlcsswtf_bild2.png" alt="" />
          <img src="/img/htmlcsswtf_bild3.png" alt="" />
          <img src="/img/htmlcsswtf_bild4.png" alt="" />
          <img src="/img/htmlcsswtf_bild5.png" alt="" />
        </div>
        <section id="carousel">
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
            <figure>
              <img src="/img/htmlcsswtf_bild3.png" alt="" />
            </figure>
            <figure>
              <img src="/img/htmlcsswtf_bild4.png" alt="" />
            </figure>
            <figure>
              <img src="/img/htmlcsswtf_bild5.png" alt="" />
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
          font-weight: 300;
          font-family: "Poppins", sans-serif;
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
          background: url("/img/htmlcsswtf_bild1.png") center/contain no-repeat;
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
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          display: block;
          background: rgba(0, 0, 0, 0.5) center/contain no-repeat;
        }
        #html-css-wtf {
          font-family: "Fira Sans_regular";
          overflow: hidden;
          padding: 100px 0 100px 10%;
          position: relative;
          background-color: #fff;
        }
        .twocolumn {
          display: grid;
          grid-template-columns: 50% 50%;
          padding-bottom: 40px;
        }
        h1 {
          font-family: "Fira Sans_extra_bold";
          font-size: 120px;
          line-height: 105px;
          max-width: 346px;
          color: transparent;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: #10375c;
          margin: 0.5em 0 0.3em;
        }
        h1 span {
          color: #10375c;
        }
        .twocolumn div:first-of-type {
          width: 80%;
          z-index: 99;
        }
        p {
          color: #10375c;
          font-family: "Fira Sans_regular";
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 22px;
          justify-self: center;
        }
        .twocolumn div:first-of-type p:first-of-type span:nth-of-type(1) {
          background: url(/img/htmlcsswtf_line1.svg) center bottom/100%
            no-repeat;
        }
        .square,
        .circle {
          position: relative;
        }

        .circle:after {
          content: "";
          position: absolute;
          top: -0.25em;
          bottom: 0;
          left: -5px;
          right: 0;
          display: block;
          width: 120%;
          height: 2.1em;
          background: url(/img/htmlcsswtf_line2.svg) center/contain no-repeat;
        }

        .square:after {
          content: "";
          position: absolute;
          top: -0.25em;
          bottom: 0;
          left: -5px;
          right: 0;
          display: block;
          width: 110%;
          height: 2.5em;
          background: url(/img/htmlcsswtf_line3.svg) center/contain no-repeat;
        }
        .one-line {
          display: inline-block;
          width: 4em;
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
          transform: translate(5vw, 3vh);
        }
        .twocolumn div:last-of-type img:nth-of-type(2) {
          width: 60%;
          min-width: 280px;
          transform: translate(1vw, 0vh);
        }
        .twocolumn div:last-of-type img:nth-of-type(3) {
          width: 80%;
          min-width: 280px;
          transform: translate(-4vw, 11vh);
        }
        .twocolumn div:last-of-type img:nth-of-type(4) {
          width: 100%;
          min-width: 280px;
          transform: scale(1.2, 1.2) translate(0vw, 0vw);
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
            font-size: 60px;
            line-height: 50px;
            margin-bottom: 50px;
          }
          p {
            font-family: "Fira Sans_regular";
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 20px;
            justify-self: center;
          }
          .asidebg,
          .asidebg:before {
            background: none;
          }
        }
      `}</style>
    </div>
  );
};

export default HtmlCssWtf;
