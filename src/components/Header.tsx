import React from "react";
import { useTranslation } from "react-i18next";
import World from './world.png'
import { Button, Dropdown, DropdownButton } from "react-bootstrap";

const Header: React.FC = () => {

	const { t, i18n } = useTranslation();
	const changeLanguage = (language: string) => {
	  i18n.changeLanguage(language, () => console.log("language changed"));
	  localStorage.setItem("i18nextLng", language);
	  // window.location.reload()
	};

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            Perfect Car
          </a>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/activeList">
                  {t("list of orders")}
                </a>
              </li>
            </ul>
          </div>
		  <Dropdown>
			<Dropdown.Toggle style={{'backgroundColor': "#212529", 'borderColor': '#212529'}}>
				<img src={World} height={48}/>
			</Dropdown.Toggle>
			<Dropdown.Menu>
				<Dropdown.Item onClick={() => changeLanguage("en")} id='en'>EN</Dropdown.Item>
				<Dropdown.Item onClick={() => changeLanguage("ru")}>RU</Dropdown.Item>
			</Dropdown.Menu>
		  </Dropdown>
        </div>
      </nav>
    </div>
  );
};

export default Header;
