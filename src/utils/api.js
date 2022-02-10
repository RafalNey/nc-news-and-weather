import axios from 'axios';

const basicApi = axios.create({
    baseURL: 'https://nc-example-back-end.herokuapp.com/api',
});

export const getArticles = () => {
    return basicApi.get('/articles')
    .then((res) => {
        return res.data.articles;
    });
};

export const getSingleArticle = (article_id) => {
    return basicApi.get(`/articles/${article_id}`)
    .then ((res) => {
        return res.data.article;
    });
};

export const getUsers = () => {
    return basicApi.get('/users')
    .then((res) => {
        return res.data.users;
    });
};

export const patchArticle = (article_id) => {
    return basicApi.patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then((res) => {
        return res.data.article;
    });
};
