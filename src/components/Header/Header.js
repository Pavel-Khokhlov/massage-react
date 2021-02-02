import React from "react";

import Phone from "../../images/phone.png";

const Header = (props) => {
  const handleMenuBtnClick = () => {
    props.onMenuClick();
  };

  return (
    <header className="header">
      <div className="header__nav">
        <div className="header__menu">
          <button
            type="button"
            className="button button__icon button__icon_menu"
            aria-label="иконка меню"
            onClick={handleMenuBtnClick}
          />
          <button
            type="button"
            className="button button__word button__word_menu"
            aria-label="кнопка слово меню"
            onClick={handleMenuBtnClick}
          >
            Меню
          </button>
        </div>
        <div className="logo">
          <h1 className="title title__logo">Павел&nbsp;Хохлов</h1>
          <h2 className="subtitle subtitle__logo">
            Профессиональный&nbsp;массажист
          </h2>
        </div>
        <div className="header__phone">
          <a
            className="button button__icon button__icon_phone animation__phone-icon"
            href="tel:+79852515089"
          >
            <img className="footer__icon" src={Phone} alt="иконка телефон" />
          </a>
          <a
            className="button button__word button__word_phone animation__phone-link"
            href="tel:+79852515089"
          >
            +7 (985) 251-50-89
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
