import React from 'react';
import './OcdPage.scss';

const OcdPage = () => {
    return (
        <div className="ocd-page">
            <main className="content">
                <section className="what-is-ocd">
                    <h2>Qu'est-ce que le trouble obsessionnel-compulsif (TOC) ?</h2>
                    <img 
                        src="pic2.png" 
                        alt="Comprendre le TOC" 
                        className="image" 
                    />
                    <p>
                        Le trouble obsessionnel-compulsif (TOC) est un trouble mental où une personne éprouve des pensées obsessionnelles, suivies de comportements compulsifs qu’elle utilise pour tenter de réduire l'anxiété provoquée par ces pensées.
                    </p>
                    <p>
                        Les obsessions sont des pensées ou des images intrusives, répétitives, et souvent anxiogènes. Les compulsions, quant à elles, sont des actions ou des rituels que la personne se sent obligée de réaliser pour soulager l'anxiété.
                    </p>
                </section>

                <section className="how-to-fix">
                    <h2>Comment surmonter le TOC</h2>
                    <img 
                        src="pic1.jpg" 
                        alt="Étapes pour surmonter le TOC" 
                        className="image" 
                    />
                    <p>
                        Bien que le TOC puisse être difficile à gérer, voici quelques étapes qui peuvent aider :
                    </p>
                    <ul>
                        <li>Consultez un professionnel, comme un psychologue ou un psychiatre.</li>
                        <li>Envisagez une thérapie cognitivo-comportementale (TCC) pour mieux gérer les obsessions et compulsions.</li>
                        <li>Suivez un traitement médicamenteux si recommandé par un spécialiste.</li>
                        <li>Pratiquez des techniques de relaxation pour réduire l'anxiété.</li>
                        <li>Restez connecté avec un réseau de soutien, comme des amis ou des groupes de soutien.</li>
                        <li>Fixez de petits objectifs et célébrez chaque progrès dans la gestion du TOC.</li>
                    </ul>
                    <p>
                        Il est aussi essentiel de se rappeler que l'isolement peut aggraver le TOC. Maintenez une vie sociale active, même si cela demande des efforts.
                    </p>
                </section>

                <section className="additional-resources">
                    <h2>Ressources supplémentaires</h2>
                    <p>
                        Si vous ou quelqu'un que vous connaissez souffrez de TOC, voici quelques ressources utiles :
                    </p>
                    <ul>
                        <li>
                            <a 
                                href="https://www.who.int/fr" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Organisation mondiale de la santé (OMS)
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://www.psychologies.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Psychologies Magazine
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://www.apa.org" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                American Psychological Association
                            </a>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default OcdPage;
