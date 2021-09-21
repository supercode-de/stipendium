import Link from 'next/link';

const Footer = (props) => {
  return (
    <footer id='footer'>
      <div className='copyright'>
        <div className='flex'>
          <p className='white'>
            <img src='/superdigital_logo.svg' alt='' />
          </p>
          <Link href='https://www.facebook.com/superdigitalev'>
            <a>
              <img src='/iconmonstr-facebook-5.svg' alt='' />
            </a>
          </Link>
          <Link href='https://www.instagram.com/superdigitalev/'>
            <a>
              <img src='/iconmonstr-instagram-11.svg' alt='' />
            </a>
          </Link>
          <Link href='https://www.linkedin.com/company/superdigitalev'>
            <a>
              <img src='/iconmonstr-linkedin-5.svg' alt='' />
            </a>
          </Link>
        </div>
        <div className='links'>
          <Link href='/impressum'>
            <a>Impressum</a>
          </Link>
          <Link href='/dsgvo'>
            <a>DSGVO</a>
          </Link>
        </div>
        <p className='year'>&copy; 2020</p>
      </div>
      <style jsx>
        {`
          .white img {
            width: 150px;
          }
          #footer {
            background: #070021;
            // background-image: linear-gradient(
            //     to right,
            //     rgba(255, 255, 255, 0.25) 0,
            //     rgba(255, 255, 255, 0.25) 1px,
            //     transparent 1px,
            //     transparent 100%
            //   ),
            //   linear-gradient(
            //     to bottom,
            //     rgba(255, 255, 255, 0.25) 0,
            //     rgba(255, 255, 255, 0.25) 1px,
            //     transparent 1px,
            //     transparent 100%
            //   );
            background-position: 0 0, 0 0;
            background-size: calc(100vw / 12) calc(100vw / 12);
            color: #fff;
            font-weight: 200;

            padding-top: 0.8em;
          }
          .flex {
            display: flex;
          }
          .flex img {
            height: 30px;
            padding-right: 10px;
          }
          .links {
            display: flex;
            justify-content: space-around;
          }
          .links a {
            font-family: 'Fira Sans_regular';
          }
          .year {
            font-family: 'Fira Sans_regular';
          }
          .link-container {
            display: flex;
            flex-direction: column;
            align-items: start;
          }
          a {
            text-decoration: none;
            display: block;
            padding: 0.5em 5px;
            color: #fff;
            font-family: 'Fira Sans_regular';
          }
          a:visited {
            color: #fff;
          }

          a:hover {
            text-decoration: underline;
            color: #3dd7ac;
          }
          a:active {
            color: #5d3ede;
          }
          .line-bottom {
            padding-bottom: 5px;
            border-bottom: 1px solid #3dd7ac;
            margin-bottom: 10px;
          }

          .copyright {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 95%;
            margin: 0 auto;
          }
          .white {
            color: #fff;
            font-weight: bold;
            font-size: 1.2em;
            margin-top: 4px;
          }
          @media (max-width: 768px) {
          }
          @media (max-width: 560px) {
            .copyright {
              display: block;
              text-align: center;
            }
            p {
              margin-bottom: 0;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
