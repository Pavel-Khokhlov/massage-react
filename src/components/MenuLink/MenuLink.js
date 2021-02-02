import React from "react";

const MenuLink = (props) => {
  return (
    <li className="popup__link">
      <a
        href={props.link}
        className="popup__link_menu"
        onClick={props.onClose}
      >
        {props.title}
      </a>
    </li>
  );
};

export default MenuLink;
