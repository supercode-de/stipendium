import Layout from '../component/Layout';
import Header_neu from '../component/Header_neu';
import JetztBewerbenBob from "../component/JetztBewerben_Bob"
import HtmlCssWtf_neu from '../component/HtmlCssWtf_neu';
import SuperStipendium_neu from '../component/SuperStipendium_neu';
import WarumWeb_neu from '../component/WarumWeb_neu';
import WarumSC_neu from '../component/WarumSC_neu';
import SupercodeUsp2_neu from '../component/SupercodeUsp2_neu';
import Partner_neu from '../component/Partner_neu';
import CTA4_neu from '../component/CTA4_neu';
import Footer from '../component/Footer';

export default function Home() {
  return (
    <Layout>
      <div className='container'>
        <main>
          <Header_neu />
          <JetztBewerbenBob />
          <HtmlCssWtf_neu />
          <SuperStipendium_neu />
          <WarumWeb_neu />
          <WarumSC_neu />
          <SupercodeUsp2_neu />
          <Partner_neu />
          <CTA4_neu />
          <Footer />
        </main>
      </div>
    </Layout>
  );

}
