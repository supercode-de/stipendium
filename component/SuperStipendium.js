import Carousel from "react-multi-carousel";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 479 },
        items: 1

    },
    mobile: {
        breakpoint: { max: 479, min: 0 },
        items: 1
    },
};


const SuperStipendium = (props) => {
    return (

        <div id="super-stipendium">

            <span className="aside">Arbeitsplatz der Zukunft</span>
            <img src="/img/bgLine.png" alt="" className="bg-line" />
            <article className="stipendium-left">
                <h1>Das <br /><span className="super">Super-<span className="break"></span>Stipendium</span></h1>
                <h4>Das DigiHub und der StartupDorf eV aka. die beiden wichtigsten digitalen Matchmaker Düsseldorfs ermöglichen dir ein <span className="square">Stipendium</span> der Landeshauptstadt bei SuperCode und damit die Teilnahme an einem der <span className="line2"><span className="line">zertifizirten</span></span> Vollzeit- oder Teilzeitbootcamps im Bereich Web-Entwicklung. Bewirb dich jetzt bis zum <span className="circle">10.10.2020</span> und mit etwas Glück erhälst DU ein Stipendium für einen dieser zwei Kurse. <br /><br /> Der Prozess: <br /> 1 Bis zum 10.10.2020 bewerben und Fragen beantworten. <br /> 2 Workshop - Teilnahme. <br /> 3 persönliches Gespräch. <br /><br /> ...und mit etwas Glück bist du der oder die Glückliche die eines der beiden Stipendia erhält!</h4>
            </article>
            <article className="stipendium-right">
                <div className="stipendium-box1 hide">
                    <h5>Web-Developer Full-Stack <br /> Umfang: 22 Wochen / Vollzeit <br /> Start: xx.xx.xxxx Ende: xx.xx.xxxx</h5>
                    <p>Unser Full-Stack-Kurs ermöglicht dir einen Deep Dive in die Web-Entwicklung verpackt in einem ultra praxisorientierten Intensiv-Kurs. Lerne das Programmieren moderner Websites & Apps und finde einen Job mit Zukunft.</p>
                    <h5>Inhalte:</h5>
                    <p>Front-End: Essentials, HTML, CSS, GIT, Terminal, Javascript, Javascript Frameworks und Libraries, CMS <br /><br />Back-End: Essentials, Node.js, Express.js, npm, API & Datenbanken <br /><br />Plus Skills: Grundlagen Projekt Management & Präsentation, Design & UX, Learn-To-Learn, Bewerbungscoaching, Abschlussprojekt.</p>
                    <h5>Trainer*innen:</h5>
                    <p>2 Trainer*innen pro Tag</p>
                    <h5>Umfang:</h5>
                    <p>_22 Wochen Vollzeit <br />_Montag bis Freitag <br />_09:00 - 18:00 Uhr</p>
                </div>
                <div className="stipendium-box2 hide">
                    <h5>Web-Developer Front-End<br /> Umfang: 30 Wochen / Teilzeit <br /> Start: xx.xx.xxxx Ende: xx.xx.xxxx</h5>
                    <p>Programmieren lernen neben dem Beruf? <br /> Kein Problem! Unser Front-End Kurs findet abends und online statt! In 30 Wochen lernst du das Programmieren moderner Websites & Apps.</p>
                    <h6>Inhalte:</h6>
                    <p>Front-End: Essentials, HTML, CSS, GIT, Terminal, Javascript, Javascript Frameworks und Libraries, CMS <br /><br />Plus Skills: Grundlagen Projekt Management & Präsentation, Design & UX, Learn-To-Learn, Bewerbungscoaching, Abschlussprojekt.</p>
                    <h6>Trainer*innen:</h6>
                    <p>2 Trainer*innen pro Tag</p>
                    <h6>Umfang:</h6>
                    <p>_30 Wochen Teilzeit <br />_3 Abende und jeden 2. Samstag <br />_In der Woche: 18:00 - 21:00 Uhr <br />_Samstags: 09:00 - 18:00 Uhr</p>
                </div>
                <div id="myCarousel">
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
                        <div className="stipendium-box1">
                            <h5>Web-Developer Full-Stack <br /> Umfang: 22 Wochen / Vollzeit <br /> Start: xx.xx.xxxx Ende: xx.xx.xxxx</h5>
                            <p>Unser Full-Stack-Kurs ermöglicht dir einen Deep Dive in die Web-Entwicklung verpackt in einem ultra praxisorientierten Intensiv-Kurs. Lerne das Programmieren moderner Websites & Apps und finde einen Job mit Zukunft.</p>
                            <h5>Inhalte:</h5>
                            <p>Front-End: Essentials, HTML, CSS, GIT, Terminal, Javascript, Javascript Frameworks und Libraries, CMS <br /><br />Back-End: Essentials, Node.js, Express.js, npm, API & Datenbanken <br /><br />Plus Skills: Grundlagen Projekt Management & Präsentation, Design & UX, Learn-To-Learn, Bewerbungscoaching, Abschlussprojekt.</p>
                            <h5>Trainer*innen:</h5>
                            <p>2 Trainer*innen pro Tag</p>
                            <h5>Umfang:</h5>
                            <p>_22 Wochen Vollzeit <br />_Montag bis Freitag <br />_09:00 - 18:00 Uhr</p>
                        </div>
                        <div className="stipendium-box2">
                            <h5>Web-Developer Front-End<br /> Umfang: 30 Wochen / Teilzeit <br /> Start: xx.xx.xxxx Ende: xx.xx.xxxx</h5>
                            <p>Programmieren lernen neben dem Beruf? <br /> Kein Problem! Unser Front-End Kurs findet abends und online statt! In 30 Wochen lernst du das Programmieren moderner Websites & Apps.</p>
                            <h6>Inhalte:</h6>
                            <p>Front-End: Essentials, HTML, CSS, GIT, Terminal, Javascript, Javascript Frameworks und Libraries, CMS <br /><br />Plus Skills: Grundlagen Projekt Management & Präsentation, Design & UX, Learn-To-Learn, Bewerbungscoaching, Abschlussprojekt.</p>
                            <h6>Trainer*innen:</h6>
                            <p>2 Trainer*innen pro Tag</p>
                            <h6>Umfang:</h6>
                            <p>_30 Wochen Teilzeit <br />_3 Abende und jeden 2. Samstag <br />_In der Woche: 18:00 - 21:00 Uhr <br />_Samstags: 09:00 - 18:00 Uhr</p>
                        </div>
                    </Carousel>
                </div>
            </article>

            <style jsx>{`
            *{
                margin: 0;
                padding: 0;
            }
            #myCarousel{
                display:none;
                position:relative;
                z-index:30;
            }
            #super-stipendium{
                display: flex;
                background-color: #5D3EDE;
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
                z-index:-2;
                overflow: hidden;
                padding:100px 0
            }
            .bg-line{
                position: absolute;
                z-index: -1;
                width: 100%;
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
                color: #FFFFFF;
            }
            .stipendium-left{
                padding: 10vh 4% 8vh 8.5%;
                width: 50%;
            }
            h1{
                font-family:"Neue_Machina_Regular_400";
                font-size:4em;
                color:#fff;
                line-height:60px;
                margin: 0 0 3vh;
                text-transform: uppercase;
                font-weight: 300;
            }
            .break{
                display: block;
            }
            h1 span.super{
                color: transparent;
                letter-spacing: 2px;
                -webkit-text-stroke-width: 2px;
                -webkit-text-stroke-color: #fff;
                font-weight:300;
            }
            .square, .line, .line2, .circle{
                position: relative;
            }
            .square::after{
                position:absolute;
                background:url('/Vector51.svg') center/cover no-repeat;
                height:109%;
                width:110%;
                right:-19px;
                bottom:0;
                content:'';
                display:block;
            }
            .line::after{
                position:absolute;
                background:url('/Vector52.svg') center/cover no-repeat;
                height:2px;
                width:110%;
                right:-19px;
                bottom:0;
                content:'';
                display:block;
            }
            .line2::after{
                position:absolute;
                background:url('/Vector53.svg') center/cover no-repeat;
                height:2px;
                width:50%;
                right: -5px;
                bottom:-3px;
                content:'';
                display:block;
            }
            .circle::after{
                position:absolute;
                background:url('/Vector54.svg') center/cover no-repeat;
                height: 100%;
                width: 110%;
                right: -14px;
                bottom: 0;
                content:'';
                display:block;
            }
            h4{
                color:#fff;
                font-family: 'Fira Mono', monospace;
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 25px;
                justify-self:center
            }
            .stipendium-right{
                width: 50%;
                display: flex;
                align-items: center;
                padding: 9vh 3% 4vh 0;
            }
            .stipendium-box1{
                background: #5D3EDE;
                border: 2px solid #30E1B9;
                padding: 2vh 4% 0 2%;
                width: 50%;
                height: 100%;
                
            }
            .stipendium-box2{
                width: 50%;
                padding: 2vh 4% 0 2%;
                background: #5D3EDE;
                border: 2px solid #30E1B9;
                border-left: none;
                height: 92%;
            }
            h5{
                font-family:"Neue_Machina_Regular_400";
                color: #ffffff;
                opacity: .7;
                font-size: 16px;
                line-height: 18px;
            }
            h5:nth-of-type(1){
                margin-bottom: 14px;
            }
            p{
                font-family: 'Fira Mono', monospace;
                color: #ffffff;
                font-size: 14px;
                margin-bottom: 25px;
                line-height: 20px;
            }
            h6{
                font-family:"Neue_Machina_Regular_400";
                color: #ffffff;
                font-size: 16px;
                line-height: 18px;
                font-weight: 600;
            }
            @media only screen and (min-width: 300px) and (max-width: 479px) {
                #myCarousel{
                    display:block
                }
                .hide{
                    display:none;
                }
                #super-stipendium{
                    display: block;
                    padding-bottom: 2vh;
                }
                .stipendium-left{
                    width: 100%;
                    
                }
                .stipendium-right{
                    display: block;
                    width: 100%;
                    padding: 0 2% 0 6%;
                }
                #myCarousel .stipendium-box1{
                    width: 100%;
                }
                #myCarousel .stipendium-box2{
                    width: 100%;
                    border: 2px solid #30E1B9;
                    border-top: none;
                }
                }
            @media only screen and (min-width: 480px) and (max-width: 767px) {
                .myCarousel{
                    display:none !important;
                    position:relative;
                    z-index:30;
                }
                .hide{
                    display:block;
                }
                #super-stipendium{
                    display: block;
                    padding-bottom: 2vh;
                }
                .stipendium-left{
                    width: 100%;
                }
                .break{
                    display: inline;
                }
                .stipendium-right{
                    width: 100%;
                    padding: 0 2% 0 6%;
                }
            }
            @media only screen and (min-width: 768px) and (max-width: 979px) {
                #super-stipendium{
                    display: block;
                    padding-bottom: 2vh;
                }
                .stipendium-left{
                    width: 100%;
                }
                .break{
                    display: inline;
                }
                .stipendium-right{
                    width: 100%;
                    padding: 0 2% 0 6%;
                }
            }
            @media only screen and (min-width: 980px) and (max-width: 1023px) {
                #super-stipendium{
                    display: block;
                    padding-bottom: 2vh;
                }
                .stipendium-left{
                    width: 100%;
                }
                .break{
                    display: inline;
                }
                .stipendium-right{
                    width: 100%;
                    padding: 0 2% 0 6%;
                }
            }
        @media only screen and (min-width: 1024px) and (max-width: 1199px) {
            #super-stipendium{
                display: block;
                padding-bottom: 2vh;
            }
            .stipendium-left{
                width: 100%;
            }
            .break{
                display: inline;
            }
            .stipendium-right{
                width: 100%;
                padding: 0 2% 0 6%;
            }
        }
        `}</style>
        </div>
    );
};

export default SuperStipendium;