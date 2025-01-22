import React from 'react';
import './SchizophreniaPage.scss';

const SchizophreniaPage = () => {
    return (
        <div className="schizophrenia-page">
            <main className="content">
                <section className="what-is-schizophrenia">
                    <h2>Qu'est-ce que la schizophrénie ?</h2>
                    <img 
                        src="pic2.png" 
                        alt="Comprendre la schizophrénie" 
                        className="image" 
                    />
                    <p>
                        La schizophrénie est un trouble mental grave qui affecte la façon dont une personne pense, se sent et agit. 
                        Les personnes atteintes de schizophrénie peuvent avoir des pensées et des perceptions qui sont fortement altérées, telles que des hallucinations et des délires.
                    </p>
                    <p>
                        Les causes de la schizophrénie sont complexes et incluent des facteurs génétiques, biologiques et environnementaux. Elle peut aussi être déclenchée par des facteurs de stress tels que des événements traumatiques ou des problèmes familiaux.
                    </p>
                </section>

                <section className="how-to-fix">
                    <h2>Comment gérer la schizophrénie</h2>
                    <img 
                        src="pic1.jpg" 
                        alt="Étapes pour gérer la schizophrénie" 
                        className="image" 
                    />
                    <p>
                        Bien que la schizophrénie soit une condition à long terme, il existe des moyens de gérer la maladie et d'améliorer la qualité de vie. Voici quelques étapes à suivre :
                    </p>
                    <ul>
                        <li>Consultez un psychiatre pour un diagnostic et un plan de traitement personnalisé.</li>
                        <li>Suivez un traitement médicamenteux adapté, tel que des antipsychotiques, sous la supervision d'un médecin.</li>
                        <li>Participez à des thérapies cognitives et comportementales pour mieux comprendre et gérer vos symptômes.</li>
                        <li>Adoptez une routine quotidienne structurée pour vous aider à mieux gérer vos activités.</li>
                        <li>Rejoignez un groupe de soutien pour partager vos expériences avec d'autres personnes vivant avec la schizophrénie.</li>
                        <li>Maintenez un mode de vie sain avec une alimentation équilibrée et une activité physique régulière.</li>
                    </ul>
                    <p>
                        Il est essentiel de rester en contact avec vos proches et de rechercher un soutien émotionnel. Des activités créatives comme l'art ou la musique peuvent également aider à réduire le stress et à améliorer votre bien-être mental.
                    </p>
                </section>

                <section className="additional-resources">
                    <h2>Ressources supplémentaires</h2>
                    <p>
                        Si vous ou quelqu'un que vous connaissez souffrez de schizophrénie, voici quelques ressources utiles :
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
                                href="https://www.schizophrenia.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Schizophrenia.com
                            </a>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default SchizophreniaPage;
