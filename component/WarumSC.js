import Carousel from "react-multi-carousel";

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

const WarumSC = () => {
  return (
    <div id="warum-sc">
      <span className="aside">Warum supercode?</span>
      <div className="twocolumn">
        <div>
          <h1>
            WARUM <span>SUPERCODE?</span>
          </h1>

          <p>
            Egal ob du Quereinsteigerin, Berufstätige, alleinerziehend oder
            Studienabrecherin bist: SuperCode unterstützt dich deinen Weg in die
            IT zu wagen. Wir möchten wir ein Arbeitsumfeld schaffen, in dem sich
            jede Person gesehen und angenomen fühlt und ihr Potential voll
            entfalten kann.
          </p>
          <p>
            In 5 - 7 Monaten lernst du in Voll- oder Teilzeit alles, was du für
            deinen Einstieg als Webdeveloperin brauchst: HTML, CSS, Javascript
            und die Grundlagen der Webtechnologien.
          </p>
          <p>
            Mit einem Mix aus Livecoding-Sessions, kurzen Theorieparts,
            Gamification und Zeit für Austausch in der Gruppe, bekommst du
            intensiv und schnell dein Coding-Know-How. und arbeitest an deinen
            Praxisprojekten.
          </p>
          <p>
            Zwei Trainern*innen sorgen täglich für eine optimale und effektive
            Lernbegleitung. Unser Bewerbungscoaching unterstützt dich zusätzlich
            bei deinem Einstieg in den digitalen Arbeitsmarkt.
          </p>
        </div>
        <div className="gallery">
          <img src="/img/warumsc_bild1.png" alt="" className="centercenter" />
          <img src="/img/warumsc_bild2.png" alt="" className="righttop" />
          <img src="/img/warumsc_bild3.png" alt="" className="rightcenter" />
          <img src="/img/warumsc_bild4.png" alt="" className="rightbottom" />
        </div>
        <img
          src="/img/warumsc_bild5.png"
          alt=""
          className="leftbottom gallery"
        />
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
              <img src="/carousel1.png" alt="" />
            </figure>
            <figure>
              <img src="/carousel2.png" alt="" />
            </figure>
            <figure>
              <img src="/carousel3.png" alt="" />
            </figure>
          </Carousel>
        </section>
      </div>
      <style jsx>{`
            #carousel{
                display:none;
            }
            .aside {
                position: absolute;
                transform: rotate(-90deg);
                transform-origin: left;
                color:#fff;
                font-weight:300;
                left: 3%;
                top: 60%;
                font-family: 'Poppins', sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 18px;
                letter-spacing: 3px;
                text-transform: uppercase;
            }
            #warum-sc {
                font-family: "Neue_Machina_Regular_400";
                padding:100px 0 100px 10%;  
                position: relative;
                background-color: #10375C;
            }
            .twocolumn{
                display:grid;
                grid-template-columns:50% 50%;
                padding-bottom:40px;
            }
            
            h1{
              font-family: 'Fira Sans_extra_bold';
              font-size: 5.1em;
              line-height: 80px;
                max-width: 300px;
                color: #fff;
                -webkit-text-stroke-width: 2px;
                -webkit-text-stroke-color: #fff;
                font-weight:300;
                margin: .5em 0 .3em;
            }
            h1 span{
                color: transparent;
                -webkit-text-stroke-width: 2px;
                -webkit-text-stroke-color: #fff;
            }
            p{
                color: #fff;
                font-family: "Fira Sans_regular";
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 22px;
                justify-self: center;
            }
            .twocolumn div:first-of-type{
                color: #fff;
                line-height: 1.5em;
                width: 85%;
                z-index: 9999;
            }
            .twocolumn div:last-of-type{
                position: relative;
            }
            .centercenter{
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 15vw;
            }
            .righttop{
                position: absolute;
                right: 20%;
                top: 0;
                transform: translateY(-30%);
                width: 16vw;
            }
            .rightcenter{
                position: absolute;
                right: 10%;
                top: 50%;
                transform: translateY(-30%);
                width: 12vw;
            }
            .rightbottom{
                position: absolute;
                right: 12%;
                bottom: 0;
                transform: translateY(50%);
                width: 15vw;
            }
            .leftbottom{
                position: absolute;
                left: 0;
                bottom: -5vh;
                width: 20vw;
                transform: translateY(50%);
                z-index: 999;
            }
        }
        @media (max-width: 1024px) {
            .hide{
                display:none ;
            }
            figure{
                margin:0;
            }
            .gallery{
                display:none ;
            }
            #carousel{
                display:block
            }
             #carousel img{
                width:100%
            }
            .twocolumn{
                display: block ;
            }
        }
            @media (max-width: 768px) {
                .twocolumn{
                    grid-template-columns: 1fr;
                    gap: 3vh;
                    grid-template-rows: 1fr 40vh;
                }
                .righttop{
                    right: 35%;
                }
                .rightcenter{
                    right: 20%;
                }
               h1 {
                font-size: 60px;
                line-height: 50px;
                -webkit-text-stroke-width: 1px;
               }
               h1 span {
                -webkit-text-stroke-width: 1px;
               }

                p{
                  font-size: 16px;
            line-height: 20px;
                }
              }
              @media (max-width: 468px) {
                h1{
                    font-size: 4em;
                    line-height: 40px
                }
                .centercenter{
                    width: 40vw;
                }
                .righttop{
                    width: 25vw;
                }
                .rightbottom{
                    width: 30vw;
                }
                .leftbottom{
                    width: 40vw;
                }
              }
            `}</style>
    </div>
  );
};

export default WarumSC;
