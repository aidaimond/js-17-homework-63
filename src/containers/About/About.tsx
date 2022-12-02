import React from 'react';
import AboutCard from "../../components/AboutCard/AboutCard";

const About = () => {
  return (
    <div className="m-5 p-5 bg-secondary bg-opacity-10 rounded">
      <h1 className="pb-5">Мы стремимся создать безопасное и поддерживающее сообщество для всех</h1>
      <AboutCard title="Узнайте, что нового" text="Делитесь новостями с друзьями"/>
      <AboutCard title="Поговорите" text="Отправляйте сообщения, фото и видео другу или выберите группу людей."/>
      <AboutCard title="Покупайте то, что любите" text="Публикуйте обьявления в блоге"/>
      <AboutCard title="Найдите что-то новое"
                 text="Знакомьтесь, откройте для себя новых людей на основе ваших интересов"
      />
    </div>
  );
};

export default About;