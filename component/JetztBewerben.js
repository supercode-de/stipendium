import React, { useState, useEffect } from "react";
import Typeform from "./TypeForm";


const JetztBewerben = (props) => {
    return (

        <div id="unser-campus">
            <span className="aside" > Bewirb dich jetzt! </span>

            <div className="twocolumn" >
                <div className="onecolumn" >
                    <h1> Du willst < br /> < span > programmieren </span> lernen <br /> und einen Job mit < br /> Zukunft ? Das < span className="super" > Super - < br /> Stipendium </span> ist deine <br /> <span> Chance! </span></h1>
                    <p > Worauf wartest Du noch ? < br />
        Bewirb dich jetzt und mit etwas Glück  wirst du Germany’ s Next SuperCoder * in ! </p>
                    <div className="center" >
                        <Typeform />
                    </div >
                </div>
                <img src="/jetztbewerben.png"
                    alt="" />
            </div>

            <style jsx > {`
            .center{
                text-align:center
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
        #unser-campus {
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
            grid-template-columns:60% 40%;
            padding-bottom:40px;
            margin-bottom:100px
        }
         .onecolumn{
            display:grid;
            grid-template-columns:1fr;
            
        }
        .twocolumn>img{
            width:100%;
            align-self:center
        }
         h1{
            font-family:"Neue_Machina_Regular_400";
            font-size:3em;
            color:#fff;
            line-height:60px
        }
         h1 span.super{
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: #fff;
            font-weight:300;
        }
         h1 span:first-of-type,h1 span:last-of-type{
            position:relative
        }
         h1 span:first-of-type::after{
            position:absolute;
            background:url('/vector41.svg') center/cover no-repeat;
            height:2px;
            width:70%;
            right:0;
            bottom:4px;
            content:'';
            display:block;
        }
         h1 span:first-of-type::before{
            position:absolute;
            background:url('/Vector41.svg') center/cover no-repeat;
            height:2px;
            width:50%;
            right:0;
            bottom:0px;
            content:'';
            display:block;
            transform:rotate(0.5deg)
        }
         h1 span:last-of-type::after{
            position:absolute;
            background:url('/Vector43.svg') center/cover no-repeat;
            height:160%;
            width:100%;
            right:0;
            bottom:-10px;
            content:'';
            display:block;
        }
        p{
            color:#fff;
            font-family: 'Fira Sans', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 1.5em;
            line-height: 30px;
            justify-self:center;
            max-width:620px
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

        
        @media (max-width: 1040px) {
            h1{
                font-size:2em;
                line-height:40px
            }
            .twocolumn{
                grid-template-columns:1fr;
                margin-bottom:40px   
            }
            .twocolumn>img{
                width:60%;
                align-self:center;
                justify-self:center
            }
        }
        @media (max-width: 768px) {     
            #unser-campus{
                padding:100px 6%
            }  
            h1{
                font-size:3em;
            }
            p{
                font-size:2em;
                margin-bottom:50px
            }
            .twocolumn{
                grid-template-columns:1fr;
                
            }
            .twocolumn>img{
                width:80%;
                align-self:center;
                justify-self:center
            }
        }
        @media (max-width: 468px) { 
            #unser-campus{
                padding:100px 30px
            }       
            h1{
                font-size:2em;
                
            }
            p{
                font-size:1.3em
            }
            .twocolumn{
                grid-template-columns:1fr;
                margin-bottom:10px;
            }
            .twocolumn>img{
                width:100%;
                align-self:center;
                justify-self:center
            }
        }
    ` } </style>
        </div >
    );
};

export default JetztBewerben;