import Popup from "reactjs-popup";
const Typeform_neu2022 = (props) => {
  return (
    <>
      <Popup trigger={<button>JETZT BEWERBEN</button>} position="center">
        <div id="typeform">
          <iframe
            src="https://form.typeform.com/to/sCEWmkIE?typeform-medium=embed-snippet"
            frameborder="0"
            id="typeform-full"
            width="100%"
            height="100%"
            allow="camera; microphone; autoplay; encrypted-media;"></iframe>
          {/* <button data-tf-slider="L6u0np35" data-tf-width="550" data-tf-iframe-props="title=Coding" data-tf-medium="snippet" className="typeform-form">JETZT BEWERBEN 2</button> */}
          <script src="https://embed.typeform.com/embed.js"></script>
        </div>
      </Popup>
      <style jsx>{`
        #typeform {
          position: fixed;
          top: 10%;
          left: 10%;
          width: 80%;
          height: 80vh;
          color: #3dd7ac;
          background-color: #121E28;
          z-index: 9;
        }

        button {
          // margin: 2em 1em;
          font-size: 0.6rem;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          padding: 18px 32px;
          background: transparent;
          border: 2px solid #fff;
          color: #fff;
          justify-self: center;
          display: inline-block;
          // width: 38.75em;
          outline: none;
        }
        button:hover {
          color: #5d3ede;
          background: #fff;
        }

      `}</style>
    </>
  );
};

export default Typeform_neu2022;
