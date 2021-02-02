import React from "react";

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
          <button
            className="button button__icon button__icon_phone animation__phone-icon"
            aria-label="кнопка иконка телефон"
            onСlick="document.location='tel:+79852515089'"
          />
          <button
            className="button button__word button__word_phone animation__phone-link"
            aria-label="кнопка номер телефона"
            onСlick="document.location='tel:+79852515089'"
          >
            +7 (985) 251-50-89
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
