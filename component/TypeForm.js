import Layout from '../component/Layout';
import Popup from 'reactjs-popup';

function gtag_report_conversion(url) {
  // var callback = function () {
  //   if (typeof url != "undefined") {
  //     window.location = url;
  //   }
  // };
  // console.log("object");
  // gtag("event", "conversion", {
  //   send_to: "AW-479170159/Zf_RCLDs3PMBEO-cvuQB",
  //   event_callback: callback,
  // });
  // return false;
}

const Typeform = (props) => {
  return (
    <Layout oneComponent={true}>
      <Popup trigger={<button>JETZT BEWERBEN</button>} position=' center'>
        <div id='typeform'>
          <iframe
            id='typeform-full'
            width='100%'
            height='100%'
            frameborder='0'
            allow='camera; microphone; autoplay; encrypted-media;'
            // src='https://form.typeform.com/to/B8pWRrmH?typeform-medium=embed-snippet'
            src='https://form.typeform.com/to/sCEWmkIE?typeform-medium=embed-snippet'
          ></iframe>
          <script
            type='text/javascript'
            src='https://embed.typeform.com/embed.js'
          ></script>
        </div>
      </Popup>
      <style jsx>{`
        #typeform {
          min-height: 100vh;
          color: #3dd7ac;
        }
        a {
          position: absolute;
          top: 50px;
          right: 50px;
          display: inline-block;
          width: 450px;
          height: 50px;
          overflow: hidden;
          transition: transform 0.5s linear;
          z-index: 500;
        }
        a::before,
        a::after {
          content: '';
          position: absolute;
          height: 4px;
          width: 100%;
          top: 50%;
          left: 0;
          margin-top: -1px;
          background: #fff;
        }
        a::before {
          transform: rotate(-45deg);
        }
        a::after {
          transform: rotate(45deg);
        }
        a:hover {
          transform: rotate(180deg);
        }
        button {
          position: relative;
          top: ${props.top};
          margin: 2em 1em;
          // font-family: 'Neue_Machina_Regular_400';
          font-family: 'Fira Sans_regular';
          font-style: normal;
          font-weight: normal;
          font-size: 0.6rem;
          line-height: 16px;
          text-align: center;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          padding: 18px 32px;
          background: transparent;
          border: 1px solid #fff;
          color: #fff;
          justify-self: center;
          display: inline-block;
          width: 200px;
        }
        button:hover {
          color: #5d3ede;
          background: #fff;
        }
        iframe {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0px;
          border: 0;
        }
        @media (max-width: 768px) {
          button {
            width: 380px;
          }
        }
        @media (max-width: 468px) {
          button {
            width: 250px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Typeform;
