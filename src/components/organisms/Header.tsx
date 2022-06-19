import React, { FC } from "react";

const Header: FC = () => {
  return (
    <div className="main-page__header">
      <div>Мой профиль</div>
      <ul>
        <li>Поиск</li>
        <li>Уведомления</li>
        <li>Для глазастых</li>
        <li>Аватар</li>
      </ul>
    </div>
  );
};

export default Header;
