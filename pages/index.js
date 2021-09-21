import Header_neu from '../component/Header_neu';
import Layout from '../component/Layout';
import JetztBewerben_neu from '../component/JetztBewerben_neu';
import Partner_neu from '../component/Partner_neu';
import SupercodeUsp2_neu from '../component/SupercodeUsp2_neu';
import Footer from '../component/Footer';
import WarumWeb_neu from '../component/WarumWeb_neu';
import CTA4_neu from '../component/CTA4_neu';
import SuperStipendium_neu from '../component/SuperStipendium_neu';
import HtmlCssWtf_neu from '../component/HtmlCssWtf_neu';
import WarumSC_neu from '../component/WarumSC_neu';

export default function Home(props) {
  return (
    <Layout>
      <div className='container'>
        <main>
          <Header_neu />
          <JetztBewerben_neu />
          <HtmlCssWtf_neu />
          <SuperStipendium_neu />
          <WarumWeb_neu />
          <WarumSC_neu />
          <SupercodeUsp2_neu />
          <Partner_neu />
          <CTA4_neu />
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
