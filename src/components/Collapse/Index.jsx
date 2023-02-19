import React, { useState } from 'react';

import arrowDown from "../../assets/arrowDown.svg";


function Collapse ({ categorie, title, content }) {

    const [isOpen, setIsOpen] = useState(false)

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
    ) : (
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