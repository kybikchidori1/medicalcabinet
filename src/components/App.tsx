import React, { FC } from "react";
import "../styles/App.scss";
import Header from "./organisms/Header";
import Sidebar from "./organisms/Sidebar";

const App: FC = () => {
  return (
    <>
      <div className="main-page">
        <div className="main-page__body">
          <Sidebar />
          <div className="main-page__navbar">
            <Header />
            <div className="main-page__box-content">MAIN CONTENT</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
