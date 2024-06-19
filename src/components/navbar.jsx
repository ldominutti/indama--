import React, { useState, useRef, useEffect } from 'react';
import '../utils/App.css';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

function Navbar({ contactRef, aboutRef, productsRef, background, Navbar }) {
    const [showMenu, setShowMenu] = useState(false);
    const [dropDownOpen1, setDropDownOpen1] = useState(false);
    const [dropDownOpen2, setDropDownOpen2] = useState(false);
    const [dropDownOpen3, setDropDownOpen3] = useState(false);
    const [navLinkHover, setNavLinkHover] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [navFilter, setNavFilter] = useState('opacity(100%) brightness(100%)');
    const [logoFilter, setLogoFilter] = useState('brightness(1000%)');
    const menuTimerRef = useRef(null);
    const [t, i18n] = useTranslation("global");
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 650);
    const navigate = useNavigate();

    const handleMenuToggle = () => {
        if (!showMenu) {
            document.body.style.overflow = 'hidden';
            setDropDownOpen1(false);
            setDropDownOpen3(false);
        } else {
            document.body.style.overflow = 'auto';
        }
        setShowMenu(!showMenu);
    };

    const toggleDropDown = (dropDown) => {
        if (dropDown === 1) {
            setDropDownOpen1(!dropDownOpen1);
        } else if (dropDown === 2) {
            setDropDownOpen2(!dropDownOpen2);
        } else if (dropDown === 3) {
            setDropDownOpen3(!dropDownOpen3);
        }
        setNavFilter('opacity(100%)');
    };

    const handleMouseEnter = (dropDown) => {
        if (dropDown === 1) {
            setDropDownOpen1(true);
            setNavLinkHover(true);
            clearTimeout(menuTimerRef.current);
        } else if (dropDown === 2) {
            clearTimeout(menuTimerRef.current);
        }
    };

    const handleMouseLeave = (dropDown) => {
        if (dropDown === 1) {
            menuTimerRef.current = setTimeout(() => {
                setDropDownOpen1(false);
                setNavLinkHover(false);
            }, 500);
        } else if (dropDown === 2) {
            menuTimerRef.current = setTimeout(() => {
                setDropDownOpen2(false);
            }, 500);
        }
    };

    const handleMenuMouseEnter = (dropDown) => {
        if (dropDown === 1) {
            clearTimeout(menuTimerRef.current);
        }
    };

    const handleMenuMouseLeave = (dropDown) => {
        if (dropDown === 1) {
            clearTimeout(menuTimerRef.current);
        } else if (dropDown === 2) {
            menuTimerRef.current = setTimeout(() => {
                setDropDownOpen2(false);
            }, 500);
        }
    };

    useEffect(() => {
        if (background !== 'light' && Navbar == null) {
            const handleResize = () => {
                setIsSmallScreen(window.innerWidth < 650);
            };
            const handleScroll = () => {
                const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (currentScrollTop > lastScrollTop && currentScrollTop > 0.5 * window.innerHeight && !isSmallScreen) {
                    setNavFilter('opacity(90%) brightness(90%)');
                } else {
                    setNavFilter('opacity(100%)');
                }
                setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
                if (lastScrollTop > 0.3 * window.innerHeight) {
                    setLogoFilter('brightness(100%)')
                } else {
                    setLogoFilter('brightness(1000%)')
                }
            };
            window.addEventListener('resize', handleResize);
            window.addEventListener('scroll', handleScroll);

            handleResize();

            return () => {
                window.removeEventListener('resize', handleResize);
                window.removeEventListener('scroll', handleScroll);
            };
        } else {
            setLogoFilter('brightness(100%)')
            setNavFilter('opacity(100%)');
        }
    }, [lastScrollTop, isSmallScreen]);

    const handleContactClick = () => {
        if (Navbar === null || Navbar === undefined) {
            setNavFilter('opacity(100%)');
            return contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        switch (Navbar) {
            case "AboutUs":
                navigate('/about-us#Contact')
                break;
            case "AimuNavira":
                navigate('/aimu-navira#Contact')
                break;
            case "AimuTikan":
                navigate('/aimu-tikan#Contact')
                break;
        }
        setTimeout(() => {
            window.location.href = window.location.href;
        }, 100);
    };

    const handleContactClickMenu = () => {
        if (Navbar === null || Navbar === undefined) {
            handleContactClick()
            handleMenuToggle()
        }

        switch (Navbar) {
            case "AboutUs":
                navigate('/about-us#Contact')
                break;
            case "AimuNavira":
                navigate('/aimu-navira#Contact')
                break;
            case "AimuTikan5":
                navigate('/aimu-tikan-5#Contact')
                break;
        }
        setTimeout(() => {
            handleMenuToggle()
            window.location.href = window.location.href;
        }, 100);

    };

    const handleAboutClick = () => {
        if (Navbar && Navbar == "AboutUs") {
            return null;
        }
        if (Navbar) {
            navigate('/about-us')
            setTimeout(() => {
                return window.location.href = window.location.href;
            }, 100);
        }
        aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setNavFilter('opacity(100%)');
    };

    const handleAboutClickMenu = () => {
        if (Navbar && Navbar == "AboutUs") {
            return handleMenuToggle();
        }
        if (Navbar) {
            navigate('/about-us')
            setTimeout(() => {
                handleMenuToggle()
                return window.location.href = window.location.href;
            }, 100);
        }
        handleMenuToggle()
        handleAboutClick()
    };

    const handleProductsClick = () => {
        if (Navbar) {
            navigate('/home#Products');
            setTimeout(() => {
                return window.location.href = window.location.href;
            }, 100);
        }
        productsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setNavFilter('opacity(100%)');
    };

    const handleProductsClickMenu = () => {
        if (Navbar) {
            navigate('/home#Products');
            setTimeout(() => {
                handleMenuToggle()
                return window.location.href = window.location.href;
            }, 100);
        }
        handleProductsClick()
        handleMenuToggle()
    };

    const handleAimuNaviraClick = () => {
        if (Navbar && Navbar == "AimuNavira") {
            return;
        }
        navigate('/aimu-navira')
            setTimeout(() => {
                return window.location.href = window.location.href;
            }, 100);
    }

    const handleAimuTikanClick = () => {
        if (Navbar && Navbar == "AimuTikan") {
            return;
        }
        navigate('/aimu-tikan')
            setTimeout(() => {
                return window.location.href = window.location.href;
            }, 100);
    }

    const handleAimuNaviraClickMenu = () => {
        if (Navbar && Navbar == "AimuNavira") {
            return handleMenuToggle();
        }
        navigate('/aimu-navira')
            setTimeout(() => {
                handleMenuToggle()
                return window.location.href = window.location.href;
            }, 100);
    }

    const handleAimuTikanClickMenu = () => {
        if (Navbar && Navbar == "AimuTikan") {
            return handleMenuToggle();
        }
        navigate('/aimu-tikan')
            setTimeout(() => {
                handleMenuToggle()
                return window.location.href = window.location.href;
            }, 100);
    }


    const toggleLanguage = () => {
        if (i18n.language === 'en') {
            i18n.changeLanguage('es')
        } else {
            i18n.changeLanguage('en')
        }
    };

    const toggleLanguageSpanish = () => {
        i18n.changeLanguage('es')
    };

    const toggleLanguageEnglish = () => {
        i18n.changeLanguage('en')
    };

    return (
        <div className={`container-fluid fixed-top container-navbar ${lastScrollTop > 0.3 * window.innerHeight || background === 'light' ? 'bg-white' : ''}`} style={{ width: '100%', minHeight: "4.5rem", height: '13%', maxHeight: "6rem", filter: navFilter, transition: '1s' }}>
            <div className="container-lg fixed-top">
                <nav className="navbar navbar-expand-lg d-flex justify-content-between mt-2">
                    <div className="d-flex align-items-center">
                        <a href="/home">
                            <img src="media/indama-logo.png" className='logo-indama img-fluid' alt="Indama" style={{ width: '13.5rem', minHeight: '2rem', filter: logoFilter }} />
                        </a>
                        <ul className="nav nav-underline">
                            <li className="nav-item" style={{ marginLeft: '3rem' }} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
                                <span className={navLinkHover ? "nav-link dropdown-toggle" : `nav-link dropdown-toggle ${lastScrollTop > 0.3 * window.innerHeight || background === 'light' ? 'text-dark' : 'text-light'}`} role="button" aria-expanded={dropDownOpen1} onClick={() => toggleDropDown(1)}>{t("Global.Navbar__Products")}</span>
                                {dropDownOpen1 && (
                                    <ul className="dropdown-menu bg-white" style={{ display: 'block', marginTop: '.5rem', transition: '5s' }} onMouseEnter={() => handleMenuMouseEnter(1)} onMouseLeave={() => handleMenuMouseLeave(1)}>
                                        <li onClick={handleProductsClick}><a className="dropdown-item text-secondary">{t("Global.Navbar__Products--ViewAll")}</a></li>
                                        <li onClick={handleAimuNaviraClick}><a className="dropdown-item text-secondary">{t("Global.Navbar__Products--AimuNaviraAn500")}</a></li>
                                        <li onClick={handleAimuTikanClick}><a className="dropdown-item text-secondary">{t("Global.Navbar__Products--AimuTikanAT500")}</a></li>
                                        <li onClick={handleContactClick}><a className="dropdown-item text-secondary">{t("Global.Navbar__Products--CustomProjects")}</a></li>
                                    </ul>
                                )}
                            </li>
                            <li className="nav-item" style={{ marginLeft: '1rem' }}>
                                <a className={`nav-link ${lastScrollTop > 0.3 * window.innerHeight || background === 'light' ? 'text-dark' : 'text-light'}`} onClick={handleAboutClick}>{t("Global.Navbar__AboutUs")}</a>
                            </li>
                        </ul>
                    </div>
                    <div className=' d-flex align-items-center'>
                        <div className="dropdown language" style={{ marginRight: '2rem' }}>
                            <button onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)} className={`border-0 language dropdown-toggle p-2 ${lastScrollTop > 0.3 * window.innerHeight || background === 'light' ? 'text-dark' : 'text-light'}`} style={{ backgroundColor: "transparent" }} type="button" onClick={() => toggleDropDown(2)}>
                                {i18n.language === 'es' ? t("Global.Navbar__Language--Es") : t("Global.Navbar__Language--En")}
                            </button>
                            {dropDownOpen2 && (
                                <div className='bg-light border language2 position-absolute rounded d-flex justify-content-center align-items-center' onClick={toggleLanguage} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)} style={{ width: '70px', marginTop: '0.3rem', height: '40px' }}>
                                    <div style={{ userSelect: "none" }}>{i18n.language === 'en' ? t("Global.Navbar__Language--Es") : t("Global.Navbar__Language--En")}</div>
                                </div>
                            )}
                        </div>
                        <button type="button" className="btn btn-lg btn-violet text-light rounded contact" onClick={handleContactClick}>{t("Global.Navbar__Contact")}</button>
                        <div className='menu-img' style={{ width: '3.5rem' }}>
                            <svg onClick={handleMenuToggle} className='w-100' alt='Menu' version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 314.000000 224.000000" preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,224.000000) scale(0.100000,-0.100000)"
                                    fill="#000000" stroke="none">
                                    <path d="M833 1868 c-12 -6 -27 -23 -34 -39 -15 -37 2 -82 37 -98 18 -8 235-11 760 -11 l736 0 29 29 c37 37 37 65 0 102 l-29 29 -739 -1 c-495 0 -745 -4-760 -11z"/>
                                    <path d="M833 1308 c-12 -6 -27 -23 -34 -39 -15 -37 2 -82 37 -98 18 -8 235-11 760 -11 l736 0 29 29 c37 37 37 65 0 102 l-29 29 -739 -1 c-495 0 -745 -4-760 -11z"/>
                                    <path d="M833 748 c-12 -6 -27 -23 -34 -39 -15 -37 2 -82 37 -98 18 -8 235-11 760 -11 l736 0 29 29 c37 37 37 65 0 102 l-29 29 -739 -1 c-495 0 -745 -4-760 -11z"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                </nav>
                {showMenu ? (
                    <div className='menu bg-light position-absolute' style={{ overflowY: 'auto' }}>
                        <ul className="list-unstyled p-3 text-center" style={{ width: '100%' }}>
                            <li className="mt-2 mb-4 p-3 rounded" onClick={() => toggleDropDown(1)} style={{ border: 'solid 1px black' }}>
                                <a href="#" className="text-decoration-none text-dark dropdown-toggle">{t('Global.Navbar__Products')}</a>
                            </li>
                            {dropDownOpen1 && (
                                <div className='d-flex flex-column align-items-center'>
                                    <li className="mb-3 p-3 rounded text-secondary" onClick={handleProductsClickMenu} style={{ border: 'solid 1px gray', width: '95%' }}>
                                        <a className="text-decoration-none text-secondary">{t("Global.Navbar__Products--ViewAll")}</a>
                                    </li>
                                    <li className="mb-3 p-3 rounded text-secondary" onClick={handleAimuNaviraClickMenu} style={{ border: 'solid 1px gray', width: '95%' }}>
                                        <a className="text-decoration-none text-secondary">{t("Global.Navbar__Products--AimuNaviraAn500")}</a>
                                    </li>
                                    <li className="mb-3 p-3 rounded text-secondary" onClick={handleAimuTikanClickMenu} style={{ border: 'solid 1px gray', width: '95%' }}>
                                        <a className="text-decoration-none text-secondary">{t("Global.Navbar__Products--AimuTikanAT500")}</a>
                                    </li>
                                    <li className="mb-4 p-3 rounded text-secondary" onClick={handleContactClickMenu} style={{ border: 'solid 1px gray', width: '95%' }}>
                                        <a className="text-decoration-none text-secondary">{t("Global.Navbar__Products--CustomProjects")}</a>
                                    </li>
                                </div>
                            )}
                            <li className="mb-4 p-3 rounded" onClick={handleAboutClickMenu} style={{ border: 'solid 1px black' }}>
                                <a href="/home#about-us" className="text-decoration-none text-dark">{t('Global.Navbar__AboutUs')}</a>
                            </li>
                            <li className="mb-4 p-3 rounded" onClick={() => toggleDropDown(3)} style={{ border: 'solid 1px black' }}>
                                <div className="dropdown">
                                    <a href="#" className="text-decoration-none dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'black' }}>
                                        {t('Global.Navbar__Menu-Idioms')}
                                    </a>
                                </div>
                            </li>
                            {dropDownOpen3 && (
                                <div className='d-flex flex-column align-items-center'>
                                    <li className="mb-4 p-3 rounded text-secondary" onClick={toggleLanguageSpanish} style={{ border: 'solid 1px gray', width: '95%' }}>
                                        <a href="#" className="text-decoration-none text-secondary">{t("Global.Navbar__Language--Es")}</a>
                                    </li>
                                    <li className="mb-4 p-3 rounded text-secondary" onClick={toggleLanguageEnglish} style={{ border: 'solid 1px gray', width: '95%' }}>
                                        <a href="#" className="text-decoration-none text-secondary">{t("Global.Navbar__Language--En")}</a>
                                    </li>
                                </div>
                            )}
                            <li className="mb-4">
                                <button type="button" className="btn text-light btn-lg rounded w-100" style={{ backgroundColor: '#6c29d8', borderColor: '#6c29d8' }} onClick={handleContactClickMenu}>{t("Global.Navbar__Contact")}</button>
                            </li>
                        </ul>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default Navbar;
