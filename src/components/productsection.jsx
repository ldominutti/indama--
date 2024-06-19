import React from 'react';
import { useTranslation } from 'react-i18next';

function ProductSection() {
    const [t] = useTranslation("global")
    return (
        <div className='container' style={{ marginBottom: '6rem' }}>
            <div className='row'>
                <div className='col-sm-12 col-md-6 d-flex'>
                    <div className='d-flex flex-column w-100 align-items-end'>
                        <div className='card mt-4 p-2' style={{ width: '30rem', height: "25rem" }}>
                            <img src='media/aimu-tikan-front.jpg' className='card-img-top h-50' alt={t("Global.Products__Card--AimuTikanAT500--Title")}></img>
                            <div className="card-body text-center d-flex flex-column justify-content-between">
                                <div>
                                    <h2 className="card-title text-dark" style={{ fontSize: '1.5rem' }}>{t("Global.Products__Card--AimuTikanAT500--Title")}</h2>
                                    <p className="card-text text-secondary">{t("Global.Products__Card--AimuTikanAT500--Description")}</p>
                                </div>
                                <a href='/aimu-tikan' className="btn w-100 text-light" style={{ backgroundColor: '#6c29d8', borderColor: '#6c29d8' }}>{t("Global.Products__Card--ViewProduct")}</a>
                            </div>
                        </div>
                        <div className='card mt-4 p-2' style={{ width: '30rem', height: "25rem" }}>
                            <img src='media/aimu-navira-front.jpg' className='card-img-top h-50' alt={t("Global.Products__Card--AimuNaviraAn500--Title")}></img>
                            <div className="card-body text-center d-flex flex-column justify-content-between">
                                <div>
                                    <h2 className="card-title text-dark" style={{ fontSize: '1.5rem' }}>{t("Global.Products__Card--AimuNaviraAn500--Title")}</h2>
                                    <p className="card-text text-secondary">{t("Global.Products__Card--AimuNaviraAn500--Description")}</p>
                                </div>
                                <a href='/aimu-navira' className="btn w-100 text-light" style={{ backgroundColor: '#6c29d8', borderColor: '#6c29d8' }}>{t("Global.Products__Card--ViewProduct")}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 d-flex'>
                    <div className='d-flex flex-column w-100 align-items-start'>
                        <div className='card mt-4 p-2' style={{ width: '30rem', maxHeight: "51.5rem" }}>
                            <img src='media/custom-project-front.jpg' className='card-img-top' alt={t("Global.Products__Card--CustomProjects--Title")}></img>
                            <div className="card-body text-center d-flex flex-column justify-content-between">
                                <div>
                                    <h2 className="card-title text-dark" style={{ fontSize: '1.5rem' }}>{t("Global.Products__Card--CustomProjects--Title")}</h2>
                                    <p className="card-text text-secondary">{t("Global.Products__Card--CustomProjects--Description")}</p>
                                </div>
                                <a href='/home#contact-us' className="btn w-100 text-light mt-4" style={{ backgroundColor: '#6c29d8', borderColor: '#6c29d8' }}>{t("Global.Products__Card--Contact")}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductSection;
