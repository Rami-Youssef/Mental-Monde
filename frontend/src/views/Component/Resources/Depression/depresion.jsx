import React from 'react';
import './DepressionPage.scss';

const DepressionPage = () => {
    return (
        <div className="depression-page">
            <main className="content">
                <section className="what-is-depression">
                    <h2>Qu'est-ce que la dépression ?</h2>
                    <img 
                        src="pic2.png" 
                        alt="Comprendre la dépression" 
                        className="image" 
                    />
                    <p>
                        La dépression est un trouble mental courant mais grave qui affecte la façon dont une personne se sent, pense et gère ses activités quotidiennes. 
                        Elle se caractérise par une tristesse persistante, une perte d'intérêt pour les activités et une gamme de symptômes émotionnels et physiques.
                    </p>
                    <p>
                        Les causes de la dépression peuvent être multiples : facteurs biologiques, génétiques, environnementaux ou psychologiques. Elle peut également être déclenchée par des événements de vie stressants comme la perte d'un être cher, des conflits relationnels ou des difficultés financières.
                    </p>
                </section>

                <section className="how-to-fix">
                    <h2>Comment surmonter la dépression</h2>
                    <img 
                        src="pic1.jpg" 
                        alt="Étapes pour surmonter la dépression" 
                        className="image" 
                    />
                    <p>
                        Bien que surmonter la dépression puisse être difficile, voici quelques étapes qui peuvent aider :
                    </p>
                    <ul>
                        <li>Consultez un professionnel, comme un thérapeute ou un conseiller.</li>
                        <li>Envisagez un traitement médicamenteux sous la supervision d'un psychiatre.</li>
                        <li>Pratiquez une activité physique régulière pour améliorer votre humeur.</li>
                        <li>Adoptez une alimentation saine et équilibrée.</li>
                        <li>Créez un réseau de soutien avec votre famille et vos amis.</li>
                        <li>Pratiquez la pleine conscience, la méditation ou des techniques de réduction du stress.</li>
                        <li>Fixez de petits objectifs réalisables et célébrez vos progrès.</li>
                    </ul>
                    <p>
                        Il est également important d'éviter l'isolement. Essayez de rester connecté avec vos proches, même si cela peut sembler difficile. Des activités créatives comme l'art, la musique ou l'écriture peuvent aussi servir de moyen d'expression et de soulagement.
                    </p>
                </section>

                <section className="additional-resources">
                    <h2>Ressources supplémentaires</h2>
                    <p>
                        Si vous ou quelqu'un que vous connaissez souffrez de dépression, voici quelques ressources qui pourraient être utiles :
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

export default DepressionPage;
