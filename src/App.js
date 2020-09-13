import React from 'react';
import './App.css';
import shortid from 'shortid';
import './bootstrap.min.css';
import Block from './components/Block';
import TitleBlock from './components/TitleBlock';
import List from './components/List';
import ListItem from './components/ListItem';
import Teaser from './components/Teaser';
import Course from './components/Course';
import Search from './components/Search';
import Banner from './components/Banner';
import Weather from './components/Weather';

function App() {
  const titleNews = [
    {
      href: '#0',
      text: 'Сейчас в СМИ',
    },
    {
      href: '#0',
      text: 'в Тольятти',
    },
    {
      href: '#0',
      text: 'Интересное',
    },
  ];

  const listNews = [
    {
      icon: 'icon',
      href: '#0',
      title: 'МВД Белоруссии сообщило о задержании 400 участников протестов',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'ЦСКА — Спартак 3:1',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'В Британии заявили об опасности российской ракеты «Буревестник»',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'В Ленинградской области явка на выборах губернатора составила 32,78%',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'Помпео выразил беспокойство заходом военных кораблей РФ в порты Кипра',
    },
  ];

  const dataTeaser = {
    href: '#0',
    title: 'Скачайте браузер',
    text: 'с защитой от сайтов с вирусами',
  };

  const searchLink = [
    'Видео',
    'Картинки',
    'Новости',
    'Карты',
    'Маркет',
    'Переводчик',
    'Музыка',
    'Эфир',
    'ещё',
  ];

  const dataBanner = {
    img: '/',
    href: '#0',
  };

  const dataVisited = [
    {
      href: '#0',
      title: 'Толока',
      text: ' — заработок на дому',
    },
    {
      href: '#0',
      title: 'Еда',
      text: ' — где заказать пиццу',
    },
  ];

  const tvProgramm = [
    {
      href: '#0',
      title: 'US-Open 1/2 финала Мужчины. Д. Медведев : Д. Тим',
      text: ' Теннис',
    },
    {
      href: '#0',
      title: 'Вести недели',
      text: ' Новости',
    },
    {
      href: '#0',
      title: 'Склифосовский 7 сезон',
      text: ' 2019, мелодрама',
    },
  ];

  const dataStream = [
    {
      icon: 'icon',
      href: '#0',
      title: 'Вести ',
      text: ' Россия 1',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'Велоспорт',
      text: ' Eurosport 1',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'Группа ДДТ',
      text: ' Онлайн концерт',
    },
  ];

  return (
    <>
      <Block className='top-block'>
        <Block className='news'>
          <TitleBlock items={titleNews}>
            <span className='date'>13 сентября, воскресенье  20:20</span>
          </TitleBlock>
          <List>
            {listNews.map((item) => <ListItem key={shortid.generate()} item={item} />)}
          </List>
          <Block className='course'>
            <Course />
          </Block>
        </Block>
        <Block className='teaser'>
          <Teaser {...dataTeaser} />
        </Block>
      </Block>
      <Block className='search'>
        {searchLink.map((item) => <a key={shortid.generate()} href='#0'>{item}</a>)}
        <Search />
        <span>Найдется всё. <a href='#0'><span className='example-search'>карта распространения коронавируса</span></a></span>
      </Block>
      <Block className='banner'>
        <Banner {...dataBanner} />
      </Block>
      <Block className='columns'>
        <Block className='col-4'>
          <Block className='weather'>
          <TitleBlock items={[{
            href: '#0',
            text: 'Погода',
          }]} />
            <Weather />
          </Block>
          <Block className='visited'>
            <TitleBlock items={[{
              href: '#0',
              text: 'Посещаемое',
            }]} />
            <List>
              {dataVisited.map((item) => <ListItem key={shortid.generate()} item={item}>
                {item.text}
              </ListItem>)}
          </List>
          </Block>
        </Block>
        <Block className='col-4'>
          <Block className='maps'>
            <a href='#0'>Карта России</a>
            <p>Расписания</p>
          </Block>
          <Block className='tv'>
            <TitleBlock items={[{
              href: '#0',
              text: 'Телепрограмма',
            }]}>
              <span className='tv-show'>Эфир</span>
            </TitleBlock>
            <List>
              {tvProgramm.map((item) => <ListItem key={shortid.generate()} item={item}>
                {item.text}
              </ListItem>)}
            </List>
          </Block>
        </Block>
        <Block className='col-4'>
        <Block className='stream'>
            <TitleBlock items={[{
              href: '#0',
              text: 'Эфир',
            }]} />
            <List>
              {dataStream.map((item) => <ListItem key={shortid.generate()} item={item}>
                {item.text}
              </ListItem>)}
            </List>
          </Block>
        </Block>
      </Block>
    </>
  );
}

export default App;
