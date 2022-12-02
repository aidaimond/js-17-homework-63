import React from 'react';
import ContactCard from "../../components/ContactCard/ContactCard";

const Contacts = () => {
  return (
    <div className="m-5 py-3 bg-secondary bg-opacity-10 rounded">
      <div className="m-5">
        <h1>Контакты</h1>
        <h3 className="card-title my-4">Юридический адрес</h3>
        <p className="card-text">г.Бишкек, Малдыбаева 7/1, 4 этаж</p>
        <p className="card-text">+996-559-556-555</p>
      </div>
      <h1 className="m-5">Карьера у нас</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <ContactCard
          title="Расположение кампуса"
          text="Наша штаб-квартира в Менло-Парке, Калифорния, является лишь одним из наших многочисленных офисов. Наше присутствие растет в городах по всему миру."
        />
        <ContactCard
          title="Заработная плата"
          text="Мы обеспечиваем конкурентоспособную заработную плату, а также полное медицинское страхование, включая стоматологические и офтальмологические планы."
        />
        <ContactCard
          title="Поддержка удаленной работы"
          text="Мы предоставляем финансовую поддержку, чтобы помочь людям, занимающим удаленные должности, настроить и поддерживать продуктивное домашнее рабочее пространство."
        />
        <ContactCard
          title="Баланс между работой и личной жизнью"
          text="Мы предлагаем гибкий график работы, щедрые дни отпуска каждый год и политику работы, ориентированную на семью. Мы также находим время для регулярных общекомандных мероприятий."
        />
        <p className="m-5 fs-4">hr.myblog@gmail.com</p>
        <p className="m-5 fs-4">+996-559-556-555</p>
      </div>
    </div>
  );
};

export default Contacts;