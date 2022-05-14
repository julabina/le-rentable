import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return (
        <main className='notFound'>
            <NavLink to="/">
                <h1 className='notFound__title'>LeRentable</h1>
            </NavLink>
            <section className='notFound__section'>
                <h2 className="notFound__section__title">404 Not found</h2>
                <div className="notFound__section__btnCont">
                    <NavLink to="/">
                        <button className='notFound__section__btnCont__btn'>Retourner à l'accueil</button>
                    </NavLink>
                </div>
            </section>  
        </main>
    );
};

export default NotFound;