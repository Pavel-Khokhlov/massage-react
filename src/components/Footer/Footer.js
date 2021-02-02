import React from "react";

import Phone from "../../images/phone.png";
import Insta from "../../images/insta.png";
import Whatsapp from "../../images/wa.png";
import Telegram from "../../images/telegram.png";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="title title__footer">Павел Хохлов</h2>
      <p className="subtitle subtitle__footer">Профессиональный массажист</p>
      <span className="line" />
      <ul className="footer__list">
        <p className="subtitle subtitle__footer">Навигация:</p>
        <li>
          <a href="#top" className="subtitle subtitle__footer footer__link">
            Обо мне
          </a>
        </li>
        <li>
          <a href="#service" className="subtitle subtitle__footer footer__link">
            Услуги
          </a>
        </li>
        <li>
          <a
            href="#feedback"
            className="subtitle subtitle__footer footer__link"
          >
            Отзывы
          </a>
        </li>
        <li>
          <a
            href="#contacts"
            className="subtitle subtitle__footer footer__link"
          >
            Где меня найти
          </a>
        </li>
      </ul>
      <span className="line" />
      <ul className="footer__social">
        <li>
          <a className="footer__link" href="tel:+79852515089">
            <img
              className="footer__icon"
              src={Phone}
              alt="иконка телефон"
            />
          </a>
        </li>
        <li>
          <a
            className="footer__link"
            href="https://instagram.com/pavel_promassage"
            target="_blank"
          >
            <img
              className="footer__icon"
              src={Insta}
              alt="иконка instagram"
            />
          </a>
        </li>
        <li>
          <a
            className="footer__link"
            href="https://wa.me/79852515089"
            target="_blank"
          >
            <img
              className="footer__icon"
              src={Whatsapp}
              alt="иконка whatsapp"
            />
          </a>
        </li>
        <li>
          <a
            className="footer__link"
            href="tg://resolve?domain=PavelProMassage"
            target="_blank"
          >
            <img
              className="footer__icon"
              src={Telegram}
              alt="иконка telegram"
            />
          </a>
        </li>
      </ul>
      <span className="line" />
      <p className="paragraph paragraph__footer">
        © Павел Хохлов, г.Москва 2016-2020 г.
      </p>
    </footer>
  );
};

export default Footer;
