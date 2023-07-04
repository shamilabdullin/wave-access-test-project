import React from "react";
import { Trans, useTranslation } from "react-i18next";
import "./styles/mainPage.css";
import "../i18next";
import { Button } from "react-bootstrap";
import { from, of, Observable, fromEvent, Subject, interval } from 'rxjs';
import { filter, map, scan, take, tap } from "rxjs/operators";

const MainPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language, () => console.log("language changed"));
    localStorage.setItem("i18nextLng", language);
    // window.location.reload()
  };
  
  // work with rxjs
  // const stream$ = new Observable(observer => {
  //   observer.next()
  // })

  // const stream$ = new Subject()
  // stream$.next('1234')
  // stream$.subscribe(v => console.log(v))

  const f = fromEvent(document, 'click').pipe(
    tap(v => console.log('tap: ', v)),
    take(3)
  )
  f.subscribe(v => console.log('click'))
  // const stream$ = interval(1000).pipe(
  //   map(v => v * 3),
  //   filter(v => v % 2 === 0)
  // )
  // stream$.subscribe(v => {
  //   console.log(v)
  // })

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
          {/* <Trans i18nKey="description.part1"></Trans> */}
		  <div className="change_language">
			<h4 style={{"marginRight": 8}}>{t("description.part1")}</h4>
			<Button style={{marginRight : 12}} onClick={() => changeLanguage("en")} id='en'>EN</Button>
			<Button style={{marginRight : 12}} onClick={() => changeLanguage("ru")}>RU</Button>
		  </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
