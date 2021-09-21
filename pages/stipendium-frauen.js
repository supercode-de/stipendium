import Header from "../component/Header";
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



export default function Home() {

  return (
    <Layout>
      <div className="container">
        <main>
          <Header />
          <JetztBewerben />
          <HtmlCssWtf />
          <SuperStipendium />
          <WarumWeb />
          <WarumSC />
          <SupercodeUsp2 />
          <Partner />
          <CTA4 />
          <Footer />
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
            background-size: calc(100vw / 12) calc(100vw / 12);
            }
          `}</style>
      </div>
    </Layout>
  );

}
