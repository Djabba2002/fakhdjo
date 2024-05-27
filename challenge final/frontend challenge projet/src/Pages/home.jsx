import React from 'react';
import './styles.css';

// Importation des images
import parisImg from '../assets/paris.jpg';
import moscouImg from '../assets/moscou.jpg';
import miamiImg from '../assets/Miami.jpg';
import losAngelesImg from '../assets/los-angeles.jpg';
import romeImg from '../assets/rome.jpg';
import tokyoImg from '../assets/tokio.jpg';
import videoSrc from '../assets/video.mp4';

const Home = () => {
    return (
        <div>
            <header>
                <div className="logo">
                    <a href="index.html"> <span>Air</span> Travel</a>
                </div>
                <ul className="menu">
                    <li><a href="#">Acceuil</a></li>
                    <li><a href="#a-propos">à propos</a></li>
                    <li><a href="#popular-destination">destinations</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
                <a href="#" className="btn-reservation">Réserver Maintenant</a>

                <div className="responsive-menu"></div>
            </header>
            {/* Acceuil section */}
            <section id="home">
                <h2>Air Travel</h2>
                <h4>Voyagez en Sécurité</h4>
                <p>Voyagez en sécurité en planifiant soigneusement vos itinéraires, en restant informé des conditions locales et en suivant les conseils des autorités.</p>
                <p>Réserver Maintenant</p>
                <a className="btn-reservation home-btn">Réserver Maintenant</a>
                <div className="find_trip">
                    <form action="">
                        <div>
                            <label>Pays</label>
                            <input type="text" placeholder="Entrez un Pays" />
                        </div>
                        <div>
                            <label>Ville</label>
                            <input type="text" placeholder="Entrez une ville" />
                        </div>
                        <div>
                            <label>Région</label>
                            <input type="text" placeholder="Entrez une région" />
                        </div>
                        <input type="submit" value="voir" />
                    </form>
                </div>
            </section>

            {/* A propos section */}
            <section id="a-propos">
                <h1 className="title">à propos</h1>
                <div className="img-desc">
                    <div className="left">
                    <video src={videoSrc} autoPlay loop></video>
                    </div>
                    <div className="right">
                        <h3>Nous voyageons pour chercher d'autres états, d'autres vies, d'autres, âmes.</h3>
                        <p>voyager nous permet de découvrir de nouveaux états d'esprit et émotions en sortant de notre quotidien pour voir les choses sous un nouvel angle. En rencontrant des personnes et des cultures variées, nous enrichissons notre compréhension du monde et découvrons des modes de vie différents. </p>
                        <a href="#">Lire Plus</a>
                    </div>
                </div>
            </section>

            {/* Section destination */}
            <section id="popular-destination">
                <h1 className="title">destinations populaires</h1>
                <div className="content">
                    {/* box */}
                    <div className="box">
                        <img src={parisImg} alt="Paris" />
                        <div className="content">
                            <div>
                                <h4>Paris</h4>
                                <p>C'est une ville riche en histoire, culture et art,.</p>
                                <p> offrant une expérience inoubliable à chaque visiteur</p>
                                <a href="#">Réserver</a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <img src={moscouImg} alt="Moscou" />
                        <div className="content">
                            <div>
                                <h4>Moscou</h4>
                                <p>Moscou, capitale de la Russie, est célèbre pour le Kremlin, la Place Rouge, et la Cathédrale Saint-Basile</p>
                                <p>Ville historique et culturelle, elle offre de nombreux musées et parcs..</p>
                                <a href="#">Réserver</a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <img src={miamiImg} alt="Miami" />
                        <div className="content">
                            <div>
                                <h4>Miami</h4>
                                <p>Miami, située en Floride, est connue pour ses plages, sa vie nocturne animée, et son ambiance multiculturelle</p>
                                <p> Elle offre également une architecture Art déco unique et une scène artistique florissante.</p>
                                <a href="#">Réserver</a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <img src={losAngelesImg} alt="Los-Angeles" />
                        <div className="content">
                            <div>
                                <h4>Los-Angeles</h4>
                                <p>Los Angeles est célèbre pour Hollywood, ses plages ensoleillées,.</p>
                                <p> et son industrie du divertissement.</p>
                                <a href="#">Réserver</a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <img src={romeImg} alt="Rome" />
                        <div className="content">
                            <div>
                                <h4>Rome</h4>
                                <p>Rome, la capitale italienne, est riche en histoire avec des monuments comme le Colisée et le Vatican,</p>
                                <p> et une cuisine délicieuse..</p>
                                <a href="#">Réserver</a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <img src={tokyoImg} alt="Tokyo" />
                        <div className="content">
                            <div>
                                <h4>Tokyo</h4>
                                <p>Tokyo, la capitale du Japon, allie modernité et tradition avec ses gratte-ciels</p>
                                <p>temples historiques, et cuisine renommée.</p>
                                <a href="#">Réserver</a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                </div>
            </section>

            {/* Contact section */}
            <section id="contact">
                <h1 className="title">Contact</h1>
                <form action="">
                    <div className="left-right">
                        <div className="left">
                            <label>Nom Complet</label>
                            <input type="text" />
                            <label>Objet</label>
                            <input type="text" />
                            <label>Email</label>
                            <input type="text" />
                            <label>Message</label>
                            <textarea cols="30" rows="10"></textarea>
                        </div>
                        <div className="right">
                            <label>Numéro</label>
                            <input type="text" />
                            <label>Date</label>
                            <input type="text" />
                            <label>Autres Details</label>
                            <input type="text" />
                            <label>Adresse</label>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647531560805!5m2!1sfr!2sfr"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                    <button>Envoyer</button>
                </form>
            </section>

            <script>
                {`
                var toggle_menu = document.querySelector('.responsive-menu');
                var menu = document.querySelector('.menu');
                toggle_menu.onclick = function() {
                    toggle_menu.classList.toggle('active');
                    menu.classList.toggle('responsive');
                }
                `}
            </script>
        </div>
    );
}

export default Home;
