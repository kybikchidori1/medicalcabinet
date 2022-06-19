import React, { FC } from "react";

const Sidebar: FC = () => {
  return (
    <div className="main-page__side-bar">
      <div className="side-bar__items">
        <div>Логотип</div>
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
  );
};

export default Sidebar;
