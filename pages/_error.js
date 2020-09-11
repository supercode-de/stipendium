import { useWindowSize } from "../component/functions/windowSize";
import Layout from "../component/Layout";
import Header404 from "../component/Header404";
import Footer from "../component/Footer";

export default function Custom404() {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout>
        <div className="container">
          <main>
            <Header404 width={width} />
            <Footer width={width} />
          </main>

          <style jsx>{``}</style>
        </div>
      </Layout>
    );
  } else {
    return <h1>404 - Page Not Found</h1>;
  }
}
