import React, { useState } from "react";
import Header from "./components/Header/Header";
import Banners from "./components/Banners/Banners";
import Footer from "./components/Footer/Footer";
import MenuPopup from "./components/MenuPopup/MenuPopup";

import MainPhoto from "./images/top-image.jpg";
import Classic from "./images/classic.jpg";
import Estetic from "./images/estetic.jpg";
import Kinesio from "./images/kinesio.jpg";

import "./App.css";

function App() {
  const [isOpenMenuPopup, setIsOpenMenuPopup] = useState(false);

  const handleMenuClick = () => {
    setIsOpenMenuPopup(true);
  };

  const CloseAllPopup = () => {
    setIsOpenMenuPopup(false);
  };

  return (
    <div>
      <a className="anchor" id="top" />
      {/* ЯКОРЬ */}
      <Header onMenuClick={handleMenuClick} />
      <main className="main">
        {/* ABOUT */}
        <section className="about">
          <img className="about__image" src={MainPhoto} alt="top-picture" />
          <div className="about__text">
            <h3 className="title title__main">
              Массаж от релакса до&nbsp;глубокой проработки&nbsp;мышц
            </h3>
            <h4 className="subtitle subtitle__main">Образование:</h4>
            <p className="paragraph paragraph__main">
              2019 г. Медицинский Институт Реабилитации и Косметологии им.
              З.М.Никифоровой
              <br />
              Медицинский Брат по массажу
              <br />
              2016 г. Институт Профессионального Массажа
              <br />
              Курс: Медицинский массаж
              <br />
              2016 г. Медицинский колледж
              <br />
              Медицинский брат
              <br />
              <br />
            </p>
            <h4 className="subtitle subtitle__main">Опыт работы более 5 лет</h4>
            <p className="paragraph paragraph__main">
              Начинал карьеру массажиста при медицинском центре, далее работал в
              салонах красоты и в фитнес индустрии.
              <br />
              <br />
              В настоящее время веду прием:
              <br />
              Фитнес клуб "IronFitness"
              <br />
              Медицинкский центр "МедУспех"
            </p>
          </div>
          <Banners />
        </section>
        {/* USLUGI */}
        <a className="anchor" id="service" />
        {/* ЯКОРЬ */}
        <section className="uslugi">
          <h3 className="title title__main">Классический массаж</h3>
          <div className="uslugi__card">
            <img className="uslugi__image" src={Classic} alt="classic" />
            <div className="uslugi__text">
              <p className="paragraph paragraph__main">
                Часто болит голова? Много работаете за компьютером? Боли в
                пояснице и не только? Забиты мышцы после физических тренировок?
                Сколиоз? Плоскостопие?
                <br />
                <br />
                Комплексный подход к вашим проблемам. Помогу восстановить
                жизненный баланс в теле. Приведу мышцы в нормотонус.
                <br />
                <br />
                Общий массаж всего тела запустит процессы метаболизма в работу.
                Улучшится состояние вашего организма. Заработает кровеносная и
                лимфатическая система. Могу отдельно проработать проблемную зону
                (шея, спина, руки, ноги, лицо). Массаж выполняю сильно в
                зависимости от Вашей чувствительности.
                <br />
                <br />
                Активно применяю массажный пистолет для глубокой проработки
                мышц.
                <br />
                <br />
                Данная процедура избавит вас от стресса, подарит прилив
                жизненной энергии и поможет настроиться на очередную рабочую
                неделю.
              </p>
              <a
                className="button__uslugi"
                href="https://wa.me/79852515089"
                target="_blank"
              >
                Записаться
              </a>
            </div>
          </div>
          <h3 className="title title__main">Эстетика тела</h3>
          <div className="uslugi__card uslugi__card_reverse">
            <div className="uslugi__text">
              <p className="paragraph paragraph__main">
                Каждая девушка хочет быть красивой и любимой. Стройный силуэт и
                упругая кожа как залог здоровья вашего тела. Используя техники
                ручного, баночного и лимфодренажного массажа мы добьемся
                выравнивая контуров Вашего тела. Благодаря этим процедурам ваша
                кожа засияет изнутри.
                <br />
                <br />
                В своей работе использую качественный антицеллюлитный гель от
                известного бренда Израильской косметики HolyLand. Результат не
                заставит долго ждать.
                <br />
                <br />
                Провожу процедуры обёртывания, в котором применяются водоросли,
                они пользуется особой популярностью, потому как его результаты
                видны уже после первых процедур.
                <br />
                Сейчас эффективно применяются в практике кинезиотейпирование,
                оно способствует улучшению кровоснабжения и лимфотока. Как раз
                это и необходимо при борьбе с целлюлитом и лишним весом.
              </p>
              <a
                className="button__uslugi"
                href="https://wa.me/79852515089"
                target="_blank"
              >
                Записаться
              </a>
            </div>
            <img className="uslugi__image" src={Estetic} alt="estetic" />
          </div>
          <h3 className="title title__main">Кинезиотейпирование</h3>
          <div className="uslugi__card">
            <img className="uslugi__image" src={Kinesio} alt="kinesio" />
            <div className="uslugi__text">
              <p className="paragraph paragraph__main">
                Кинезиологическое тейпирование – это простой и эффективный метод
                лечения растяжения связок, мышечных болей и других травм, а
                также гематом и отеков с помощью специальной клейкой ленты.
                <br />
                <br />
                Эффекты кинезиотейпинга:
                <br />
                * обезболивающий;
                <br />
                * противовоспалительный;
                <br />
                * лимфодренажный;
                <br />
                * расслабляющее действие на мышцы;
                <br />
                * борьба с отеками и гематомам;
                <br />
                * мягкая стабилизация сустава.
                <br />
                <br />
                Действие тейпа начинается сразу после приклеивания и
                продолжается круглосуточно до 5 дней.
              </p>
              <a
                className="button__uslugi"
                href="https://wa.me/79852515089"
                target="_blank"
              >
                Записаться
              </a>
            </div>
          </div>
        </section>
        {/* FEEDBACK */}
        <a className="anchor" id="feedback" />
        {/* ЯКОРЬ */}
        <section className="feedback">
          <h3 className="title title__main">Отзывы</h3>
          <ul id="lightSlider" className="feedback__list" />
        </section>
        {/* CONTACTS */}
        <a className="anchor" id="contacts" />
        {/* ЯКОРЬ */}
        <section className="work-place">
          <h3 className="title title__main">Где меня найти</h3>
          <div className="work-place__area">
            <div className="work-place__info">
              <h4 className="subtitle subtitle__main">
                Фитнес клуб "Ironfitness"
              </h4>
              <p className="paragraph paragraph__main">
                г. Мытищи ул.Троицкая 9А
              </p>
            </div>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A7686ee3422eadecb889e3743a49b20b4c6b80471d02c9fee937c75fd4a8e88b6&source=constructor"
              frameBorder={0}
              className="work-place__map"
            />
          </div>
          <div className="work-place__area">
            <div className="work-place__info">
              <h4 className="subtitle subtitle__main">МедУспех</h4>
              <p className="paragraph paragraph__main">
                г. Москва м.Павелецкая
              </p>
            </div>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab1155ac5fe86f787cc83e6d37fb2cf869b0fc5420ceeba029d36394def818c0f&source=constructor"
              frameBorder={0}
              className="work-place__map"
            />
          </div>
        </section>
      </main>
      <Footer />
      {/* POPUP MENU */}
      <MenuPopup isOpen={isOpenMenuPopup} onClose={CloseAllPopup} />
      {/* POPUP-SALE */}
      <section className="popup popup-sale">
        <div className="popup__container popup__container_sale">
          <button
            type="button"
            className="button button__close button__close_sale popup-close"
            aria-label="кнопка закрыть"
          />
          <img className="popup__image" src="./images/sale.jpg" />
          <a
            href="https://api.whatsapp.com/send?phone=79852515089&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%20%D0%9F%D0%B0%D0%B2%D0%B5%D0%BB%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D1%8B%D0%B9%20%D0%BC%D0%B0%D1%81%D1%81%D0%B0%D0%B6."
            target="_blank"
            className="popup__link popup__link_sale popup-close"
          >
            Записаться
          </a>
        </div>
      </section>
      {/* CARD TEMPLATE */}
      <template className="card-template" />
      {/* ========== SCRIPTS ========== */}
    </div>
  );
}

export default App;
