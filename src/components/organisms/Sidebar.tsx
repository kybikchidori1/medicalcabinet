import React, { FC } from "react";
import Book from "../../etc/img/icons/Book";
import Heart from "../../etc/img/icons/Heart";
import Help from "../../etc/img/icons/Help";
import Speak from "../../etc/img/icons/Speak";
import Test from "../../etc/img/icons/Test";
import Vector from "../../etc/img/icons/Vector";

const Sidebar: FC = () => {
  return (
    <div className="side-bar">
      <div className="side-bar__item">
        <div className="side-bar__logo">Логотип</div>
        <div className="side-bar__link">
          <Heart className="side-bar__icon" />
          Профиль
        </div>
        <div className="side-bar__link">
          <Vector className="side-bar__icon" />
          Врачи и клиники
        </div>
        <div className="side-bar__link">
          <Speak className="side-bar__icon" />
          Сообщения
        </div>
        <div className="side-bar__link">
          <Test className="side-bar__icon" />
          Тестирование
        </div>
        <div className="side-bar__link">
          <Book className="side-bar__icon" />
          Полезно знать
        </div>
        <button className="side-bar__btn">Подать заявку</button>
        <div className="side-bar__">
          <a href="/" className="side-bar__help">
            <Help />
            Помощь
          </a>
        </div>
        <div className="side-bar__appvelox">APPVELOX</div>
      </div>
    </div>
  );
};

export default Sidebar;
