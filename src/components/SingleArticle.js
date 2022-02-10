import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleArticle } from '../utils/api';
import Votes from './Votes';




const SingleArticle = (props) => {

    const { article_id, title, body, topic, author, votes, created_at, comment_count } = props.article;
    let dzien = new Date({created_at}).toLocaleTimeString();
    const [article, setArticle] = useState({});

    useEffect(() => {
        getSingleArticle(article_id)
        .then((res) => {
        setArticle(res);
        });
    }, [article_id]);

    return(
        <div>
            <h2>{article.title}</h2>
            <h4>author: {article.author}</h4>
            <p>{article.body}</p>
            <Votes votes={article.votes} article_id={article.article_id}/>
        </div>


    )
}

export default SingleArticle;