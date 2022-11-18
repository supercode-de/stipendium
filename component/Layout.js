import Head from 'next/head';
import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return (
      <div id='super-layout'>
        <Head>
          <title>Super-Stipendium</title>
          <meta
            property="og:image:secure"
            content="https://super-stipendium.de/img/page-preview.png"
          />
          <meta
            property="og:image"
            content="http://super-stipendium.de/img/page-preview.png"
          />
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
            * {
              padding: 0;
              margin: 0;
              font-family: "Fira Sans_regular";
              box-sizing: border-box;
            }
            html {
              scroll-behavior: smooth;
            }  
            h1:not(.headerHeadline) {
              font-size: clamp(2.8125rem, 2.3125rem + 2.5vw, 5.3125rem);
            }
            p{
              font-size: clamp(1.125rem, 1.0375rem + 0.4375vw, 1.5625rem);
            }

            img:not(.uiuxheadline-graphic, .noBorderRadius) {
              border-radius: 50px;
            }

            @media (max-width: 425px) {
              img:not(.uiuxheadline-graphic, .noBorderRadius) {
                border-radius: 25px;
              }
              
            }
          `}</style>
      </div>
    );
  }
}

export default Layout;
