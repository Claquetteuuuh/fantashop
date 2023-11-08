import React from 'react';
import styles from './pagination.module.scss'

const Pagination = ({newsPerPage, totalNews, paginate, current, loading}) => {
    
    const pageNumbers = []

    for(let i = 1; i<= Math.ceil(totalNews / newsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav className={styles.paginationNav}>
            {(!loading)?
                <ul>
                    {pageNumbers.map(number => (
                        <li className={(current === number)? styles.current : styles.normal} onClick={() => paginate(number)} key={number}>
                            <p >
                                {number}
                            </p> 
                        </li>
                    ))}
                </ul>
                :
                false
            }
        </nav>

    );
};

export default Pagination;