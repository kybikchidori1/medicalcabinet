import React, { FC } from "react";
import "../styles/App.scss";

const App: FC = () => {
  return (
    <>
      <div className="main-page">
        <div className="main-page__header">Логотип</div>
        <div className="main-page__body">
          <div className="main-page__side-bar">
            <div className="side-bar__items">
              <div>Профиль</div>
              <div>Врачи и клиники</div>
              <div>Сообщения</div>
              <div>Тестирование</div>
              <div>Полезно знать</div>
              <button>Подать заявку</button>
              <div>
                <a className="help" href="/">
                  Помощь
                </a>
              </div>
              <div>APPVELOX</div>
            </div>
          </div>
          <div className="main-page__box-content">MAIN CONTENT</div>
        </div>
      </div>
    </>
  );
};

export default App;
