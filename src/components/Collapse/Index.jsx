import React, { useState } from 'react';

import arrowDown from "../../assets/arrowDown.svg";


// Cette fonction s'appelle Collapse et elle prend un objet avec trois propriétés comme argument
function Collapse ({ categorie, title, content }) {

    // On définit une variable d'état isOpen avec une valeur initiale false, et une fonction setIsOpen pour mettre à jour l'état
    const [isOpen, setIsOpen] = useState(false)

    // Si isOpen est true, renvoyer ce code JSX 
    return isOpen ? (
        <section className={`${categorie}__info__card`} >
            <header className={`${categorie}__info__card__title`}  onClick={() => setIsOpen(false)}>
                <h1>{title}</h1>
                <img src={ arrowDown } alt="menu déroulant" />
            </header>
            <article className={`${categorie}__info__card__info`}  id="open">
                <p>{ content }</p>
            </article>
        </section>
    ) : // Sinon, renvoyer ce code JSX 
    (
        <section className={`${categorie}__info__card`}>
            <header className={`${categorie}__info__card__title`} onClick={() => setIsOpen(true)}>
                    <h1>{title}</h1>
                    <img src={ arrowDown } alt="menu déroulant" id="close" />
            </header>
        </section>
    )
}
export default Collapse

/*collapse sert au déroulement du menu*/ 