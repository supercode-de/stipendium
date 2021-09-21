import Layout from "../component/Layout";
import ImpressumBody from "../component/ImpressumBody";
import ImpressumHeader from "../component/ImpressumHeader";
import Footer from "../component/Footer";

export default function Home(props) {
  return (
    <Layout banner={true}>
      <div className="container">
        <main>
          <ImpressumHeader />
          <ImpressumBody />
          <Footer />
        </main>
        <style jsx>{``}</style>
      </div>
    </Layout>
  );
}
