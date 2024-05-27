import React from 'react';
import './destination.css'; 
import parisImg from '../assets/paris.jpg';
import moscouImg from '../assets/moscou.jpg';
import miamiImg from '../assets/Miami.jpg';
import losAngelesImg from '../assets/los-angeles.jpg';
import romeImg from '../assets/rome.jpg';
import tokyoImg from '../assets/tokio.jpg';
const reservation = () => {
    return (
        <div>
            <section id="home">
                <div className="intro">
                    <h1>Bienvenue à notre Agence de Voyage</h1>
                    <p>Découvrez nos offres exclusives et partez à l'aventure.</p>
                </div>
            </section>
            <section id="offers">
                <h2>Nos Offres</h2>
                <div className="offers-container">
                    <div className="offer">
                        <img src={parisImg} alt="Paris" />
                        <div className="offer-details">
                            <h3>Paris</h3>
                            <p>Prix: xxxxTND Date:jj/mm/aaaa</p>
                            <button>Réserver</button>
                        </div>
                    </div>
                    <div className="offer">
                        <img src={moscouImg} alt="Moscou" />
                        <div className="offer-details">
                            <h3>Moscou</h3>
                            <p>Prix: xxxxTND Date:jj/mm/aaaa</p>
                            <button>Réserver</button>
                        </div>
                    </div>
                    <div className="offer">
                        <img src={miamiImg} alt="Miami" />
                        <div className="offer-details">
                            <h3>Miami</h3>
                            <p>Prix: xxxxTND Date:jj/mm/aaaa</p>
                            <button>Réserver</button>
                        </div>
                    </div>
                    <div className="offer">
                        <img src={losAngelesImg} alt="Los Angeles" />
                        <div className="offer-details">
                            <h3>Los Angeles</h3>
                            <p>Prix: xxxxTND Date:jj/mm/aaaa</p>
                            <button>Réserver</button>
                        </div>
                    </div>
                    <div className="offer">
                        <img src={romeImg} alt="Rome" />
                        <div className="offer-details">
                            <h3>Rome</h3>
                            <p>Prix: xxxxTND Date:jj/mm/aaaa</p>
                            <button>Réserver</button>
                        </div>
                    </div>
                    <div className="offer">
                        <img src={tokioImg} alt="Tokyo" />
                        <div className="offer-details">
                            <h3>Tokyo</h3>
                            <p>Prix: xxxxTND Date:jj/mm/aaaa</p>
                            <button>Réserver</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default reservation;