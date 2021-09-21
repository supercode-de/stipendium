
import DsgvoHeader from "../component/DsgvoHeader";
import DsgvoBody from "../component/DsgvoBody";
import Layout from "../component/Layout";
import Footer from "../component/Footer";

export default function Home(props) {
  return (
    <Layout banner={true}>
      <div className="container">
        <main>
          <DsgvoHeader />
          <DsgvoBody />
          <Footer />
        </main>
        <style jsx>{``}</style>
      </div>
    </Layout>
  );
}
