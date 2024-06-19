import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ProductSection from '../components/productsection';
import { useNavigate } from 'react-router-dom';
import Contact from '../components/contact';

function Home() {
    const contactRef = useRef(null);
    const aboutRef = useRef(null);
    const productsRef = useRef(null);
    const navigate = useNavigate();
    const [t] = useTranslation("global");

    useEffect(() => {
        // Scroll to the top of the page when the component mounts (page reload)
        window.scrollTo(0, 0);
    }, []);

    const handleProductsClick = () => {
        productsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleLearnMoreClick = () => {
        navigate('/about-us#About-us');
        setTimeout(() => {
            window.location.href = window.location.href;
        }, 100);
    };

    return (
        <>
            <Navbar contactRef={contactRef} aboutRef={aboutRef} productsRef={productsRef} />
            <main>
                <div style={{ height: '100vh', width: '100%' }}>
                    <div className='container-video position-relative w-100' style={{ height: '100vh', overflow: 'hidden' }}>
                        <video src='media/Indama-front.mp4' className='w-100 h-100 object-fit-cover' style={{ filter: 'brightness(50%)' }} autoPlay loop muted />
                    </div>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: '2', width: '80%', maxWidth: '850px' }}>
                        <h1>{t("Global.Home__Title")}</h1>
                        <p className='mb-5'>{t("Global.Home__Description")}</p>
                        <button onClick={handleProductsClick} type="button" className="btn rounded m-4 btn-lg text-light dropdown-toggle" style={{ backgroundColor: '#5417b6', borderColor: '#5417b6' }}>{t("Global.Home__Btn--ViewProducts")}</button>
                    </div>
                </div>

                <div style={{ position: 'relative', width: "100%"}} className='bg-body-tertiary custom-padding-10'>
                    <div id='Products' ref={productsRef} className="d-flex flex-column justify-content-center h-100 w-100">
                        <h1 className='text-center' style={{marginBottom: '1rem' }}>{t('Global.Products__Title')}</h1>
                        <p className='text-center' style={{ marginBottom: '5%', color: '#333' }}>
                            {t('Global.Products__Description')}
                        </p>
                        <ProductSection contactRef={contactRef}></ProductSection>
                    </div>
                </div>

                <div ref={aboutRef} className='d-flex text-center section3 custom-padding-5'>
                    <div className='d-flex flex-column justify-content-center custom-width-75'>
                        <h2>{t("Global.AboutUs__Title")}</h2>
                        <p className='mt-2 text-secondary'>{t("Global.AboutUs__Description")}</p>
                        <button type="button" className="btn text-light btn-lg rounded mt-2" style={{ backgroundColor: '#6c29d8', borderColor: '#6c29d8' }} onClick={handleLearnMoreClick}>{t("Global.AboutUs__Btn--LearnMore")}</button>
                    </div>
                    <div style={{ width: "15%" }}></div>
                    <div className='d-flex justify-content-center custom-width-75'>
                        <img src='media/about-us-front.jpg' className='object-fit-cover custom-mt-5 card-img-top' alt={t('Global.Navbar About Us')} style={{ width: "100%", height: "35rem" }}></img>
                    </div>
                </div>

                <Contact contactRef={contactRef} />
            </main>
            <Footer />
        </>
    );
}

export default Home;
