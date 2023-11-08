import React from 'react';
import styles from '../../news/news.module.scss'
import UniqueNews from '../UniqueNews/UniqueNews';

const NewsList = ({newsList, loading}) => {

    const dateParser = (date) => {
        return new Date(date).toLocaleDateString('fr-FR', {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        })
    }

    return (
        <div className={styles.newsList}>
            {
                (!loading)?
                newsList.map((news) => (
                    <UniqueNews key={news.id} title={news.title} date={dateParser(news.date)} author={news.author} content={news.content} image={news.attachement} />
                ))
                :
                <div>
                    <img className={styles.loadingNews} src='/images/news/loading.png' alt='loading news' />
                    <img className={styles.loadingNews} src='/images/news/loading.png' alt='loading news' />
                    <img className={styles.loadingNews} src='/images/news/loading.png' alt='loading news' />
                </div>
            }
        </div>
    );
};

export default NewsList;