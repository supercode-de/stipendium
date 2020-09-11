;
import Header from "../component/Header";
import { useWindowSize } from "../component/functions/windowSize";
import Layout from "../component/Layout";
import JetztBewerben from "../component/JetztBewerben";
import Partner from "../component/Partner";
import SupercodeUsp2 from "../component/supercodeUsp2";
import Footer from "../component/Footer";



export default function Home(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout >
        <div className="container">
          <main>
            <Header width={width} />
            <JetztBewerben width={width} />
            <Partner width={width} />
            <SupercodeUsp2 width={width} />
            <Footer width={width} />
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
