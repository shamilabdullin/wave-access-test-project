import React from "react";
import { Trans, useTranslation } from "react-i18next";
import "./styles/mainPage.css";
import "../i18next";
import { Button } from "react-bootstrap";

const MainPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="container main-page">
      <div className="main-page-title">
        <h1>{t("title")}</h1>
      </div>
      <div className="main-page-description">
        <h2>{t("second title")}</h2>
      </div>
      <div className="main-page-body">
        <div className="main-page-body-item">
          <h3>
            {t("third title")}&nbsp;
            <a href="/activeList">{t("list of orders")}</a>
          </h3>
          <Trans i18nKey="description.part1"></Trans>
          <Button onClick={() => changeLanguage("en")}>EN</Button>
          <Button onClick={() => changeLanguage("ru")}>RU</Button>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
