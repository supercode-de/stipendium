

import { useWindowSize } from "../component/functions/windowSize";
import Layout from "../component/Layout";
import ImpressumBody from "../component/ImpressumBody";
import ImpressumHeader from "../component/ImpressumHeader";
import Footer from "../component/Footer";

export default function Home(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className="container">
          <main>
            <ImpressumHeader width={width} />
            <ImpressumBody width={width} />
            <Footer width={width} />
          </main>
          <style jsx>{``}</style>
        </div>
      </Layout>
    );
  } else {
    return "";
  }
}
