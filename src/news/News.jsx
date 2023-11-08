import React, { useEffect, useRef, useState } from 'react';
import styles from './news.module.scss'
import {gsap} from 'gsap'
import axios from 'axios'
import NewsList from '../components/NewsList/NewsList';
import Pagination from '../components/Pagination/Pagination';

const News = () => {

    const NEWS_PER_PAGE = 4
    const [currentPage, setCurrentPage] = useState(1)

    let discord = useRef(null)
    let support = useRef(null)
    let account = useRef(null)

    const [loading, setLoading] = useState(true)
    const [discordMember, setDiscordMember] = useState(0)
    const [supportTotal, setSupportTotal] = useState(0)
    const [accountTotal, setAccountTotal] = useState(0)
    const [news, setNewsList] = useState([])

    const getStats = () => {
        axios.get("https://api.fantashop.fr/discord/count")
            .then(res => setDiscordMember(res.data))

        axios.get("https://api.fantashop.fr/site/count")
            .then(res => setAccountTotal(res.data))

        axios.get("https://api.fantashop.fr/support/count")
            .then(res => setSupportTotal(res.data))
    }

    const getNews = () => {
        axios.get("https://api.fantashop.fr/news/")
            .then(res => {
                setNewsList(res.data.reverse())
                setLoading(false)
            })
            
    }

    useEffect(() => {
        gsap.from(discord,{
            opacity: 0,
            duration: .5,
            scale: 1.6
        })
        gsap.from(support,{
            opacity: 0,
            duration: .5,
            scale: 1.6,
            delay: .5
        })
        gsap.from(account,{
            opacity: 0,
            duration: .5,
            scale: 1.6,
            delay: 1
        })


        getStats();
        setInterval(getStats, 4000)

        getNews();
        setInterval(getNews, 4000)
        
    }, [])

    const indexOfLastNews = currentPage * NEWS_PER_PAGE
    const indexOfFirstNews = indexOfLastNews - NEWS_PER_PAGE
    const currentNews = news.slice(indexOfFirstNews, indexOfLastNews)


    const paginate = (pageNumber) => {
        window.location.href = "#"
        setCurrentPage(pageNumber)
    }

    return (
        <div className={styles.container}>
            <h1>News</h1>
            <main className={styles.content}>
                <div className={styles.phoneImg}>
                    <img src="/images/news/temple.png" alt="minecraft temple image" />
                </div>
                <div className={styles.newsAndPagination}>
                    <NewsList loading={loading} newsList={currentNews} />
                    <Pagination loading={loading} current={currentPage} paginate={paginate} newsPerPage={NEWS_PER_PAGE} totalNews={news.length} />
                </div>
                <div className={styles.stats}>
                    <div className={styles.trait}/>
                    <div className={styles.statsList}>
                        <div ref={el => {discord = el}} className={styles.discordMember}>
                            <p>{discordMember}</p>
                            <p>Membres sur discord</p>
                        </div>
                        <div ref={el =>{support = el}} className={styles.supportMember}>
                            <p>{supportTotal}</p>
                            <p>Membres sur le support</p>
                        </div>
                        <div ref={el => {account = el}} className={styles.account}>
                            <p>{accountTotal}</p>
                            <p>Comptes</p>
                        </div>
                        <div className={styles.image}>
                            <img src="/images/news/island.png" alt="minecraft island image" />
                        </div>
                    </div>
                </div>
                
            </main>
        </div>
    );
};

export default News;