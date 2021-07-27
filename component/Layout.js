import Head from 'next/head';
import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return (
      <div id='super-layout'>
        <Head></Head>

        {this.props.children}

        <style jsx global>{`
            // @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200;300;400&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,200&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap');
            @font-face {
              font-family: "Neue_Machina_Regular_400";
              src: url("/Neue_Machina_Regular_400.otf");
            }
            html {
              scroll-behavior: smooth;
            }  
                  
            html,
            body {
              padding: 0;
              margin: 0;
              // font-family: "Neue_Machina_Regular_400";
              font-family: "Fira Sans";
            }
            * {
              box-sizing: border-box;
            }
            // Styling Carousel Blog Start
            #blog .react-multiple-carousel__arrow {
              background: none;
              top: -1px;
            }
            #blog .react-multiple-carousel__arrow--right {
              right: 8%;
              left: auto;
            }
            #blog .react-multiple-carousel__arrow--left {
              right 10%;
              left: auto;
            }
            .popup-content{
              position:fixed !important;
              top:5%  !important;
              right:0 !important;
              left:10% !important;
              bottom:5% !important;
              width:80% !important;
              height:90% !important;
              z-index:10000 !important;
            }
            // Styling Carousel Blog End
            @media (max-width: 768px) {
              body {
                font-size: 10px;
              }
            }
           `}</style>
      </div>
    );
  }
}

export default Layout;
