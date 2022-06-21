import React, { FC } from "react";

const Sidebar: FC = () => {
  return (
    <div className="side-bar">
      <div className="side-bar__item">
        <div className="side-bar__logo">Логотип</div>
        <div className="side-bar__link">Профиль</div>
        <div className="side-bar__link">Врачи и клиники</div>
        <div className="side-bar__link">Сообщения</div>
        <div className="side-bar__link">Тестирование</div>
        <div className="side-bar__link">Полезно знать</div>
        <button className="side-bar__btn">Подать заявку</button>
        <div>
          <a className="side-bar__help" href="/">
            Помощь
          </a>
        </div>
        <div className="side-bar__appvelox">APPVELOX</div>
      </div>
    </div>
  );
};

export default Sidebar;
