;
import Header from "../component/Header";
import { useWindowSize } from "../components/functions/windowSize";
import Layout from "../components/Layout";
import JetztBewerben from "../component/JetztBewerben";
import SuperStipendium from "../component/SuperStipendium";


export default function Home(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className="container">
          <main>
            <Header width={width} />
            {/* <JetztBewerben width={width} />
            <JetztBewerben width={width} /> */}
            <SuperStipendium width={width} />
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
