import Header from "../component/Header";
import Layout from "../component/Layout";
import JetztBewerben from "../component/JetztBewerben";
import SupercodeUsp2 from "../component/SupercodeUsp2";
import Footer from "../component/Footer";
import WarumWeb from "../component/WarumWeb";
import CTA4 from "../component/CTA4";
import SuperStipendium from "../component/SuperStipendium";
import HtmlCssWtf from "../component/HtmlCssWtf";




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
          <SupercodeUsp2 />
          <CTA4 />
          <Footer />
        </main>
      </div>
    </Layout>
  );

}
