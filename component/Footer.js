import Link from 'next/link'

const Footer = (props) => {
    return (
        <footer id="footer">
            <div className="links">
                <Link href="/impressum"><a>Impressum</a></Link>
                <Link href="/dsgvo"><a>DSGVO</a></Link>
            </div>
            <div className="copyright">
                <p className="white"><img src="/superdigital_logo.svg" alt="" /></p>
                <p>&copy; 2020</p>
            </div>
            <style jsx>{`
            img{
                width:150px
            }
            #footer {
                background: #070021;
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
                background-size: ${props.width}px ${props.width}px;
                color: #fff;
                font-weight: 200;
                padding-top: .8em;
            }
            .links {
                display: flex;
                justify-content: space-around;
            }
            .link-container {
                display: flex;
                flex-direction: column;
                align-items: start;
            }
            a {
                text-decoration: none;
                display: block;
                padding: .5em 0;
                color: #fff;
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
                border-bottom: 1px solid #3DD7AC;
                margin-bottom: 10px;
            }
            .footer-grid {
                width: 80%;
                margin: 0 auto;
                display: grid;
                grid-template-columns: repeat(5, 1fr);
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
                font-size: 1.2em
            }
            @media (max-width: 768px) {
                .footer-grid {
                    grid-template-columns: repeat(2, 1fr);
                }
            }
            @media (max-width: 480px) {
                .footer-grid {
                    display: block;
                }
            }

            `}
            </style>
        </footer>
    );
}

export default Footer;