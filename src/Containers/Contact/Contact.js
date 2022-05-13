import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Contact = () => {
    
    const [inputs, setInputs] = useState({name: "", mail: "", topic: "", message: ""});

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    const controlInput = (action, value) => {
        if (action === "name") {
            const newObj = {
                ...inputs,
                name: value
            }
            setInputs(newObj);
        } else if (action === "mail") {
            const newObj = {
                ...inputs,
                mail: value
            }
            setInputs(newObj);       
        } else if (action === "topic") {
            const newObj = {
                ...inputs,
                topic: value
            }
            setInputs(newObj);       
        } else if (action === "message") { 
            const newObj = {
                ...inputs,
                message: value
            }
            setInputs(newObj);       
        }
    }

    const verifyMsg = (e) => {
        e.preventDefault();
        const errorCont = document.querySelector('.contact__section__errorCont');
        let error = ``;
 
        // name
        if (inputs.name === "") {
            error += `<p>- Le nom ne doit pas être vide.</p>`;
        } else if (inputs.name.length < 2 || inputs.name.length > 25) {
            error += `<p>- La taille du nom doit être comprise entre 2 et 25 caractères.</p>`;
        } else if (!inputs.name.match(/^[a-zA-Zé èà]*$/)) {
            error += `<p>- Le nom ne doit pas comporter de caractères spéciaux.</p>`;
        }
        // mail
        if (!inputs.mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
            error += `<p>- L'email n' est pas valide'.</p>`;
        }
        // topic
        if (inputs.topic === "") {
            error += `<p>- Le sujet ne doit pas être vide.</p>`;
        } else if (inputs.topic.length < 2 || inputs.topic.length > 100) {
            error += `<p>- La taille du sujet doit être comprise entre 2 et 100 caractères.</p>`;
        } else if (!inputs.topic.match(/^[a-zA-Zé èà]*$/)) {
            error += `<p>- Le sujet ne doit pas comporter de caractères spéciaux.</p>`;
        }
        // message
        if (inputs.message === "") {
            error += `<p>- Le message ne doit pas être vide.</p>`;
        } else if (inputs.message.length < 10 || inputs.message.length > 500) {
            error += `<p>- La taille du message doit être comprise entre 10 et 500 caractères.</p>`;
        } else if (!inputs.message.match(/^[a-zA-Zé èà]*$/)) {
            error += `<p>- Le message ne doit pas comporter de caractères spéciaux.</p>`;
        }

        errorCont.innerHTML = error;
        window.scrollTo(0, 0);

        if (error === '') {
            sendMsg();
        }

    }

    const sendMsg = () => {
        const succesDiv = document.querySelector('.contact__section__sendCont');
        let confirmMsg = '';

        const objToSend = {
            name: inputs.name,
            mail: inputs.mail,
            topic: inputs.topic,
            message: inputs.message
        }
        emailjs.send('service_c00b0wn', 'template_pi0j5kh', objToSend, 'lVfp0cuRFWaBf6rEZ')
        .then(res => res.text === 'OK' && (succesDiv.innerHTML = `<p>Message envoyé !</p>`))
            .catch(error =>  error = `Une erreur est survenue: ${error}.`)

        const newObj = {
            name: "",
            mail: "",
            topic: "",
            message: ""
        }
        setInputs(newObj);
    }

    return (
        <main className='contact'>
            <NavLink to="/">
                <h1 className='contact__title'>LeRentable</h1>
            </NavLink>
            <section className="contact__section">
                <h2>Contactez nous</h2>
                <div className="contact__section__errorCont"></div>
                <div className="contact__section__sendCont"></div>
                <form onSubmit={verifyMsg}>
                    <div className="contact__section__infosForm">
                        <div className="contact__section__inputCont">
                            <label htmlFor="contactFormName">Nom</label>
                            <input onInput={(e) => controlInput("name", e.target.value)} id="contactFormName" type="text" className='contact__section__infosForm__name' placeholder='Votre nom' value={inputs.name} />
                        </div>
                        <div className="contact__section__inputCont">
                            <label htmlFor="contactFormMail">Email</label>
                            <input onInput={(e) => controlInput("mail", e.target.value)} id="contactFormMail" type="mail" className='contact__section__infosForm__mail' placeholder='Votre adresse mail' value={inputs.mail} />
                        </div>
                    </div>
                    <div className="contact__section__inputCont contact__section__inputCont__topic">
                        <label htmlFor="contactFormTopic">Sujet</label>
                        <input onInput={(e) => controlInput("topic", e.target.value)} id="contactFormTopic" type="text" className='contact__section__topic' placeholder='Le sujet de votre message' value={inputs.topic} />
                    </div>
                    <div className="contact__section__inputCont contact__section__inputCont__message">
                        <label htmlFor="contactFormMessage">Message</label>
                        <textarea onInput={(e) => controlInput("message", e.target.value)} id="contactFormMessage" className='contact__section__message' placeholder='Votre message' value={inputs.message}></textarea>
                    </div>
                    <div className="contact__section__btnCont">
                        <button className='contact__section__btnCont__btn'>Envoyer</button>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default Contact;