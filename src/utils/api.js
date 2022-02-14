import axios from 'axios';

const basicApi = axios.create({
    baseURL: 'https://nc-example-back-end.herokuapp.com/api',
});

export const getTopics = () => {
    return basicApi.get('/topics')
    .then((res) => {
        return res.data.topics;
    });
};

export const getArticles = (topic, sort_by, order) => {
    return basicApi.get('/articles', {
        params: { topic, sort_by, order }})
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

export const patchArticle = (article_id) => {
    return basicApi.patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then((res) => {
        return res.data.article.votes;
    });
};

export const getComments = (article_id) => {
    return basicApi.get(`/articles/${article_id}/comments`)
    .then((res) => {
        return res.data.comments;
    });
};

export const getUsers = () => {
    return basicApi.get('/users')
    .then((res) => {
        return res.data.users;
    });
};
