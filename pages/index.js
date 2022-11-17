import Layout from '../component/Layout';
import Header_neu from '../component/Header_neu';
import HtmlCssWtf_neu from '../component/HtmlCssWtf_neu';
import SuperStipendium_neu from '../component/SuperStipendium_neu';
import WarumWeb_neu from '../component/WarumWeb_neu';
import CTA4_neu from '../component/CTA4_neu';
import Footer from '../component/Footer';
import CTA4_uxui from '../component/CTA4_uxui';
import DiginexusEinsatz from '../component/DiginexusEinsatz';
import Partner_OhneCarousel from '../component/Partner_OhneCarousel';
import WoraufWartestDu from '../component/WoraufWartestDu';
import PreHeader from '../component/PreHeader';
import WarumSC_clean from '../component/WarumSC_clean';
export default function Home() {
  return (
    <Layout>
      <div className='container'>
        <main>
          <PreHeader />
          <Header_neu />
          <CTA4_uxui />
          <SuperStipendium_neu />
          <HtmlCssWtf_neu />
          <WoraufWartestDu />
          <WarumWeb_neu />
          <WarumSC_clean />
          <DiginexusEinsatz />
          <Partner_OhneCarousel />
          <CTA4_neu />
          <Footer />
        </main>
      </div>
    </Layout>
  );

}
