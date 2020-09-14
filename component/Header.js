
import Arrow from "./small/Arrow";

const Header = (props) => {
  const pixelSize = 1; // Width of Lines in Background


  return (
    <div id="header">
      <span className="aside">lerne programmieren</span>
      <h1>
        <span>Super-Stipendium</span>
        <span>Super-Stipendium</span>
                Super-Stipendium
            </h1>
      <h3>Erhalte ein Super-Stipendium</h3>
      <h3>und lerne Programmieren!</h3>

      <p>Erfahre mehr</p>
      <Arrow />

      <style jsx>{`
            
        #header {
            background:url('/header.png') center/cover no-repeat;
            height:100vh;
            display:flex;
            justify-content:flex-end;
            align-items:center;
            flex-direction:column;
            position:relative;    
        }
        .aside {
            position: absolute;
            transform: rotate(-90deg);
            transform-origin: left;
            color:#fff;
            font-weight:300;
            left: 3%;
            top: 60%;
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 3px;
            text-transform: uppercase;

            color: #FFFFFF;
          }
        
        h1 {
          font-family: "Neue_Machina_Regular_400";
          margin: 0;
          padding-top: 16vh;
          font-size: 5em;
          letter-spacing: 2px;
          color: #fff;
          text-align: center;
          line-height:18px;
          font-weight:200;
        }
        
        h1 span:nth-of-type(1) {
          display: block;
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: #fff;
        }
        h1 span:nth-of-type(2) {
            display: block;
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 1.5px;
            -webkit-text-stroke-color: #fff;
          }
          h3{
            font-family: 'Fira Mono', monospace;
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 37px;
            color:#fff;
            margin:0;
            text-align:center;
        }
         h3:first-of-type{
             margin-top:100px
         }
         h3:last-of-type{
            margin-bottom:50px
        }
         p{
          font-family: 'Fira Mono', monospace;
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 3px;
            text-transform: uppercase;
            
            color: #FFFFFF;
         }
         @media (max-width: 1040px) {
                 
          h1{
              font-size:4em;
          }
    }
        @media (max-width: 768px) {
          
          h1 {
            
            font-size: 4em;
            line-height:32px;
          }
        }
        @media (max-width: 468px) {
          h3{
            font-size:2em;
            margin-bottom:0
          }
          h3:first-of-type{
            margin-top:20px
          }
          h3:last-of-type{
            margin-bottom:20px
        }
          h1 {
            font-size: 2.5em;
            line-height:20px;
            font-weight:500;
            margin-bottom:40px
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
