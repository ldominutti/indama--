import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from 'react-google-recaptcha';
import sendEmail from '../api/mailService';
import '../utils/App.css';

function Contact({ contactRef, id }) {
    const { t, i18n } = useTranslation("global");
    const emailSubject = i18n.language === 'es' ? 'Consulta INDAMA' : 'INDAMA Query';
    const emailBody = i18n.language === 'es' ? 'Hola, me gustaría hacer una consulta.' : 'Hello, I would like to make an inquiry.';

    const [mailData, setMailData] = useState({
        name: '',
        email: '',
        message: '',
        recaptcha: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMailData({
            ...mailData,
            [name]: value
        });
        setError('');
    };

    const handleRecaptchaChange = (value) => {
        setMailData({
            ...mailData,
            recaptcha: value
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(mailData)
        if (mailData.name && mailData.email && mailData.message && mailData.recaptcha) {
            try {
                const response = await sendEmail(mailData);
                console.log('Email sent successfully:', response);
                setSuccess(t('Global.Contact__Success--Send'));
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } catch (error) {
                console.error('Error sending email:', error);
                setError(t('Global.Contact__Error--Send'));
            }
        } else {
            setError(t('Global.Contact__Error--InvalidData'));
        }
    };

    const closeAlert = () => {
        setSuccess(null);
        setError(null);
    }

    return (
        <div ref={contactRef} id={id ? id : 'contact-us'} className='bg-body-tertiary position-relative' style={{ padding: '3% 0%' }}>
            <div className='container'>
                <div className='row d-flex text-center' style={{ paddingLeft: "3%", paddingRight: "3%" }}>
                    <div className='col-md-6'>
                        <h1 className='text-start' style={{ marginTop: '5rem', marginBottom: '1rem' }}>{t('Global.Home__Title')}</h1>
                        <p className='text-start' style={{ color: '#333' }}>
                            {t("Global.Contact__Description")}
                        </p>
                        <div className='text-start'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '1.5rem' }}><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                                <a href={`mailto:indama@indama.com.ar?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`} style={{textDecoration:'none'}}> indama@indama.com.ar</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 d-flex justify-content-center mt-5'>
                        <form className='bg-light rounded p-4 text-start contact-form' onSubmit={handleSubmit} style={{ maxWidth: '25rem', width: '100%', boxShadow: '0px 0px 5px #bbbbbb', marginBottom: '8rem' }}>
                            <img className='img-fluid w-100 mb-4 mx-auto' src='media/indama-logo.png' alt="Indama Logo"></img>
                            {error && <div className="alert alert-danger" style={{cursor:'pointer'}} onClick={closeAlert} role="alert">{error}</div>}
                            {success && <div className="alert alert-success" style={{cursor:'pointer'}} onClick={closeAlert} role="alert">{success}</div>}
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">{t("Global.Contact__Label--Name")}</label>
                                <input type="text" name='name' id='name' className="form-control" onChange={handleChange} maxLength={25} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">{t("Global.Contact__Label--Email")}</label>
                                <input type="email" name='email' id='email' className="form-control" onChange={handleChange} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="form-label">{t("Global.Contact__Label--Message")}</label>
                                <textarea name='message' id='message' className="form-control" style={{ height: '100px', resize: 'none' }} onChange={handleChange} maxLength={1000} ></textarea>
                            </div>
                            <div className="mb-4">
                                <ReCAPTCHA
                                    sitekey="6LfSWPspAAAAAOKLWoEveA1YHtib0zOKlYlcPFb0"
                                    onChange={handleRecaptchaChange}
                                />
                            </div>
                            <button type="submit" className="btn w-100 text-light" style={{ backgroundColor: '#6c29d8', borderColor: '#6c29d8' }}>{t("Global.Contact__Btn--Send")}</button>
                        </form>
                    </div>
                </div>
            </div>
            <div style={{ height: '5rem' }}></div>
        </div>
    );
}

export default Contact;
