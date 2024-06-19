import React, { useRef, useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useTranslation } from 'react-i18next';
import '../utils/App.css';
import Contact from '../components/contact';

const StatsGroup = ({ group, toggleShowStats, showMoreStats, index }) => {
    return (
        <React.Fragment key={index}>
            <div>
                {group.map(stat => (
                    <React.Fragment key={stat.id}>
                        {stat.category && (
                            <div className='text-secondary d-flex justify-content-between custom-width-75 mt-5' style={{ cursor: 'pointer' }} onClick={() => toggleShowStats(index)}>
                                <b><p>{stat.category}</p></b>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className={` ${showMoreStats.includes(index) ? 'rotate-360 mt-3' : 'mb-2'}`}
                                    style={{ width: '1rem', transition: '0.3s' }}
                                >
                                    <path fill="#949494" d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" />
                                </svg>
                            </div>
                        )}
                        {stat.category && <div className={`border custom-width-75 ${showMoreStats.includes(index) ? 'd-block' : 'd-block'}`}></div>}
                        <div className={`mt-3 mb-3 px-3 ${showMoreStats.includes(index) ? 'd-flex' : 'd-none'}`}>
                            <h6 className='custom-width-50'>{stat.property}</h6>
                            <h6 style={{ width: '35%', maxWidth: '200px' }}>{stat.description}</h6>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </React.Fragment>
    );
};

function AimuNavira() {
    const [showDescription, setShowDescription] = useState(false);
    const [showMoreStats, setShowMoreStats] = useState([]);
    const [focusButton, setFocusButton] = useState(1);
    const [t] = useTranslation("global");
    const statsRef = useRef(null);

    const toggleShowDescription = () => {
        setShowDescription(!showDescription);
    };

    const toggleShowStats = (key) => {
        setShowMoreStats((prevState) =>
            prevState.includes(key) ? prevState.filter(k => k !== key) : [...prevState, key]
        );
    };

    const buttons = [
        { id: 1, text: t('Global.AimuNaviraAn500__Btn--ApplicationVersatility--Title'), image: 'media/aimu-navira-acordion-1.jpg', description: t('Global.AimuNaviraAn500__Btn--ApplicationVersatility--Description') },
        { id: 2, text: t('Global.AimuNaviraAn500__Btn--ConvenientlyIntegratedLift--Title'), image: 'media/aimu-navira-acordion-2.jpg', description: t('Global.AimuNaviraAn500__Btn--ConvenientlyIntegratedLift--Description') },
        { id: 3, text: t('Global.AimuNaviraAn500__Btn--ImpressiveRuggedness--Title'), image: 'media/aimu-navira-acordion-3.jpg', description: t('Global.AimuNaviraAn500__Btn--ImpressiveRuggedness--Description') },
    ];

    const statsGroup = [
        [
            { id: 1, category: t('Global.AimuNaviraAn500__Specifications--Category--GeneralInformation'), property: t('Global.AimuNaviraAn500__Specifications--Title--Type'), description: t('Global.AimuNaviraAn500__Specifications--Description--TypeP1') },
            { id: 2, property: t('Global.AimuNaviraAn500__Specifications--Title--Navigation'), description: t('Global.AimuNaviraAn500__Specifications--Description--Navigation') },
            { id: 3, property: t('Global.AimuNaviraAn500__Specifications--Title--Color'), description: t('Global.AimuNaviraAn500__Specifications--Description--Color') }
        ],
        [
            { id: 4, category: t('Global.AimuNaviraAn500__Specifications--Category--Dimensions'), property: t('Global.AimuNaviraAn500__Specifications--Title--Length'), description: t('Global.AimuNaviraAn500__Specifications--Description--Length') },
            { id: 5, property: t('Global.AimuNaviraAn500__Specifications--Title--Width'), description: t('Global.AimuNaviraAn500__Specifications--Description--Width') },
            { id: 6, property: t('Global.AimuNaviraAn500__Specifications--Title--Height'), description: t('Global.AimuNaviraAn500__Specifications--Description--Height') },
            { id: 7, property: t('Global.AimuNaviraAn500__Specifications--Title--Takeoff'), description: t('Global.AimuNaviraAn500__Specifications--Description--Takeoff') },
            { id: 8, property: t('Global.AimuNaviraAn500__Specifications--Title--LoadingSurface'), description: t('Global.AimuNaviraAn500__Specifications--Description--LoadingSurface') }
        ],
        [
            { id: 9, category: t('Global.AimuNaviraAn500__Specifications--Category--Load'), property: t('Global.AimuNaviraAn500__Specifications--Title--TransportMode'), description: t('Global.AimuNaviraAn500__Specifications--Description--TransportMode') },
            { id: 10, property: t('Global.AimuNaviraAn500__Specifications--Title--MaximumLoad'), description: t('Global.AimuNaviraAn500__Specifications--Description--MaximumLoad') }
        ],
        [
            { id: 11, category: t('Global.AimuNaviraAn500__Specifications--Category--Displacement'), property: t('Global.AimuNaviraAn500__Specifications--Title--MaximumSpeed'), description: t('Global.AimuNaviraAn500__Specifications--Description--MaximumSpeed') },
            { id: 12, property: t('Global.AimuNaviraAn500__Specifications--Title--CorridorWidth'), description: t('Global.AimuNaviraAn500__Specifications--Description--CorridorWidth') },
            { id: 13, property: t('Global.AimuNaviraAn500__Specifications--Title--DisplacementMode'), description: t('Global.AimuNaviraAn500__Specifications--Description--DisplacementMode') }
        ],
        [
            { id: 14, category: t('Global.AimuNaviraAn500__Specifications--Category--EnergyAutonomy'), property: t('Global.AimuNaviraAn500__Specifications--Title--Standby'), description: t('Global.AimuNaviraAn500__Specifications--Description--Standby') },
            { id: 15, property: t('Global.AimuNaviraAn500__Specifications--Title--ContinuousOperation'), description: t('Global.AimuNaviraAn500__Specifications--Description--ContinuousOperation') },
            { id: 16, property: t('Global.AimuNaviraAn500__Specifications--Title--Weight'), description: t('Global.AimuNaviraAn500__Specifications--Description--Weight') }
        ],
        [
            { id: 17, category: t('Global.AimuNaviraAn500__Specifications--Category--Power'), property: t('Global.AimuNaviraAn500__Specifications--Title--Batteries'), description: t('Global.AimuNaviraAn500__Specifications--Description--Batteries') },
            { id: 18, property: t('Global.AimuNaviraAn500__Specifications--Title--LoadRatio'), description: t('Global.AimuNaviraAn500__Specifications--Description--LoadRatio') },
            { id: 19, property: t('Global.AimuNaviraAn500__Specifications--Title--ChargeCurrent'), description: t('Global.AimuNaviraAn500__Specifications--Description--ChargeCurrent') },
            { id: 20, property: t('Global.AimuNaviraAn500__Specifications--Title--ChargeCycles'), description: t('Global.AimuNaviraAn500__Specifications--Description--ChargeCycles') }
        ],
        [
            { id: 21, category: t('Global.AimuNaviraAn500__Specifications--Category--Around'), property: t('Global.AimuNaviraAn500__Specifications--Title--Use'), description: t('Global.AimuNaviraAn500__Specifications--Description--Use') },
            { id: 22, property: t('Global.AimuNaviraAn500__Specifications--Title--Floors'), description: t('Global.AimuNaviraAn500__Specifications--Description--Floors') }
        ],
        [
            { id: 23, category: t('Global.AimuNaviraAn500__Specifications--Category--Safety'), property: t('Global.AimuNaviraAn500__Specifications--Title--Type'), description: t('Global.AimuNaviraAn500__Specifications--Description--TypeP2') }
        ],
        [
            { id: 24, category: t('Global.AimuNaviraAn500__Specifications--Category--Communication'), property: t('Global.AimuNaviraAn500__Specifications--Title--InputsOutputs'), description: t('Global.AimuNaviraAn500__Specifications--Description--InputsOutputs') },
            { id: 25, property: 'Wi-Fi', description: t('Global.AimuNaviraAn500__Specifications--Description--WiFi') }
        ],
        [
            { id: 26, category: t('Global.AimuNaviraAn500__Specifications--Category--Sensors'), property: t('Global.AimuNaviraAn500__Specifications--Title--LiDAR'), description: t('Global.AimuNaviraAn500__Specifications--Description--LiDAR') },
            { id: 27, property: t('Global.AimuNaviraAn500__Specifications--Title--Cameras'), description: t('Global.AimuNaviraAn500__Specifications--Description--Cameras') },
            { id: 28, property: t('Global.AimuNaviraAn500__Specifications--Title--OpticalEncoders'), description: t('Global.AimuNaviraAn500__Specifications--Description--OpticalEncoders') }
        ],
        [
            { id: 29, category: t('Global.AimuNaviraAn500__Specifications--Category--LightsAndAudio'), property: t('Global.AimuNaviraAn500__Specifications--Title--Audio'), description: t('Global.AimuNaviraAn500__Specifications--Description--Audio') },
            { id: 30, property: t('Global.AimuNaviraAn500__Specifications--Title--Lights'), description: t('Global.AimuNaviraAn500__Specifications--Description--Lights') }
        ]
    ];

    const handleButtonClick = (number) => {
        setFocusButton(number);
    };

    return (
        <>
            <Navbar background="light" Navbar='AimuNavira' />
            <div className='row w-100' style={{ marginTop: "12vh" }}>
                <div className='col-md-6 col-12 d-flex justify-content-center align-items-center'>
                    <img src='media/aimu-navira.jpg' className='img-2 w-100 object-fit-cover' style={{maxHeight:'50rem'}} alt='Aimu Navira'></img>
                </div>
                <div className='col-md-6 col-12 mb-5' style={{ height: '90%' }}>
                    <div className='flex flex-column text-start stats' style={{ maxHeight: '100%' }}>
                        <div>
                            <p className='text-secondary'>{t('Global.AimuNaviraAn500__Stats--HeadLine')}</p>
                            <h1 className='fs-c'>{t('Global.AimuNaviraAn500__Stats-Title')}</h1>
                            <p ref={statsRef} className='fs-5 w-75 mt-4'>{t('Global.AimuNaviraAn500__Stats--Description')}</p>
                        </div>
                        <b><p className='mt-5'>{t('Global.AimuNaviraAn500__Stats--Specifications')}</p></b>
                        <div style={{ height: '50vh', overflowY: 'auto' }}>
                            {statsGroup.map((group, index) => (
                                <StatsGroup key={index} group={group} toggleShowStats={toggleShowStats} showMoreStats={showMoreStats} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-body-tertiary' style={{ padding: "6% 3%" }}>
                <div className='container d-flex text-center section3'>
                    <div className={`d-flex flex-column mt-5 mb-5 justify-content-start custom-width-75 ${showDescription ? 'dropup' : ''}`}>
                        <h3>{t('Global.AimuNaviraAn500__Title')}</h3>
                        <p className='mt-2 text-secondary'>{t('Global.AimuNaviraAn500__Description')}</p>
                        {showDescription && (
                            <>
                                <p className='mt-2 text-secondary'>{t('Global.AimuNaviraAn500__Description--hidden')}</p>
                            </>
                        )}
                        <button type="button" onClick={toggleShowDescription} className="btn text-light btn-lg rounded mt-2 dropdown-toggle" style={{ backgroundColor: '#6c29d8', borderColor: '#6c29d8' }}>{t('Global.AimuNaviraAn500__Btn--LearnMore')}</button>
                    </div>
                    <div style={{ width: "15%" }}></div>
                    <div className='d-flex justify-content-center mt-5 mb-5 custom-width-75'>
                        <img src='media/aimu-navira-info.jpg' className='object-fit-cover rounded w-100' style={{ height: '34.5rem' }} alt='Aimu Navira'></img>
                    </div>
                </div>
            </div>
            <div className='container-fluid custom-padding-15'>
                <div className='d-flex flex-row-reverse flex-wrap-reverse text-center section3' style={{ padding: "6% 0%" }}>
                    <div className='d-flex flex-column justify-content-start align-items-center custom-width-50-2 mt-3'>
                        {buttons.map(button => (
                            <button
                                key={button.id}
                                style={{ minHeight: "5rem", width: "70%" }}
                                className={`btn btn2 bg-body-tertiary text-start m-2 ${focusButton === button.id ? 'gray-state' : ''}`}
                                onClick={() => handleButtonClick(button.id)}
                            >
                                <h5>{button.text}</h5>
                                <p className={`text-start btn-2 mt-3 text-secondary ${focusButton === button.id ? '' : 'd-none'}`}>{button.description}</p>
                            </button>
                        ))}
                    </div>
                    <div className='d-flex justify-content-center custom-width-50-2' style={{ paddingLeft: "4%" }}>
                        <img src={buttons.find(button => button.id === focusButton)?.image} className='object-fit-cover rounded w-100' alt={t('Global.Navbar About Us')}></img>
                    </div>
                </div>
            </div>
            <Contact id='Contact' />
            <Footer />
        </>
    );
}

export default AimuNavira;
