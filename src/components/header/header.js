import '/workspaces/Guild/src/components/header/header-styles.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from '/workspaces/Guild/src/pages/Main.js';
import News from '/workspaces/Guild/src/pages/News.js';
import Reviews from '/workspaces/Guild/src/pages/Reviews.js';
import Wiki from '/workspaces/Guild/src/pages/Wiki.js';
import Profile from '/workspaces/Guild/src/pages/Profile.js';

export default () => {
    return (
    <>
    <header>
        <nav>
          <ol>
            <li><a href="/">Главная</a></li>
            <li><a href="/news">Новости</a></li>
            <li><a href="/reviews">Обзоры</a></li>
            <li><a href="/wiki">Вики</a></li>
            <li><a href="/profile">Профиль</a></li>
            <li><a>📅</a></li>
            <li>
              <form>
              <input type="search" placeholder="Поиск:"/>
              </form>
            </li>
          </ol>
        </nav>
    </header>
      <Router>
    <Routes>
      <Route exact path="/" element={<Main/>}/>
      <Route exact path="/news" element={<News/>}/>
      <Route exact path="/reviews" element={<Reviews/>}/>
      <Route exact path="/wiki" element={<Wiki/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
    </Routes>
  </Router>
  </>
)
}