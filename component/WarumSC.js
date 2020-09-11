import React from "react";

const WarumSC = (props) => {
    return (
        <div id="warum-sc">
            <span className="aside">Warum supercode?</span>
            <div className="twocolumn">
                <div>
                    <h1>WARUM <span>SUPERCODE?</span></h1>
                    <p>
                        Egal ob du Quereinsteiger*in, Berufstätige*r, Alleinerziehend oder Studienabrecher*in bist: SuperCode bietet dir das Format, das dir am besten passt.
                    </p>
                    <p>
                        In 5 - 7 Monaten lernst du in Düsseldorf alles, was du für deinen Einstieg als Webdeveloper*in brauchst. HTML, CSS, Javascript und die Grundlagen der Webtechnologien.
                    </p>
                    <p>
                        Du lernst intensiv und schnell in Kursen mit einem hohen Praxisbezug, denn schon von Tag eins arbeitest du im Coworkingspace Super7000 an deinen Praxisprojekten.
                    </p>
                    <p>
                        Pro Tag sorgen zwei Trainern*innen wir für eine optimale und effektive Lernbegleitung um dich bestmöglich für einen reibungslosen Einstieg in den digitalen Arbeitsmarkt vorzubereiten.
                    </p>
                </div>
                <div>
                    <img src="/img/warumsc_bild1.png" alt="" className="centercenter" />
                    <img src="/img/warumsc_bild2.png" alt="" className="righttop" />
                    <img src="/img/warumsc_bild3.png" alt="" className="rightcenter" />
                    <img src="/img/warumsc_bild4.png" alt="" className="rightbottom" />
                </div>
                <img src="/img/warumsc_bild5.png" alt="" className="leftbottom" />
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
            }
            #warum-sc {
                font-family: 'Fira Mono', monospace;
                padding:100px 0 100px 10%;  
                position: relative;
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
            }
            .twocolumn{
                display:grid;
                grid-template-columns:50% 50%;
                padding-bottom:40px;
            }
            h1{
                font-family:"Neue_Machina_Regular_400";
                font-size:5em;
                line-height:1em;
                color: #fff;
                letter-spacing: 2px;
                font-weight:300;
                margin: .5em 0 .3em;
            }
            h1 span{
                color: transparent;
                -webkit-text-stroke-width: 3px;
                -webkit-text-stroke-color: #fff;
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
                width: 20vw;
            }
            .righttop{
                position: absolute;
                right: 5%;
                top: 0;
                transform: translateY(-30%);
                width: 20vw;
            }
            .rightcenter{
                position: absolute;
                right: 2%;
                top: 50%;
                transform: translateY(-50%);
                width: 15vw;
            }
            .rightbottom{
                position: absolute;
                right: 0;
                bottom: 0;
                transform: translateY(50%);
                width: 25vw;
            }
            .leftbottom{
                position: absolute;
                left: 0;
                bottom: 0;
                width: 20vw;
                transform: translateY(50%);
                z-index: 999;
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

export default WarumSC;
