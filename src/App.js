import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import ArticleList from './components/ArticleList';
import SingleArticle from './components/SingleArticle';
import Users from './components/Users';
import Weather from './components/Weather';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="Pictures">
      </div>
      <Nav />
        <Routes>
          <Route path='/' element={ <Weather /> } />
          <Route path='/articles' element={ <ArticleList /> } />
          <Route path='/articles/:article_id' element={ <SingleArticle /> } />
          <Route path='/users' element={ <Users /> } />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;