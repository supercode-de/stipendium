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

const ShetaniEinsatz = () => {
  return (
    <div id='shetani-einsatz'>
      <div className='twocolumn'>
        <div>
          <h1>
            Dein Praxiseinsatz bei <br/> <span>shetani</span>
          </h1>
          <p>Im Anschluss an den Kurs kannst du dein Wissen in einem 2-monatigem Praktikum (remote möglich) bei der Digitalagentur Shetani direkt anwenden. 
          </p>
          <p>Die Art Projekte bei Shetani ist genauso vielfältig wie deren Kund:innen. Das geht von schlichten UI Design Jobs über die detaillierte Entwicklung von Web-Apps von Anfang bis Ende. Also von der Konzeption, über die Recherche, das Design, das Frontend bis zum Backend. Dabei beschäftigen sie sich natürlich auch mit SEA und SEO und versuchen alle Lösungen mit idealer Performance abzugeben. Besonders spezialisiert sich Shetani dabei momentan auf den gesamten UX Bereich.
          </p>
          <p>Am liebsten begleitet Shetani Unternehmen ganzheitlich auf deren Weg zum digitalen Arbeiten. Das heißt sie beginnen damit die Geschäftsprozesse der Kund*innen zu analysieren, abzubilden, und dann neuzudenken, weg von „das haben wir immer schon so gemacht“ und hin zum effizienten und intuitiven digitalen Arbeiten.</p>
          <p>In deinem Praxiseinsatz bist du Teil des Teams und bekommst nicht nur wertvolle Einblicke in die Arbeit einer modernen Digital-Agentur, sondern kannst deine neuen Kenntnisse auch direkt anwenden. Das Team von shetani freut sich auf dich! </p>
        </div>
        <img src="/img/shetani-logo-2.png" alt="shetani logo" title="shetani oHG" />

      </div>
      <style jsx>{`
            
            #shetani-einsatz {
              font-family: "Neue_Machina_Regular_400";
              padding:100px 0 145px 10%;  
            }
            h1{
                font-family: 'Fira Sans_extra_bold';
                font-size:5.1em;
                line-height:0.8em;            
                color: transparent;
                -webkit-text-stroke-width: 2px;
                -webkit-text-stroke-color: #000;
                font-weight:900;
                margin: .5em 0 .3em;
            }
            h1 span{
                color: #000;
            }
            .twocolumn p{
              width: 35%;
            }
            img {
              display: block;
              margin-left: 65%;
              max-width: 100%;
            }
            p{
              color: #10375C;
              font-family: "Fira Sans_regular";

              font-style: normal;
              font-weight: normal;
              font-size: 1em;
              line-height: 20px;
              justify-self: center;
            }
            
        }
            @media (max-width: 768px) {
              .twocolumn p {
                width: 55%;
              }
                p{
                    font-size:1.4em;
                    line-height: 24px;
                }
                #warum-sc {
                    padding:30px 30px 50px 30px;
                }
                img {
                  margin-left: 45%;

                }
              }
              @media (max-width: 468px) {
                h1{
                    font-size: 4em;
                }
                p{
                    font-size:1.8em;
                }
              }
              @media (max-width: 320px) {
                .twocolumn p {
                  width: 90%;
                }
                img {
                  margin-left: 20%;
                  width: 60%;
                }
              }
            `}</style>
    </div>
  );
};

export default ShetaniEinsatz;
