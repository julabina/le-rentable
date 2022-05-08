import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <NavLink to="/" >
                    <h2 className='footer__title'>LeRentable</h2>
                </NavLink>
                <div className="footer__lists">
                    <div className="footer__lists__infos">
                            <h3>Informations</h3>
                        <NavLink to="/a-propos"><p>à propos</p></NavLink>
                        <NavLink to="/mentions-legales"><p>Mentions Légales</p></NavLink>
                        <NavLink to="/politique-de-confidentialite"><p>Politique de confidentialité</p></NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;