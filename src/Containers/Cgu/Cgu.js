import React, { useEffect } from 'react';

const Cgu = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return (
        <main className='cgu'>
            <h1 className='cgu__title'>LeRentable</h1>
            <section className='cgu__section'>
                <h2>Conditions générales d'utilisation</h2>
                <p>Les présentes conditions générales d'utilisation (dites "<span>CGU</span>" ont pour objet l'encadrement juridique des modalités de mise à disposition du site et de définir les conditions d'accès et d'utilisation des services par "<span>l'Utilisateur</span>".</p>
                <p>Les présentes CGU sont accessibles sur le site à la rubrique "<span>CGU</span>".</p>

                <h3>Article 1 : Les mentions légales</h3>
                <p>L'hébergeur du site http://le-rentable.fr est la société Hostinger International Ltd, dont le siège social est situé au 61 Lordou Vironos str., 6023 Larnaca, Cyprus, joignable par le moyen suivant : <a href='https://www.hostinger.fr/contact' target="_blank">https://www.hostinger.fr/contact</a>.</p>
                <p className='cgu__section__marginTop'>Cet hébergeur détient à ce jour les informations personnelles concernant l'auteur de ce site.</p>

                <h3>Article 2 : Accès au site</h3>
                <p>Le site http://le-rentable.fr permet à l'Utilisateur un accès gratuit aux services suivants :</p>
                <p className='cgu__section__marginTop'>Le site internet propose les services suivants :</p>
                <p className='cgu__section__marginTop'>Calculer la rentabilité d'un bien immobilier</p>
                <p className='cgu__section__marginTop'>Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.</p>

                <h3>Article 3 : Collecte des données</h3>
                <p>Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune donnée concernant les Utilisateurs.</p>
            
                <h3>Article 4 : Propriété intellectuelle</h3>
                <p>Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son...) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.</p>
                <p className='cgu__section__marginTop'>L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite.</p>
                <p className='cgu__section__marginTop'>Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation expresse de l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l’article L 335-2 et suivants du Code de la propriété intellectuelle.</p>
                <p className='cgu__section__marginTop'>Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa source.</p>
            
                <h3>Article 5 : Responsabilité</h3>
                <p>Les sources des informations diffusées sur le site http://le-rentable.fr sont réputées fiables mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions.</p>
                <p className='cgu__section__marginTop'>Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle.</p>
                <p className='cgu__section__marginTop'>Malgré des mises à jour régulières, le site http://le-rentable.fr ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être tenue responsable de l’utilisation et de l’interprétation de l’information contenue dans ce site.</p>
                <p className='cgu__section__marginTop'>Le site http://le-rentable.fr ne peut être tenu pour responsable d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès, ou au téléchargement provenant de ce site.</p>
                <p className='cgu__section__marginTop'>La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.</p>
            
                <h3>Article 6 : Liens hypertextes</h3>
                <p>Des liens hypertextes peuvent être présents sur le site. L’Utilisateur est informé qu’en cliquant sur ces liens, il sortira du site http://le-rentable.fr. Ce dernier n’a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.</p>
            
                <h3>Article 7 : Cookies</h3>
                <p>L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation.</p>
                <p className='cgu__section__marginTop'>Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l’ordinateur de l’Utilisateur par votre navigateur et qui sont nécessaires à l’utilisation du site http://le-rentable.fr. Les cookies ne contiennent pas d’information personnelle et ne peuvent pas être utilisés pour identifier quelqu’un. Un cookie contient un identifiant unique, généré aléatoirement et donc anonyme. Certains cookies expirent à la fin de la visite de l’Utilisateur, d’autres restent.</p>
                <p className='cgu__section__marginTop'>L’information contenue dans les cookies est utilisée pour améliorer le site http://le-rentable.fr. </p>
                <p className='cgu__section__marginTop'>En naviguant sur le site, L’Utilisateur les accepte.</p>
                <p className='cgu__section__marginTop'>L’Utilisateur doit toutefois donner son consentement quant à l’utilisation de certains cookies.</p>
                <p className='cgu__section__marginTop'>A défaut d’acceptation, l’Utilisateur est informé que certaines fonctionnalités ou pages risquent de lui être refusées.</p>
                <p className='cgu__section__marginTop'>L’Utilisateur pourra désactiver ces cookies par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation.</p>
            
                <h3>Article 8 : Droit applicable et juridiction compétente</h3>
                <p>La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître.</p>
                <p className='cgu__section__marginTop'>Pour toute question relative à l’application des présentes CGU, vous pouvez joindre l’éditeur via la page contact.</p>
                <p className='cgu__section__marginTop'>CGU réalisées sur <a href='http://legalplace.fr/' target="_blank">http://legalplace.fr/</a>.</p>
            </section>
        </main>
    );
};

export default Cgu;