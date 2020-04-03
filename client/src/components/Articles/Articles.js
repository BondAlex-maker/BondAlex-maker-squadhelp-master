import React from 'react';
import styles from "./Articles.module.sass";
import articles from "../../articles.json";

const Articles = () => {
    return (<>
        {articles.map((article, index) => {
                return (
                    <article className={ styles.ColumnContainer } key={`article${index}`}>

                        <h4 className={styles.headerArticle}>{article.title}</h4>
                        <p className={styles.article}>
                            {article.body}
                        </p>
                    </article> )}
            )}
            </>

    );
};

export default Articles;
