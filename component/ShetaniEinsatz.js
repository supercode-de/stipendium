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
          <p>Im Anschluss an den Kurs kannst du dein Wissen in einem 3 monatigem, bezahlten Praktikum (remote möglich) bei der Digitalagentur Shetani direkt anwenden.
          </p>
          <p>Shetani - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
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
                p{
                    font-size:1.4em;
                    line-height: 24px;
                }
                #warum-sc {
                    padding:30px 30px 50px 30px;
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
            `}</style>
    </div>
  );
};

export default ShetaniEinsatz;
