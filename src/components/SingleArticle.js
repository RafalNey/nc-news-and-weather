import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleArticle } from '../utils/api';
import Votes from './Votes';

const SingleArticle = (props) => {

    const { article_id, title, body, author, votes } = useParams;
    const [article, setArticle] = useState({});

    useEffect(() => {
        getSingleArticle(article_id)
        .then((res) => {
        setArticle(res);
        });
    }, [article_id]);

    return(
        <div>
            <h2>{title}</h2>
            <h4>author: {author}</h4>
            <p>{body}</p>
            <Votes votes={votes} article_id={article_id}/>
        </div>
    )
}

export default SingleArticle;