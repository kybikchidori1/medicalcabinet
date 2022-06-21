import React, { FC } from "react";
import Book from "../../etc/img/icons/Book";
import Heart from "../../etc/img/icons/Heart";
import Speak from "../../etc/img/icons/Speak";
import Test from "../../etc/img/icons/Test";
import Vector from "../../etc/img/icons/Vector";

const Sidebar: FC = () => {
  return (
    <div className="side-bar">
      <div className="side-bar__item">
        <div className="side-bar__logo">Логотип</div>
        <div className="side-bar__link">
          <Heart />
          Профиль
        </div>
        <div className="side-bar__link">
          <Vector />
          Врачи и клиники
        </div>
        <div className="side-bar__link">
          <Speak />
          Сообщения
        </div>
        <div className="side-bar__link">
          <Test />
          Тестирование
        </div>
        <div className="side-bar__link">
          <Book />
          Полезно знать
        </div>
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
