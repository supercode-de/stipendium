import Navigation from "./Navigation"

import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Head from 'next/head'
import JetztAnmdelden from "./JetztAnmelden"
import React, { Component } from 'react';


class Layout extends Component {
  state = {
    isHidden: true
  }
  toggleJetztAnmelden = () => {
    this.setState({ isHidden: !this.state.isHidden });
  }
  render() {
    return (
      <div id="super-layout">
        <Head>
          <title>Super-code</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {this.props.children}



        <style jsx global>{`
            @import url('https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700|Fira+Sans:100,200,300,400,500,600,700,800,900&display=swap');
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
              font-family: 'Fira Sans', sans-serif;
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
