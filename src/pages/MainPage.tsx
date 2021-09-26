import React from "react";
import "./styles/mainPage.css";

const MainPage: React.FC = () => {
  return (
    <div className="container main-page">
      <div className="main-page-title">
        <h1>Добро пожаловать на сайт Perfect Car</h1>
      </div>
      <div className="main-page-description">
        <h2>
          Здесь вы сможете контролировать процесс прохождения машинами
          техосмотра
        </h2>
      </div>
      <div className="main-page-body">
        <div className="main-page-body-item">
          <h5>
            Чтобы контролировать прохождение клиентами техобслуживания,
            перейдите в&nbsp;
            <a href="/activeList">списки заказов</a>
          </h5>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
