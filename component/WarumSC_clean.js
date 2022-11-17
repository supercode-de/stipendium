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
      <div className='twocolumn'>
        <div>
          <h1>
            WARUM <br /> <span>SUPERCODE</span>?
          </h1>
          <div className="bewerben-ablauf">
          <div className="bewerben-ablauf--punkte">
            <h3 className="bewerben-ablauf--punkte--number">01</h3>
            <h3 className="bewerben-ablauf--punkt">2 Trainer:innen</h3>
          </div>
          <div className="bewerben-ablauf--punkte">
            <h3 className="bewerben-ablauf--punkte--number">02</h3>
            <h3 className="bewerben-ablauf--punkt">über 60% Praxis</h3>
          </div>
          <div className="bewerben-ablauf--punkte">
            <h3 className="bewerben-ablauf--punkte--number">03</h3>
            <h3 className="bewerben-ablauf--punkt">kleine Gruppen</h3>
          </div>
          <div className="bewerben-ablauf--punkte">
            <h3 className="bewerben-ablauf--punkte--number">04</h3>
            <h3 className="bewerben-ablauf--punkt">Online</h3>
          </div>
        </div>
        </div>
        
        <div className='gallery'>
          <img src='/img/warum-sc_01.png' alt='Teilnehmerin in Kursräumen' className='righttop' />
          <img src='/img/warum-sc_02.png' alt='Teilnehmerin in Kursräumen' className='rightcenter' />
          <img src='/img/warum-sc_03.png' alt='Teilnehmer:innen in Kursräumen' className='rightbottom' />
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
            #warum-sc {
                padding:100px 0 145px 10%;  
                background-color: #10375C;
                color: #fff;
            }
            .twocolumn {
              position: relative;
            }
            .bewerben-ablauf--punkte {
              // font-size: 2.3rem;
              font-size: clamp(1.25rem, 1.04rem + 1.05vw, 2.3rem);
              display: flex;
              gap: 2rem;
            }
            .bewerben-ablauf--punkte--number {
              color: #30E1B9;
              letter-spacing: 2px;
              color: transparent;
              -webkit-text-stroke-width: 1px;
              -webkit-text-stroke-color: #30E1B9;
            }
            .bewerben-ablauf--punkt {
              font-family: "Fira Sans_bold";
              letter-spacing: 2px;
              color: transparent;
              -webkit-text-stroke-width: 2px;
              -webkit-text-stroke-color: #fff;
            }
            h1{
                font-family: 'Fira Sans_extra_bold';
                line-height:0.8em;
                font-weight:900;
                margin-bottom: 6rem;
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
            .centercenter{
                position: absolute;
                left: 0;
                top: 0;
            }
            .righttop{
                position: absolute;
                right: 0;
                bottom: 40%;
                width: 13%;
            }
            .rightcenter{
                position: absolute;
                right: 25%;
                top: 15%;
                width: 25%;
            }
            .righttop,
            .rightbottom {
              border-top-right-radius: 0;
              border-bottom-right-radius: 0;
            }
            .rightbottom{
                position: absolute;
                right: 0%;
                bottom: -55%;
                width: 20%;
            }
            .leftbottom{
                position: absolute;
                left: 0;
                bottom: 0;

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
                display: none;
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
                .twocolumn{
                    grid-template-columns: 1fr;
                    gap: 3vh;
                    grid-template-rows: 1fr 40vh;
                    padding: 3%;
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
                h1 {
                  margin-bottom: 2rem;
                }
                .bewerben-ablauf--punkt,
                .bewerben-ablauf--punkte--number {
                  -webkit-text-stroke-width: unset;
                }
                .bewerben-ablauf--punkte--number {
                  color: #30E1B9;
                }
                .bewerben-ablauf--punkt {
                  color: #fff;
                }
                .twocolumn div:first-of-type {
                  width: 100%;
                }
              }
            `}</style>
    </div>
  );
};

export default WarumSC_neu;
