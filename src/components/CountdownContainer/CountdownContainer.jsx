import React from 'react';
import styles from './countdownContainer.module.scss'
import axios from 'axios'
import {useState, useEffect} from 'react'
import AnimatedNumber from 'animated-number-react'
import useWindowDimensions from '../hooks/useDimension'

const CountdownContainer = ({objectif}) => {

    const ROAD_TO = objectif

    const [loading, setloading] = useState(true)
    const [discordCount, setdiscordCount] = useState(0)

    const { width } = useWindowDimensions();
    
    const getMember = () => {
        axios.get("https://api.fantashop.fr/discord/count")
        .then(res => {
            setdiscordCount(res.data)
            setloading(false)
        })
    } 

    useEffect(() => {
        getMember();
        setInterval(getMember, 4000)
    }, [])



    return (
        <main className={styles.container}>
            <div className={styles.title}>
                <span><img src="/images/countdown/Flogo.svg" alt="F vector" /><h1>ANTASHOP</h1></span>
                <h2>Road to {ROAD_TO/1000}k</h2>
            </div>
            <div className={styles.countContainer}>
                {(width > 680)? <img src="/images/countdown/Party-rectangle.svg" alt="party rectangle" /> : <img src="/images/countdown/Party-rectangle-phone.svg" alt="party rectangle for phone" />}
                
                {

                    (!loading)?
                        (ROAD_TO-discordCount > 0)?
                        <div className={styles.last}>
                            <p><AnimatedNumber value={ROAD_TO - discordCount} formatValue={n => n.toFixed(0)} /> membre{(ROAD_TO-discordCount > 1)?"s":false}</p>
                            <p>Restant{(ROAD_TO-discordCount > 1)?"s":false}</p>
                        </div>
                        :
                        <div className={styles.last}>
                            <p>Bravo <span className={styles.emoji}>✅</span>!</p>
                            <p>Merci !</p>
                        </div>
                    :
                    false
                }
                
            </div>
            {
                (width < 1180)? 
                <a target={"_blank"} rel="noreferrer" href='https://discord.gg/UGutcWfxMW' className={styles.inviteContainer}>
                    <div className={styles.leftInvite}><img src="/images/countdown/add-user.svg" alt="svg discord add member" /></div>
                    <div className={styles.rightInvite}><p>Inviter des gens</p></div>
                </a>
                :
                false
            }
        </main>
    );
};

export default CountdownContainer;