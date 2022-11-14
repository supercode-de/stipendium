import Head from 'next/head';
import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return (
      <div id='super-layout'>
        <Head>
        <meta
            property='og:image:secure'
            content='https://www.super-stipendium.de/img/page-preview.png'
          />
          <meta
            property='og:image'
            content='http://www.super-stipendium.de/img/page-preview.png'
          />
          <meta property='og:url' content='https://www.super-stipendium.de' />
          <meta property='og:type' content='Website' />
          <meta
            property='og:title'
            content='super-stipendium.de - Programmieren lernen war noch nie digitaler.'
          />
          <title>Super-Stipendium</title>
          <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
          <link rel='alternate icon' href='/favicon.ico' />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5d3ede" />
          <meta name="theme-color" content="#5d3ede"></meta>
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
