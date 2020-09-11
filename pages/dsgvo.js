
import DsgvoHeader from "../component/DsgvoHeader";
import DsgvoBody from "../component/DsgvoBody";
import { useWindowSize } from "../component/functions/windowSize";
import Layout from "../component/Layout";
import Footer from "../component/Footer";

export default function Home(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className="container">
          <main>
            <DsgvoHeader width={width} />
            <DsgvoBody width={width} />
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
