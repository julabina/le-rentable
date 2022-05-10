import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return (
        <main className='contact'>
            <NavLink to="/">
                <h1 className='contact__title'>LeRentable</h1>
            </NavLink>
            <section className="contact__section">
                <h2>Contactez nous</h2>
                <form>
                    <div className="contact__section__infosForm">
                        <input type="text" className='contact__section__infosForm__name' placeholder='Votre nom' />
                        <input type="mail" className='contact__section__infosForm__mail' placeholder='Votre adresse mail' />
                    </div>
                    <input type="text" className='contact__section__subject' placeholder='Le sujet de votre message' />
                    <textarea className='contact__section__message' placeholder='Votre message'></textarea>
                    <div className="contact__section__btnCont">
                        <button className='contact__section__btnCont__btn'>Envoyer</button>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default Contact;