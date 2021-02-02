import React from "react";
import MenuLink from "../MenuLink/MenuLink";

import Popup from "../Popup/Popup";

const MenuPopup = (props) => {
  return (
    <Popup isOpen={props.isOpen} onClose={props.onClose}>
      <ul className="popup__list">
        <MenuLink link={`#top`} onClose={props.onClose} title={`обо мне`}/>
        <MenuLink link={`#service`} onClose={props.onClose} title={`услуги`}/>
        <MenuLink link={`#feedback`} onClose={props.onClose} title={`отзывы`}/>
        <MenuLink link={`#contacts`} onClose={props.onClose} title={`на карте`}/>
        <li className="popup__link">
          <a href="#top" className="popup__link_enter" onClick={props.onClose}>
            вход
          </a>
        </li>
      </ul>
    </Popup>
  );
};

export default MenuPopup;
