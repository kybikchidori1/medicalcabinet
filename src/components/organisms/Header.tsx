import { FC } from "react";
import * as React from "react";

const Header: FC = () => {
  return (
    <div className="main-page__header">
      <div className="header-bottom__title">Мой профиль</div>
      <div className="header-bottom__menu">
        <div className="header-bottom__search">
          <img
            src="my-app/src/etc/img/search.svg"
            alt=""
            width="50"
            height="50"
          />
        </div>
        <div className="header-bottom__bell">
          <img src="" alt="" />
        </div>
        <div className="header-bottom__eye">
          <img src="" alt="" />
        </div>
        <div className="header-bottom__avatar">
          <img src="" alt="" />
        </div>
        <div className="header-bottom__group">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
