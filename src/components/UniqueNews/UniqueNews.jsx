import React, {useEffect, useRef} from 'react';
import useWindowDimensions from '../hooks/useDimension';
import styles from './uniqueNews.module.scss'

const UniqueNews = ({title, date, author, content, image}) => {
    let text = useRef(null)

    const { width } = useWindowDimensions();

    const openText = () => {
        text.classList.remove(styles.tooLong)
    }

    useEffect(() =>{
        if(width<1200){
            console.log(width);
            console.log(content);
            if(content.length > 150){
                text.classList.add(styles.tooLong)
            }
        }else{
            if(content.length > 340){
                text.classList.add(styles.tooLong)
            }
        }

    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.infos}>
                    <div>
                        <h2>{title}</h2>
                        <p>{`(Publié le ${date})`}</p>
                    </div>
                    <div className={styles.author}>
                        <img src="/images/news/writeImg.png" alt="pencil" />
                        <p>Ecrit par {author}</p>

                    </div>
                </div>
                <div className={styles.trait} />
                <div ref={el => {text = el}} className={styles.text}>
                    <p>{content}</p>
                    {(image)? <img src={image} alt={`about ${title}`} />: false}
                    <button onClick={() => openText()}>Lire la suite</button>
                </div>
            </div>
        </div>
    );
};

export default UniqueNews;