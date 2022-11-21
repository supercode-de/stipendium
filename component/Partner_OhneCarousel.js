import partnerData from "../component/data/partnerData.json";
import Link from 'next/link';

const Partner_OhneCarousel = () => {
  return (
    <div id='partner'>
      <h2>
        <img src='/image14.png' alt='' />
        <span>
          UNSERE <br /> <span>PARTNER</span>
        </span>
      </h2>
      <div className="partnerCards">
        {partnerData.map((partner) => (
          <figure>
            <img src={partner.logo} alt={partner.name} className="noBorderRadius" />
            <figcaption>
              <p>
                {partner.Beschreibung}
              </p>
              <Link href={partner.websiteLink}>
                <a>WEBSITE </a>
              </Link>
            </figcaption>
          </figure>
        ))}

      </div>

      <style jsx>{`

        #partner {
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
          right: -5%;
          max-height: 620px;
          z-index: 1;
        }
        .partnerCards {
          display: flex;
          gap: 40px;
        }
        figure {
          position: relative;
          z-index: 2;
          border: 3px solid #fff;
          padding: 40px;
          background: #10375c;
        }
        figcaption p{
          margin-top: 2%;
          margin-bottom: 6%;
        } 
        p {
          color: #fff;
          font-size: 1rem;
        }

        a {
          color: #fff;
          text-decoration: none;
          border: 1px solid #fff;
          padding: 3% 9%;
          letter-spacing: 3px;
          display: inline-block;
          margin-top: 2%;
        }
        a:hover {
          text-decoration: underline;
        }
        @media (max-width: 1024px) {
          #partner {
            padding: 10vh 3vw 20vh;
          }
          h2 img {
            position: absolute;
            max-width: 80%;
            top: 13%;
            left: 69%;
            transform: translateX(-50%);
            max-height: 550px;
          }
          .partnerCards {
            gap: 20px;
          }
          figure {
            padding: 20px;
          }

        }

        @media (max-width: 768px) {
          h2 {
            height: 150px;
          }
          h2 img {
            max-width: 50%;
            top: -27%;
          }
          figure {
            padding: 10%;
          }

          .partnerCards {
            flex-wrap: wrap;
            width: 60%;
            margin: 0 auto;
          }
        }
        @media (max-width: 435px) {
          .partnerCards {
            width: 100%;
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
            padding: 0;
          }
          .block {
            display: block;
          }

          .hide {
            display: block;
          }
          #partner {
            padding: 50px 30px 40px 30px;
          }

        }
        @media (max-width: 425px) {
          figure {
            padding: 20px;
          }
          figure img {
            width: 55%;
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

export default Partner_OhneCarousel;
