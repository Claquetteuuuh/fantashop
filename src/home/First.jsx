import React, { useEffect, useState } from "react";
import FantaSpace from './FantaSpace/FantaSpace';
import Home from './HomePage/Home';
import Recruitements from './Recruitements/Recruitements';

const OnePage = () => {
    const [lastmaj, setlastmaj] = useState([]);


    useEffect(() => {
        fetch('https://api.fantashop.fr/news/maj')
            .then(res => res.json())
            .then(res => setlastmaj(res))
    },[])

    return (
        <main>
            <Home />
            <FantaSpace lastmaj={lastmaj} />
            <a href="https://discord.gg/6RW7dMTU2d" style={{ display: "flex", justifyContent: "center" }}>
                <img src="./images/background_giveaway.png" alt="" width="70%" />
            </a>
            <Recruitements />
        </main>
    );
};

export default OnePage;