import React from "react";

const Popup = (props) => {
  const popupOpenClassName = `popup ${props.isOpen ? "popup_opened" : ""}`;
  
  return (
    <section className={popupOpenClassName}>
      <nav className="popup__container popup__container_menu">
        <button
          type="button"
          className="button button__close button__close_menu"
          aria-label="Вернуться на страницу"
          onClick={props.onClose}
        />
        {props.children}
      </nav>
    </section>
  );
};

export default Popup;
