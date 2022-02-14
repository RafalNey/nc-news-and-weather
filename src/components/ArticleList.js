import React, { useState, useEffect } from 'react';
import { getArticles, getTopics } from '../utils/api';
import { Link } from 'react-router-dom';

const ArticleList = () => {
    
    const [articles, setArticles] = useState([]);
    const [sortBy, setSortBy] = useState('created_at');
    const [topics, setTopics] = useState('coding');
    const [page, setPage] = useState(1);

    useEffect(() => {
        getArticles(topics, sortBy)
        .then((res) => {
            setArticles(res);
        });
    }, []);
    return(
        <main>
            <h2>List of Articles</h2>
            <h3>sort by: </h3>
            <button onClick={() => setSortBy('article.created_at')}>Date</button>
            <button onClick={() => setSortBy('article.topic')}>Topic</button>
            <button onClick={() => setSortBy('article.author')}>Author</button>
            <ul>
                { articles.map((article) => {
                    return(
                        <Link key={article.article_id} to={`/articles/${article.article_id}`}>
                            <li>{article.title}</li>
                        </Link>
                    );
                })}
            </ul>
            <button onClick={() => setPage((currPage) => currPage - 1 )}></button>
            <span>page:{page}</span>
            <button onClick={() => setPage((currPage) => currPage + 1 )}></button>
        </main>
    );  
};

export default ArticleList;