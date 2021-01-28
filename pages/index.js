import Header from "../component/Header";
import { useWindowSize } from "../component/functions/windowSize";
import Layout from "../component/Layout";
import JetztBewerben from "../component/JetztBewerben";
import Partner from "../component/Partner";
import SupercodeUsp2 from "../component/SupercodeUsp2";
import Footer from "../component/Footer";

import WarumWeb from "../component/WarumWeb";
import CTA4 from "../component/CTA4";
import SuperStipendium from "../component/SuperStipendium";
import HtmlCssWtf from "../component/HtmlCssWtf";
import WarumSC from "../component/WarumSC";
import Head from "next/head";

export default function Home(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout>
        <div className="container">
          <main>
            <Header width={width} />
            <JetztBewerben width={width} />
            <HtmlCssWtf width={width} />
            <SuperStipendium width={width} />
            <WarumWeb width={width} />
            <WarumSC width={width} />
            <SupercodeUsp2 width={width} />
            <Partner width={width} />
            <CTA4 width={width} />
            <Footer width={width} />
            {/* <JetztBewerben width={width} /> */}

            {/* <JetztBewerben width={width} /> */}

            {/* <JetztBewerben width={width} /> */}
            {/* <JetztBewerben width={width} />
            <JetztBewerben width={width} /> */}
          </main>
          <style jsx>{`
            main{
              position:relative;
              z-index:1
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
            background-size: ${width}px ${width}px;
            }
          `}</style>
        </div>
      </Layout>
    );
  } else {
    return (
      <Head>
        <meta
          property="og:image:secure"
          content="https://super-stipendium.de/img/page-preview.png"
        />
        <meta
          property="og:image"
          content="http://super-stipendium.de/img/page-preview.png"
        />
        <meta property="og:url" content="https://super-stipendium.de/" />
        <meta property="og:type" content="Website" />
        <meta
          property="og:title"
          content="super-stipendium.de - Digitale Bildung für Alle!"
        />
        <meta
          property="og:description"
          content="Das SuperStipendium ist deine Chance auf einen Karrierestart als Programmiererin! Bewirb dich noch heute!"
        />
        <title>Super-code</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
      </Head>
    );
  }
}
