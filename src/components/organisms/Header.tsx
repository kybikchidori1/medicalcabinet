import { FC } from "react";
import * as React from "react";
import Search from "../../etc/img/icons/Search";
import Bell from "../../etc/img/icons/Bell";
import Eye from "../../etc/img/icons/Eye";
import Group from "../../etc/img/icons/Group";

const Header: FC = () => {
  return (
    <div className="main-page__header">
      <div className="header-bottom__title">Мой профиль</div>
      <div className="header-bottom__menu">
        <div className="header-bottom__item">
          <Search />
        </div>
        <div className="header-bottom__item">
          <Bell />
        </div>
        <div className="header-bottom__item">
          <Eye />
        </div>
        <div className="header-bottom__item">
          <button className="header-bottom__avatar-btn"></button>
        </div>
        <div className="header-bottom__group">
          <Group />
        </div>
      </div>
    </div>
  );
};

export default Header;
