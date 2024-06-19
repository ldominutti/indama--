import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../utils/App.css';
import { useTranslation } from 'react-i18next';
import Contact from '../components/contact';

function AboutUs() {
    const [t] = useTranslation('global');
    const [focusButton, setFocusButton] = useState(1);

    const buttons = [
        { id: 1, text: t('Global.AboutUs__Btn--PutCustomersFirst'), image: 'media/about-us-acordion-1.jpg' },
        { id: 2, text: t('Global.AboutUs__Btn--PursueBigBoldIdeas'), image: 'media/about-us-acordion-2.jpg' },
        { id: 3, text: t('Global.AboutUs__Btn--LeadWithHumility'), image: 'media/about-us-acordion-3.jpg' },
        { id: 4, text: t('Global.AboutUs__Btn--ExperimentIterateQuickly'), image: 'media/about-us-acordion-4.jpg' }
    ];

    const handleButtonClick = (number) => {
        setFocusButton(number);
    };

    return (
        <>
            <Navbar background="light" Navbar='AboutUs' />
            <div className='d-flex banner-responsive' style={{ maxHeight: '24.5rem', overflow: 'hidden' }} id='About-us'>
                <div className='position-absolute text-light' style={{ marginTop: '10rem', zIndex: '5', marginLeft:'5%' }}>
                    <p className='text-gray'><b>{t("Global.AboutUs__Banner--Header")}</b></p>
                    <h2>{t("Global.AboutUs__Banner--Title")}</h2>
                    <p>{t("Global.AboutUs__Banner--Description")}</p>
                </div>
                <img className='object-fit-cover' src='media/about-us-banner.jpg' alt='Aimu navira' style={{ filter: 'brightness(50%)' }} />
            </div>
            <div className='container-fluid bg-body-tertiary'>
                <div style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '4%', paddingBottom: '5%' }} className='d-flex text-center section3 aboutUs1'>
                    <div className='d-flex flex-column justify-content-center text-start w-100'>
                        <h1>{t('Global.AboutUs__Title--Page')}</h1>
                        <p className='mt-2 text-secondary'>{t('Global.AboutUs__Description--Page')}</p>
                    </div>
                    <div style={{ width: '20%' }}></div>
                    <div className='d-flex justify-content-center w-100'>
                        <img src='media/about-us.jpg' className='object-fit-cover rounded w-100' style={{height:'35rem'}}></img>
                    </div>
                </div>
            </div>
            <div className='container-fluid custom-padding-15'>
                <div className='d-flex flex-row-reverse flex-wrap-reverse text-center section3 aboutUs1'>
                    <div className='d-flex flex-column justify-content-start align-items-center custom-width-50-2 mt-3'>
                        {buttons.map(button => (
                            <>
                                <button
                                    key={button.id}
                                    style={{ minHeight: "5rem", width: "70%" }}
                                    className={`btn btn2 bg-body-tertiary text-start m-2 ${focusButton === button.id ? 'gray-state' : ''}`}
                                    onClick={() => handleButtonClick(button.id)}
                                >
                                    {button.text}
                                </button>
                            </>
                        ))}
                    </div>
                    <div className='d-flex justify-content-center custom-width-50-2 object-fit-cover' style={{ paddingLeft: "4%", height:'35rem' }}>
                        <img src={buttons.find(button => button.id === focusButton)?.image} className='object-fit-cover rounded w-100'></img>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='bg-body-tertiary aboutUs1 section3' style={{ paddingTop: "5%", paddingLeft: "10%", paddingRight: "10%", marginBottom: "10%" }}>
                    <h3>{t('Global.AboutUs__Subtitle--LifeAtIndama')}</h3>
                    <video src='media/about-us.mp4' className='w-100 mt-4 object-fit-cover' style={{maxHeight:'50rem'}} autoPlay muted loop />
                </div>
            </div>
            <Contact id='Contact' />
            <Footer />
        </>
    );
}

export default AboutUs;
