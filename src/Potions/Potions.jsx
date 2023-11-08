import React from 'react';
import styles from './potions.module.scss'

const Potions = () => {
    return (
        <main className={styles.container}>
            <div className={styles.logo}>
                <img src="/images/potions/logo.png" alt="fantashop logo" />
                <h1>Potions</h1>
            </div>
            <section className={styles.market}>
                <form className={styles.form}>
                    <input className={styles.input} type="text" placeholder='Nom du joueur' />
                    <select defaultValue="Type de potion souhaité" className={styles.input} name="potion" id="potion-select">
                        <option disabled selected hidden value="">Type de potion souhaité</option>
                        <option value="heal">heal III</option>
                        <option value="fireresistance">fire resistance</option>
                    </select> 
                    <input className={styles.input} type="number" placeholder='Quantité' />
                    <input type="submit" value="Commander" />
                </form>
                <div className={styles.trait} />
                <div className={styles.potions}>
                    <img src="/images/potions/heal.png" alt="heal potion" />
                    <img src="/images/potions/fire-resistance.png" alt="fire resistance potion" />
                </div>
            </section>
            
        </main>
    );
};

export default Potions;