import Header from "../component/Header";
import { useWindowSize } from "../component/functions/windowSize";
import Layout from "../component/Layout";
import JetztBewerben from "../component/JetztBewerben";
<<<<<<< HEAD
import Partner from "../component/Partner";
import SupercodeUsp2 from "../component/supercodeUsp2";
import Footer from "../component/Footer";

=======
import WarumWeb from "../component/WarumWeb";
import CTA4 from "../component/CTA4";
import SuperStipendium from "../component/SuperStipendium";
import HtmlCssWtf from "../component/HtmlCssWtf"
import WarumSC from "../component/WarumSC";
>>>>>>> f00bea064cee637d209b390072204a8c65e76dbd


export default function Home(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout >
        <div className="container">
          <main>
            <Header width={width} />
<<<<<<< HEAD
            <JetztBewerben width={width} />
            <Partner width={width} />
            <SupercodeUsp2 width={width} />
            <Footer width={width} />
=======
            {/* <JetztBewerben width={width} /> */}
            <WarumWeb width={width} />
            {/* <JetztBewerben width={width} /> */}
            <CTA4 width={width} />
            <HtmlCssWtf width={width} />
            <WarumSC width={width} />
            {/* <JetztBewerben width={width} /> */}
            {/* <JetztBewerben width={width} />
            <JetztBewerben width={width} /> */}
            <SuperStipendium width={width} />
>>>>>>> f00bea064cee637d209b390072204a8c65e76dbd
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
    return "";
  }
}
