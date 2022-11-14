import Layout from '../component/Layout';
import Header_neu from '../component/Header_neu';
import JetztBewerben_Bob from '../component/JetztBewerben_Bob';
// import JetztBewerben_Emilija from '../component/JetztBewerben_Emilija';
import HtmlCssWtf_neu from '../component/HtmlCssWtf_neu';
import SuperStipendium_neu from '../component/SuperStipendium_neu';
import WarumWeb_neu from '../component/WarumWeb_neu';
import WarumSC_neu from '../component/WarumSC_neu';
import ShetaniEinsatz from '../component/ShetaniEinsatz';
// import SupercodeUsp2_neu from '../component/SupercodeUsp2_neu';
import Partner_neu from '../component/Partner_neu';
import CTA4_neu from '../component/CTA4_neu';
import Footer from '../component/Footer';

export default function Home() {
  return (
    <Layout>
      <div className='container'>
        <main>
          <Header_neu />
          <JetztBewerben_Bob />
          <HtmlCssWtf_neu />
          <SuperStipendium_neu />
          <WarumWeb_neu />
          <WarumSC_neu />
          <ShetaniEinsatz />
          {/* <SupercodeUsp2_neu /> */}
          <Partner_neu />
          <CTA4_neu />
          <Footer />
        </main>
      </div>
    </Layout>
  );

}
