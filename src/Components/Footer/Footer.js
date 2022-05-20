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
                        <NavLink to="/contact"><p>Contact</p></NavLink>
                        <NavLink to="/cgu"><p>Conditions Générales d'Utilisation</p></NavLink>
                    </div>
                </div>
            </div>
                <div className="footer__copyright"><p>Copyright 2022 © Le Rentable | Tous droits réservés</p></div>
        </footer>
    );
};

export default Footer;