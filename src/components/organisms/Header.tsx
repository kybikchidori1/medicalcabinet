import { FC } from "react";
import * as React from "react";
import Search from "../../etc/img/icons/Search";
import Bell from "../../etc/img/icons/Bell";
import Eye from "../../etc/img/icons/Eye";
import Group from "../../etc/img/icons/Group";

const Header: FC = () => {
  return (
    <div className="header">
      <div className="header__title">Мой профиль</div>
      <div className="header__menu">
        <div className="header__item">
          <Search />
        </div>
        <div className="header__item">
          <Bell />
        </div>
        <div className="header__item">
          <Eye />
        </div>
        <div className="header__item">
          <button className="header__avatar-btn"></button>
        </div>
        <div className="header__group">
          <Group />
        </div>
      </div>
    </div>
  );
};

export default Header;
