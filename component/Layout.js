import Head from 'next/head';
import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return (
      <div id='super-layout'>
        <Head>
          <title>Super-Stipendium</title>
        </Head>
        {this.props.children}

        <style jsx global>{`
            @font-face {
              font-family: "Fira Sans_regular";
              src: url("/FiraSans-Regular.ttf");
            }
            @font-face {
              font-family: "Fira Sans_bold";
              src: url("/FiraSans-Bold.ttf");
            }
            @font-face {
              font-family: "Fira Sans_extra_bold";
              src: url("/FiraSans-ExtraBold.ttf");
            }

            html {
              scroll-behavior: smooth;
            }  
                  
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: "Fira Sans_regular";
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
