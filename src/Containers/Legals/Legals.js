import React from 'react';

const Legals = () => {
    return (
        <main className='legals'>
            <h1 className="legals__title">LeRentable</h1>
            <section className="legals__section">
                <h2>Mentions Légales</h2>
                <p>Les présentes conditions générales fixent les modalités d'utilisation du service web http://le-rentable.fr</p>
                <p className='legals__section__p'>L'utilisateur reconnait avoir pris connaissance de ce document et accepté l'ensemble de ces informations, que cet usage soit fait à titre personnel ou professionnel. Si cet usage est fait à titre professionnel, l'utilisateur garantit détenir les pouvoirs nécessaires pour accepter ces conditions générales au sein de son organisation.</p>
                <h3>Hébergement</h3>
                <p>Ce site est hébergé par Hostinger International Ltd</p>
                <p>Siège social: 61 Lordou Vironos str., 6023 Larnaca, Cyprus</p>
                <p className='legals__section__p'>Cet hébergeur détient à ce jour les informations personnelles concernant l'auteur de ce site.</p>
                <p>Joignable par le moyen suivant : <a href='joignable par le moyen suivant :https://www.hostinger.fr/contact.'>https://www.hostinger.fr/contact</a>.</p>
            </section>
        </main>
    );
};

export default Legals;