import Layout from "../component/Layout";
import Header404 from "../component/Header404";
import Footer from "../component/Footer";

export default function Custom404() {

  return (
    <Layout>
      <div className="container">
        <main>
          <Header404 />
          <Footer />
        </main>

        <style jsx>{`
        `}</style>
      </div>
    </Layout>
  );
}

