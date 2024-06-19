import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation('global');

    return (
        <footer className="footer bg-dark text-light p-5" style={{height:'10rem'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; 2024 INDAMA</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p>{t('Global.Contact__Footer')} indama@indama.com.ar</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
