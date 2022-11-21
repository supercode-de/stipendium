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

const DiginexusEinsatz
  = () => {
    return (
      <div id='praxis-einsatz'>
        <div className='twocolumn'>
          <div>
            <h1>
              <span>Dein Praxiseinsatz <br /> bei </span> Diginexus
            </h1>
            <article className="layout--grid">
              <div className="layout-left">
                <p>
                  Im Anschluss an den Kurs kannst du dein Wissen in einem 2-monatigen Praktikum (remote möglich) bei der Digitalagentur Diginexus direkt anwenden.
                </p>
                <p>
                  Die Art Projekte bei Diginexus sind genauso vielfältig wie deren Kund:innen. Das Portfolio reicht von schlichten UI-Design-Jobs bis zur detaillierten Entwicklung von ganzheitlichen Konzepten. Von der Konzeption, über die Recherche, das Design bis hin zum Backend ist alles dabei, was das UX/UI-Herz höher schlagen lässt.
                </p>
                <p>
                  Dabei beschäftigen sie sich natürlich auch mit SEA und SEO und versuchen alle Lösungen mit idealer Performance abzugeben. Besonders spezialisiert sich Diginexus dabei momentan auf den gesamten UX-Bereich.
                </p>
              </div>
              <div className="layout-right">
                <p>
                  Am liebsten begleitet Diginexus Unternehmen ganzheitlich auf ihrem Weg zum digitalen Arbeiten. Das heißt sie beginnen damit die Geschäftsprozesse ihrer Kundinnen zu analysieren, abzubilden und dann neu zu denken und bewegen sie weg von „das haben wir immer schon so gemacht“ und hin zum effizienten und intuitiven digitalen Arbeiten.
                </p>
                <p>
                  In deinem Praxiseinsatz bist du Teil des Teams und bekommst nicht nur wertvolle Einblicke in die Arbeit einer modernen Digital-Agentur, sondern kannst deine neuen Kenntnisse auch direkt anwenden. Das Team von Diginexus freut sich auf dich!
                </p>
              </div>
            </article>
          </div>
          <img src="/img/Diginexus Wort-Bildmarke_blau.png" alt="diginexus logo" title="diginexus gmbh" className="noBorderRadius" />

        </div>
        <style jsx>{`
            
            #praxis-einsatz {
              padding:100px 5% 145px 10%;  
            }
            h1{
              font-family: 'Fira Sans_extra_bold';
              line-height:0.8em;            
              color: transparent;
              -webkit-text-stroke-width: 2px;
              -webkit-text-stroke-color: #10375C;
              font-weight:900;
              margin: .5em 0 .3em;
            }
            h1 span{
              color: #10375C;
              font-family: inherit;
            }
            .layout--grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 6rem;
              margin-bottom: 5rem;
            }
            img {
              display: block;
              margin-left: auto;
              margin-right: 2%;
            }
            p{
              color: #10375C;
              margin-bottom: 5%;
            }
            
        }
        @media (max-width: 1024px) {
          .layout--grid {
            gap: 3rem;
          }
          p {
            width: 100%;
          }
        }
        @media (max-width: 768px) {
          img {
            margin-right: 5%;
          }
          .layout--grid {
            gap: 1.5rem;
          }
        }
        @media (max-width: 425px) {
          #praxis-einsatz {
            padding: 40px 30px 50px;
          }
          p {
            width: 100%;
          }
          img {
            width: 60%;
          }
          .layout--grid {
            display: block;
          }
        }
        @media (max-width: 320px) {
          .twocolumn p {
            width: 100%;
          }
          img {
            width: 60%;
          }
        }
              
            `}</style>
      </div>
    );
  };

export default DiginexusEinsatz
  ;
