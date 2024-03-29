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

const WarumSC_neu = () => {
  return (
    <div id='warum-sc'>
      <span className='aside'>Warum supercode?</span>
      <div className='twocolumn'>
        <div>
          <h1>
            WARUM <span>SUPERCODE</span>?
          </h1>

          <p>
            Egal ob du Quereinsteiger:in, berufstätig, alleinerziehend oder Studienabrecher:in bist: SuperCode unterstützt dich deinen Weg in die Digitalbranche zu wagen. Wir möchten wir ein Arbeitsumfeld schaffen, in dem sich jede Person gesehen und angenomen fühlt und ihr Potential voll entfalten kann.
          </p>
          <p className="marginTopBot">
            Das SuperCode Team besteht aus Expert:innen mit langjähriger Erfahrung in den Bereichen Webentwicklung, UX/UI Design Bildungsmanagement und IT-Recruitment. Wir haben eine klare Vision: Digitale Bildung für alle, nachhaltig und modern.
          </p>
          <p>
            Uns alle verbindet die Liebe zur digitalen Welt. Deshalb sind wir eng vernetzt mit unseren Partnerunternehmen sowie den wichtigsten Start Ups aus unserer Region. Unsere Branchenexpertise und unser Netzwerk führen dich zum SuperJob!
          </p>
        </div>
        <div className='gallery'>
          <img src='/img/warumsc_bild1.png' alt='' className='centercenter' />
          <img src='/img/warumsc_bild2.png' alt='' className='righttop' />
          <img src='/img/warumsc_bild3.png' alt='' className='rightcenter' />
          <img src='/img/warumsc_bild4.png' alt='' className='rightbottom' />
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
                font-family: 'Fira Sans_regular';
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 18px;
                letter-spacing: 3px;
                text-transform: uppercase;
            }
            #warum-sc {
                padding:100px 0 145px 10%;  
                position: relative;
                background-color: #10375C;
            }
            .twocolumn{
                display:grid;
                grid-template-columns:50% 50%;
                padding-bottom:45px;
            }
            
            h1{
                font-family: 'Fira Sans_extra_bold';
                line-height:0.8em;
                font-weight:900;
                margin: .5em 0 .3em;
            }
            h1 span{
                color: transparent;
                -webkit-text-stroke-width: 2px;
                -webkit-text-stroke-color: #fff;
                font-family: inherit;
            }
            .marginTopBot {
              margin: 2% 0;
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
                left: -3%;
                top: 60%;
                transform: translateY(-50%);
                width: 17vw;
            }
            .righttop{
                position: absolute;
                right: 16%;
                top: 7%;
                transform: translateY(-30%);
                width: 17vw;
            }
            .rightcenter{
                position: absolute;
                right: 5%;
                top: 50%;
                transform: translateY(-30%);
                width: 18vw;
            }
            .rightbottom{
                position: absolute;
                right: 0%;
                bottom: 0;
                transform: translateY(68%);
                width: 26vw;
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
                display:block;
                margin-top: 2%;
            }
            #carousel img{
                width:100%
            }
            .twocolumn{
                display: block ;
            }
        }
            @media (max-width: 768px) {
              .aside {
                display: none;
              }
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
                #warum-sc {
                    padding:30px 30px 50px 30px;
                }
                #carousel {
                  margin-top: 5%;
                }
              }
              @media (max-width: 468px) {

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
              @media (max-width: 425px) {
                .twocolumn div:first-of-type {
                  width: 100%;
                }
              }
            `}</style>
    </div>
  );
};

export default WarumSC_neu;
