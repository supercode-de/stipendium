const Header_graphicHL = () => {
  const pixelSize = 1; // Width of Lines in Background

  return (
    <div id='header'>
      <div className="graphical-headlines">
        <img src="/img/graphical-headlines-export.svg" alt="" className="noBorderRadius"/>
      </div>
      <style jsx>{`
        #header {
          background: url('/img/hero_4.png') top/cover no-repeat;
          height: 100vh;
          display: flex;
          justify-content: center;  
          align-items: center;
          padding: 0 5%;
        }
        img {
          width: 100%;
        }

        @media (max-width: 425px) {
          #header {
            height: 80vh;
          }
        }
      `}</style>
    </div>
  );
};

export default Header_graphicHL;
