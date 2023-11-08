import React from 'react';
import styles from './presentation.module.scss'

const Presentation = () => {
    return (
        <div className={styles.container} >
            <div className={styles.title}>
                <img src="/images/presentation/logo.png" alt="logo fantashop with vector as F" />
                <h1>Presentation</h1>
            </div>
            <section className={styles.info}>
                <div className={styles.notStats}>
                    <div>
                        <img src="images/presentation/medaille.svg" alt="medaille" />
                        <p>Premier</p>
                        <p>shop de paladium</p>
                    </div>
                    <div>
                        <img src="/images/presentation/server.svg" alt="server svg" />
                        <p>Grandes interfaces</p>
                        <p>(Site web / Discord / Support)</p>
                    </div>
                    <div>
                        <img src="/images/presentation/medaille-grade.svg" alt="" />
                        <p>Premier grade premium</p>
                        <p>(+ de 400 Gradés à la dernière saison)</p>

                    </div>
                </div>
                <div className={styles.stats}>
                    <div>
                        <p>+4275</p>
                        <p>Membres</p>
                    </div>
                    <div>
                        <p>+2319</p>
                        <p>Comptes</p>
                    </div>
                    <div>
                        <p>+70</p>
                        <p>Staff</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Presentation;