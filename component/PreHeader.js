const PreHeader = () => {
    return (
        <section className="preHeader">
            <div>
                <p>EINE AKTION VON</p>
                <img src="/img/start-steps-logo.png" alt="startsteps logo" title="StartSteps Digital Education GmbH" className="noBorderRadius" />
                <img src="/img/Diginexus-signet.png" alt="diginexus logo" title="Diginexus GmbH" className="noBorderRadius" />
                <img src="/img/supercode-signet.png" alt="supercode logo" title="supercode GmbH" className="noBorderRadius" />
                <img src="/img/SuperDigital-signet.png" alt="super digital logo" title="SuperDigital e.V." className="noBorderRadius" />


            </div>
            <style jsx>{`
                .preHeader {
                    background: #121E28;
                    color: #fff;
                    padding: .5% 1%;

                }

                .preHeader div{
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    
                }

                .preHeader div p {
                    margin-right: 2%;
                    font-family: "Fira Sans_bold";
                    letter-spacing: 2px;
                    font-size: clamp(0.625rem, 0.4375rem + 0.9375vw, 1.5625rem);
                }

                @media(max-width: 1024px) {

                }
                @media (max-width: 768px) {

                }
                @media (max-width: 425px) {
                    .preHeader {
                        padding: 2%;
                    }
                    .preHeader div p {
                        margin-right: 5%;
                    }
                }
            `}</style>
        </section>
    );
}

export default PreHeader;