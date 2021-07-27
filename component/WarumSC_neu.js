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

const WarumSC_neu = (props) => {
  return (
    <div id='warum-sc'>
      <span className='aside'>Warum supercode?</span>
      <div className='twocolumn'>
        <div>
          <h1>
            WARUM <span>SUPERCODE</span>?
          </h1>

          <p>
            Egal ob du Quereinsteigerin, Berufstätige, alleinerziehend oder
            Studienabrecherin bist: SuperCode unterstützt dich deinen Weg in die
            IT zu wagen. Wir möchten wir ein Arbeitsumfeld schaffen, in dem sich
            jede Person gesehen und angenomen fühlt und ihr Potential voll
            entfalten kann.
            <br />
          </p>
          <p>
            Du lernst alles, was du für deinen Einstieg in die digitale Karriere
            brauchst: Ein umfangreiches UX-Know-How in den Bereichen
            User-Research und -Methods, Prototyping & Wireframing und den
            Prinzipien des benutzerzentrierten Designs.
            <br />
          </p>
          <p>
            Ein umfangreiches UX-Know-How in den Bereichen User-Research und
            -Methods, Prototyping & Wireframing und den Prinzipien des
            benutzerzentrierten Designs.
          </p>
          <p>
            Mit über 60% Praxisanteil bilden wir dich optimal für die
            Berufspraxis als UX/UI-Designer*in aus und erstellen mit dir dein
            eigenes Portfolio mit großartigen Praxisprojekten. br
          </p>
          <p>
            Zwei Trainern*innen sorgen täglich für eine optimale und effektive
            Lernbegleitung.
          </p>
        </div>
        <div className='gallery'>
          <img src='/img/warumsc_bild1.png' alt='' className='centercenter' />
          <img src='/img/warumsc_bild2.png' alt='' className='righttop' />
          <img src='/img/warumsc_bild3.png' alt='' className='rightcenter' />
          <img src='/img/warumsc_bild4.png' alt='' className='rightbottom' />
        </div>
        {/* <img
          src='/img/warumsc_bild5.png'
          alt=''
          className='leftbottom gallery'
        /> */}
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
              <img src='/carousel1.png' alt='' />
            </figure>
            <figure>
              <img src='/carousel2.png' alt='' />
            </figure>
            <figure>
              <img src='/carousel3.png' alt='' />
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
                // background-image: linear-gradient(
                //     to right,
                //     rgba(255, 255, 255, 0.25) 0,
                //     rgba(255, 255, 255, 0.25) 1px,
                //     transparent 1px,
                //     transparent 100%
                //     ),
                //     linear-gradient(
                //     to bottom,
                //     rgba(255, 255, 255, 0.25) 0,
                //     rgba(255, 255, 255, 0.25) 1px,
                //     transparent 1px,
                //     transparent 100%
                //     );
                background-position: 0 0, 0 0;
                background-size: ${props.width}px ${props.width}px;
            }
            .twocolumn{
                display:grid;
                grid-template-columns:50% 50%;
                padding-bottom:40px;
            }
            
            h1{
                // font-family:"Neue_Machina_Regular_400";
                font-family: 'Fira Sans';
                font-size:4.4em;
                line-height:0.8em;
            
                // color: transparent;
                // -webkit-text-stroke-width: 2px;
                // -webkit-text-stroke-color: #fff;
                font-weight:900;
                margin: .5em 0 .3em;
            }
            h1 span{
                color: transparent;
                -webkit-text-stroke-width: 2px;
                -webkit-text-stroke-color: #fff;
            }
            p{
                color: #fff;
                font-family: "Neue_Machina_Regular_400";

                font-style: normal;
                font-weight: normal;
                font-size: 1em;
                line-height: 20px;
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
                left: -10%;
                top: 65%;
                transform: translateY(-50%);
                width: 20vw;
            }
            .righttop{
                position: absolute;
                right: 10%;
                top: 10%;
                transform: translateY(-30%);
                width: 20vw;
            }
            .rightcenter{
                position: absolute;
                right: 10%;
                top: 50%;
                transform: translateY(-30%);
                width: 20vw;
            }
            .rightbottom{
                position: absolute;
                right: 0%;
                bottom: 0;
                transform: translateY(50%);
                width: 25vw;
            }
            .leftbottom{
                position: absolute;
                left: 0;
                bottom: -15vh;
                width: 50vw;
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
                h1{
                    opacity:0.8;
                }
                p{
                    font-size:1.4em;
                    line-height: 24px;
                }
              }
              @media (max-width: 468px) {
                h1{
                    font-size: 4em;
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

export default WarumSC_neu;