import './App.css';
import home1 from './style/images/art/home-1.jpg';
import home2 from './style/images/art/home-2.jpg';
import home3 from './style/images/art/home-3.jpg';
import home4 from './style/images/art/home-4.jpg';


function App() {
  return (
    <div id="container">
  <div id="page-top">
    <div id="header-wrapper">
      <div id="header">
        <div id="menu-wrapper">
          <div id="smoothmenu1" className="ddsmoothmenu">
            <ul>
              <li><a href="index.html" className="selected">Главная</a></li>
              <li><a href="portfolio.html">Галерея</a></li>
              <li><a href="contact.html">Регистрация</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="wrapper">
    <div id="about">
      <div>
        <h1>Последние добавленные картины:</h1>
      </div>
      <div className="one-fourth"><a href="index.html"><img src={home1} alt="" /></a>
        <h4>Первая картина</h4>
        <p>Описание первой картины</p>
      </div>
      <div className="one-fourth"><a href="index.html"><img src={home2} alt="" /></a>
        <h4>Вторая картина</h4>
        <p>Описание второй картины</p>
      </div>
      <div className="one-fourth"><a href="index.html"><img src={home3} alt="" /></a>
        <h4>Третья картина</h4>
        <p>Описание третьей картины</p>
      </div>
      <div className="one-fourth last"><a href="index.html"><img src={home4} alt="" /></a>
        <h4>Четвертая картина</h4>
        <p>Описание четвертой картины</p>
      </div>
    </div>
  </div>
  <div className="clearfix"></div>
  <div className="push"></div>
</div>
  );
}

export default App;
