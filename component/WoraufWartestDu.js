import TypeForm from './TypeForm';
import Carousel from 'react-multi-carousel';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        partialVisibilityGutter: 70,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        partialVisibilityGutter: 0,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
const WoraufWartestDu = () => {
    return (
        <section className="worauf-wartest-du">
            <section>
                <h1>Worauf wartest <br /> <span>du</span> noch?</h1>
                <section className="grid--container">
                    <article>
                        <p>
                            Bewirb dich jetzt und mit etwas Glück
                        </p>
                        <p className="lines">
                            startest du bald deine UX/UI-Karriere!
                        </p>
                        <div className='buttoncolumn'>
                            <TypeForm />
                        </div>
                    </article>
                    <article className="alumniCard--container">
                        <div className="alumniCard">
                            <div className="alumniCard--header">
                                <img src="/img/alumniCard2.png" alt="Bob Boost, Alumni vom Design Kurs" />
                                <div className="alumniCard--header-names">
                                    <h5>Bob</h5>
                                    <h5>Boost</h5>
                                    <p>Bootcamp Absolvent</p>
                                </div>
                            </div>
                            <p>“Im Bootcamp habe ich nicht nur viel über die Gestaltung, Technik und Psychologie von Digitalprodukten gelernt, sondern konnte das neue Wissen auch direkt praktisch anwenden. Das Team und die Gruppe waren super motivierend und ich habe mich jeden Tag auf den Kurs gefreut!”</p>
                        </div>
                        <div className="alumniCard">
                            <div className="alumniCard--header">
                                <img src="/img/alumniCard1.png" alt="Bob Boost, Alumni vom Design Kurs" />
                                <div className="alumniCard--header-names">
                                    <h5>Ann-Christin</h5>
                                    <h5>Büscher</h5>
                                    <p>Bootcamp Absolventin</p>
                                </div>
                            </div>
                            <p>“Der UX/UI-Kurs mit Kimberly & Ruben hat mir super viel Spaß gemacht. Die Doppelcombo aus Theorie & Praxis macht es einfach, schnell in die Thematik rein zu kommen. Den Karrierewechsel kann ich allen nur  empfehlen, also ab zu den Kursangeboten und meldet euch an!“</p>
                        </div>
                    </article>


                </section>
                <section id="carousel">
                    <Carousel
                        responsive={responsive}
                        ssr
                        showDots={false}
                        slidesToSlide={1}
                        infinite
                        containerClass='container-with-dots'
                        deviceType={''}
                        itemClass='carousel-item-padding-20-px'
                    >
                        <div className="alumniCard">
                            <div className="alumniCard--header">
                                <img src="/img/alumniCard2.png" alt="Bob Boost, Alumni vom Design Kurs" />
                                <div className="alumniCard--header-names">
                                    <h5>Bob</h5>
                                    <h5>Boost</h5>
                                    <p>Bootcamp Absolvent</p>
                                </div>
                            </div>
                            <p>“Im Bootcamp habe ich nicht nur viel über die Gestaltung, Technik und Psychologie von Digitalprodukten gelernt, sondern konnte das neue Wissen auch direkt praktisch anwenden. Das Team und die Gruppe waren super motivierend und ich habe mich jeden Tag auf den Kurs gefreut!”</p>
                        </div>
                        <div className="alumniCard">
                            <div className="alumniCard--header">
                                <img src="/img/alumniCard1.png" alt="Bob Boost, Alumni vom Design Kurs" />
                                <div className="alumniCard--header-names">
                                    <h5>Ann-Christin</h5>
                                    <h5>Büscher</h5>
                                    <p>Bootcamp Absolventin</p>
                                </div>
                            </div>
                            <p>“Der UX/UI-Kurs mit Kimberly & Ruben hat mir super viel Spaß gemacht. Die Doppelcombo aus Theorie & Praxis macht es einfach, schnell in die Thematik rein zu kommen. Den Karrierewechsel kann ich allen nur  empfehlen, also ab zu den Kursangeboten und meldet euch an!“</p>
                        </div>
                    </Carousel>
                </section>
            </section>
            <style jsx>{`
                .worauf-wartest-du {
                    background: #10375C;
                    color: #fff;
                    padding: 100px 8.5%;
                }
                #carousel {
                    display: none;
                }
                .grid--container {
                    display: flex;
                }
                .alumniCard--container {
                    display: flex;
                    gap: 3rem;
                }
                h1,
                h1 span {
                    font-family: "Fira Sans_extra_bold";
                }
                h1 span {
                    color: transparent;
                    letter-spacing: 2px;
                    -webkit-text-stroke-width: 2px;
                    -webkit-text-stroke-color: #fff;
                    font-weight: 900;
                }
                .lines {
                    position: relative;
                    margin-bottom: 2rem;
                }
                .lines::after {
                    content: "";
                    position: absolute;
                    background: url('/lines.svg') center/cover no-repeat;
                    bottom: -16%;
                    height: 30%;
                    width: 61%;
                    display: block;
                }
                article {
                    margin-top: 10%;
                    width: 50%;
                }
                .alumniCard {
                    background: #fff;
                    border-radius: 20px;
                    color: #10375C;
                    padding: 1.875rem;
                }
                .alumniCard--header + p {
                    margin-top: 2rem;
                }
                .alumniCard p,
                .alumniCard--header-names p {
                    font-size: 1rem;
                }
                .alumniCard--header-names h5 {
                    font-size: 1.25rem;
                    font-family: "Fira Sans_bold";
                }
                .alumniCard--header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                @media (max-width: 1024px){
                    .grid--container{
                        display: block;
                    }
                    article {
                        width: 100%;
                    }
                    .lines::after {
                        width: 44%;
                    }
                }
                @media (max-width: 768px) {
                    .lines::after {
                        width: 54%;
                    }
                    .alumniCard--header {
                        gap: 10px;
                    }
                }
                @media (max-width: 425px) {
                    #carousel {
                        display: block;
                    }
                    .alumniCard--container {
                        display: none;
                    }
                }
                `}
            </style>
        </section>
    );
}

export default WoraufWartestDu;