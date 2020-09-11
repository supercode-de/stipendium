import React from "react";

const HtmlCssWtf = (props) => {
    return (
        <div id="html-css-wtf">
            <div className="asidebg">
                <span className="aside">Arbeitsplatz der Zukunft</span>
            </div>
            <div className="twocolumn">
                <div>
                    <h1>HTML, CSS, WTF?!</h1>
                    <p>
                        Digitale Skills waren noch <span>nie wichtiger</span> – vor allem die Fähigkeit programmieren zu können ist gefragter denn je und ermöglicht den Zugang zu vielen tollen Jobs! Laut Bitkom sind in allein in Deutschland über <span>124.000</span> Stellen für IT-Expert*innen nicht besetzt – und die Zahl wird immer <span>größer.</span>
                    </p>
                    <p>
                        Metro, IBM, Vodafone, Trivago – der Düsseldorfer IT-Markt boomt! Das Super Stipendium ist dein Türöffner in den digitalen Arbeitsmarkt der <span>Zukunft!</span>
                    </p>
                </div>
                <div>
                    <img src="/img/htmlcsswtf_bild2.png" alt="" />
                    <img src="/img/htmlcsswtf_bild3.png" alt="" />
                    <img src="/img/htmlcsswtf_bild4.png" alt="" />
                    <img src="/img/htmlcsswtf_bild5.png" alt="" />
                </div>
            </div>
            <style jsx>{`
            .aside {
                transform: rotate(-90deg);
                color:#fff;
                font-weight:300;
                font-family: 'Poppins', sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 18px;
                letter-spacing: 3px;
                text-transform: uppercase;
                white-space: nowrap;
            }
            .asidebg{
                position: absolute;
                background: url('/img/htmlcsswtf_bild1.png') center/contain no-repeat;
                top: 50%;
                left: 0;
                width: 3vw;
                min-width: 30px;
                height: 80vh;
                transform: translateY(-50%);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9;
            }
            #html-css-wtf {
                font-family: 'Fira Mono', monospace;

                overflow: hidden;
                padding:100px 0 100px 10%;  
                position: relative;
                background-color: #070021;
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
                grid-template-columns:40% 60%;
                padding-bottom:40px;
            }
            h1{
                font-family:"Neue_Machina_Regular_400";
                font-size:5em;
                line-height:1em;
                max-width: 300px;
                color: transparent;
                letter-spacing: 2px;
                -webkit-text-stroke-width: 3px;
                -webkit-text-stroke-color: #fff;
                font-weight:300;
                margin: .5em 0 .3em;
            }
            .twocolumn div:first-of-type{
                color: #fff;
                line-height: 1.5em;
                width: 90%;
                max-width: 400px;
                z-index: 99;
            }
            .twocolumn div:first-of-type p:first-of-type span:nth-of-type(1){
                background: url(/img/htmlcsswtf_line1.svg) center bottom/100% no-repeat;
            }
            .twocolumn div:first-of-type p:first-of-type span:nth-of-type(2){
                display: inline-block;
                width: 4em;
                height: 1.6em;
                background: url(/img/htmlcsswtf_line2.svg) center/contain no-repeat;
            }
            .twocolumn div:first-of-type p:first-of-type span:nth-of-type(3){
                display: inline-block;
                width: 4em;
                height: 1.6em;
                background: url(/img/htmlcsswtf_line3.svg) center/100% no-repeat;
            }
            .twocolumn div:first-of-type p:last-of-type span{
                display: inline-block;
                width: 5em;
                background: url(/img/htmlcsswtf_line4.svg) center bottom/contain no-repeat;
            }
            .twocolumn div:first-of-type p:last-of-type{
                width:70%;
            }
            .twocolumn div:last-of-type{
                display: grid;
                grid-template-columns: 1fr 1fr;
            }
            .twocolumn div:last-of-type img:nth-of-type(1){
                width: 50%;
                transform: translate(5vw, 3vh);
            }
            .twocolumn div:last-of-type img:nth-of-type(2){
                width: 60%;
                transform: translate(1vw, 4vh);
            }
            .twocolumn div:last-of-type img:nth-of-type(3){
                width: 80%;
                transform: translate(-4vw, 5vh);
            }
            .twocolumn div:last-of-type img:nth-of-type(4){
                width: 100%;
                transform: scale(1.2, 1.2) translate(0vw, -2vw);
            }
            @media (max-width: 768px) {
                .twocolumn{
                    display: block;
                }
                .twocolumn div:last-of-type{
                    width: 80%;
                }
              }
              @media (max-width: 468px) {
                
              }
            `}</style>
        </div>
    );
};

export default HtmlCssWtf;
