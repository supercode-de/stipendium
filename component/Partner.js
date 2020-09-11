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
        partialVisibilityGutter: 70
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        partialVisibilityGutter: 30

    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Partner = (props) => {
    return (
        <div id="Absolventen">
            <span className="aside">Unsere Partner</span>
            <h2>

                <img src="/image14.png" alt="" />
                <span>
                    unsere <br /> <span>Partner</span>
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
                            <img src="/Group25.svg" alt="" />
                            <figcaption>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
                                <button >DIGIHUB – LINKEDIN – Facebook  </button>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src="/Group25.svg" alt="" />
                            <figcaption>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
                                <button >DIGIHUB – LINKEDIN – Facebook  </button>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src="/Group25.svg" alt="" />
                            <figcaption>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
                                <button >DIGIHUB – LINKEDIN – Facebook  </button>

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
    
                color: #FFFFFF;
              }
        #Absolventen {
          padding: 10vh 9vw 20vh;
          background: #5d3ede;
          position:relative;
          background-image: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.25) 0,
            rgba(255, 255, 255, 0.25) 1px,
            transparent 1px,
            transparent 100%
          ),
          linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.25) 0,
            rgba(255, 255, 255, 0.25) 1px,
            transparent 1px,
            transparent 100%
          );
        background-position: 0 0, 0 0;
        background-size: ${props.width}px ${props.width}px;
        }
        .container {
          width: 100%;
          margin-left:auto
        }
        h2 {
          margin: 0;
          padding: 0 0 5vh 3%;
          color: #fff;
          font-size: 5em;
          border-bottom: 1px solid #5d3ede;
          position:relative;
          height:220px
          
        }
        h2 span {
            position:absolute;
            z-index:10
        }
        h2 span span{
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: #fff;
         
        }
        h2 img{
            position:absolute;
            max-width:50%;
            top:13%;
            left:60%;
            transform:translateX(-50%);
            max-height:550px
        }
        .Absolventen-list {
        }
        figure{
            border:2px solid #3dd7ac;
            padding:15px 40px ;
            background:#5d3ede
        }
        p {
          font-weight: 400;
          color:#fff
        }
       
        figure>img {
          width: 100px;
        }
        button{
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 3px;
            text-transform: uppercase;
            padding:10px 30px;
            background:transparent;
            border:1px solid #fff;
            color:#fff;
            justify-self:center
        }
        button:hover{
            color:#5d3ede;
            background:#fff;
        }
        @media (max-width: 1024px) {
            h2 img{
                position:absolute;
                max-width:80%;
                top:13%;
                left:60%;
                transform:translateX(-50%);
                max-height:550px
            }      
        }
      
        @media (max-width: 768px) {
            h2{
                height:150px
            }
          figure{
              padding:10px 10px
          }
         
        }
        @media (max-width: 568px) {
            h2 img{
                position:absolute;
                max-width:90%;
                top:13%;
                left:60%;
                transform:translateX(-50%);
                max-height:550px
            }    
        }
      `}</style>
        </div >
    );
};

export default Partner;