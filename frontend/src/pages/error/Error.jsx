import React from 'react';
import { NavLink } from 'react-router-dom';
function Error() {

    document.title = "Argent Bank - Page introuvable"

    return (
    <main>
        <section className="feature-item">
            <h1>404</h1>
            <h2>Désolé cette page n'existe pas</h2>
            <h3><NavLink to ='/' >Retourner à la page d'accueil </NavLink ></h3>
        </section>
    </main>
    
    
    )
}

export default Error