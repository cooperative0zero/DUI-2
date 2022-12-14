import './PersonPage.css';
import './styles/page_style.css';
import {Timeline,TimelineItem} from 'vertical-timeline-component-for-react';
import PhotoAlbum from 'react-photo-album';
import React from 'react';
import { LOCALES } from './i18n2/locales';
import { FormattedMessage } from 'react-intl';
import { messages } from './i18n2/messages';
import { IntlProvider } from 'react-intl';
import { useState } from 'react';
import Back_button from './MainPageBtn';
var ident = sessionStorage.getItem("Ident");

const baretty = [
  {
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/%D0%A2%D1%8D%D0%B0%D1%84%D1%96%D0%BB_%D0%AD%D1%9E%D0%B3%D0%B5%D0%BD%D1%96%D1%8E%D1%88_%D0%91%D0%B0%D1%80%D1%8D%D1%86%D1%96.jpg/640px-%D0%A2%D1%8D%D0%B0%D1%84%D1%96%D0%BB_%D0%AD%D1%9E%D0%B3%D0%B5%D0%BD%D1%96%D1%8E%D1%88_%D0%91%D0%B0%D1%80%D1%8D%D1%86%D1%96.jpg",
    title:"Портрет Теафила Бореци",
    width:100,
    height:100,
  },
  {
    src:"https://upload.wikimedia.org/wikipedia/commons/d/d7/Astašynski_zbor._Асташынскі_збор_%28T._Boretti%2C_1894%29.jpg",
    title:"Асташинский собор(1894)",
    width:100,
    height:100,
  },
  {
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Niaśviskaja_ratuša._Нясьвіская_ратуша_%28T._Boretti%2C_1894%29_%282%29.jpg/615px-Niaśviskaja_ratuša._Нясьвіская_ратуша_%28T._Boretti%2C_1894%29_%282%29.jpg",
    title:"Несвижская ратуша(1894)",
    width:100,
    height:100,
  },
  {
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Nia%C5%9Bvi%C5%BE%2C_Radzivi%C5%82%2C_Vialikaja._%D0%9D%D1%8F%D1%81%D1%8C%D0%B2%D1%96%D0%B6%2C_%D0%A0%D0%B0%D0%B4%D0%B7%D1%96%D0%B2%D1%96%D0%BB%2C_%D0%92%D1%8F%D0%BB%D1%96%D0%BA%D0%B0%D1%8F_%28T._Boretti%2C_1894%29_%282%29.jpg/612px-Nia%C5%9Bvi%C5%BE%2C_Radzivi%C5%82%2C_Vialikaja._%D0%9D%D1%8F%D1%81%D1%8C%D0%B2%D1%96%D0%B6%2C_%D0%A0%D0%B0%D0%B4%D0%B7%D1%96%D0%B2%D1%96%D0%BB%2C_%D0%92%D1%8F%D0%BB%D1%96%D0%BA%D0%B0%D1%8F_%28T._Boretti%2C_1894%29_%282%29.jpg",
    title:"Главный зал Несвижского дворца",
    width:100,
    height:100,
  },
  {
    src:"https://upload.wikimedia.org/wikipedia/commons/0/00/Davyd-Haradok%2C_Hary%C5%84-Carko%C5%ADnaja_hara._%D0%94%D0%B0%D0%B2%D1%8B%D0%B4-%D0%93%D0%B0%D1%80%D0%B0%D0%B4%D0%BE%D0%BA%2C_%D0%93%D0%B0%D1%80%D1%8B%D0%BD%D1%8C-%D0%A6%D0%B0%D1%80%D0%BA%D0%BE%D1%9E%D0%BD%D0%B0%D1%8F_%D0%B3%D0%B0%D1%80%D0%B0_%28T._Boretti%2C_1894%29_%282%29.jpg",
    title:"Давыд-городок",
    width:200,
    height:200,
  }

];

const bulgak = [
  {
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Jan_Bulhak_colorisation.jpg/274px-Jan_Bulhak_colorisation.jpg",
    title:"Портрет Яна Булгака",
    width:100,
    height:100,

  },
  {
    src:"https://34travel.me/media/upload/images/2021/MARCH/jan-bulhak/1.jpg",
    title:"Торговые ряды Новогрудка",
    width:100,
    height:100,

  },
  {
    src:"https://34travel.me/media/upload/images/2021/MARCH/jan-bulhak/3.jpg",
    title:"Собор Рождества Пресвятой Богородицы в Глубоком",
    width:100,
    height:100,

  },
  {
    src:"https://34travel.me/media/upload/images/2021/MARCH/jan-bulhak/4-1.jpg",
    title:"Любча",
    width:100,
    height:100,

  },
  {
    src:"https://34travel.me/media/upload/images/2021/MARCH/jan-bulhak/5-1.jpg",
    title:"Клецк",
    width:100,
    height:100,

  },

];

const lihtarovich = [
  {
    src:"https://znyata.com/images/stories/interview/lihtarovich/lihtarovich1.jpg",
    title:"Портрет Георгия Лихтаровича",
    width:100,
    height:100,
  },
  {
    src:"https://znyata.com/images/stories/interview/lihtarovich/lihtarovich14.jpg",
    title:"Работа из альбома 'Жизнь Беларуси'",
    width:100,
    height:100,
  },
  {
    src:"https://znyata.com/images/stories/interview/lihtarovich/lihtarovich3.jpg",
    title:"Работа из альбома 'Жизнь Беларуси'",
    width:100,
    height:100,
  },
  {
    src:"https://znyata.com/images/stories/interview/lihtarovich/lihtarovich4.jpg",
    title:"Работа из альбома 'Жизнь Беларуси'",
    width:100,
    height:100,
  },
  {
    src:"https://znyata.com/images/stories/interview/lihtarovich/lihtarovich5.jpg",
    title:"Работа из альбома 'Жизнь Беларуси'",
    width:100,
    height:100,

  },

];

const alekseev = [
  {
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa2zC5BkT7_8YJW_qtG9AuK_1sM0Hwy77Oew&usqp=CAU",
    title:"Александр Алексеев(слева) и Олег Лукашевич(справа) на открытии одной из выставок",
    width:100,
    height:100,
  },
  {
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IwTgKH2w3w1TBp4BLLOUH7B99DY0hWPuZg&usqp=CAU",
    title:"Выставка 'Наследие Беларуси' под открытым небом(парк Горького)",
    width:100,
    height:100,
  },
  {
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQar1w8fAstoeDeYfl7G8nM3yi10mlSt5EoIQ&usqp=CAU",
    title:"Печатное издание сборника 'Наследие Беларуси'",
    width:100,
    height:100,
  },
  {
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEx-WpmFu20RGS5woUhutRNsiCd7x9hDmPQ&usqp=CAU",
    title:"Пример работы Алексеева из сборника 'Наследие Беларуси'",
    width:100,
    height:100,
  },
  {
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPAzAWtIFlWPpvJ8uAss6bfm2amN6pk3IsQ&usqp=CAU",
    title:"Мирский замок(Алексеев,'Наследие Берауси')",
    width:100,
    height:100,

  },

];

const kaltovich = [
  {
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/KaltovichS.jpg/440px-KaltovichS.jpg",
    title:"Портрет Сергея Калтовича",
    width:100,
    height:100,
  },
  {
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Kaltovich_works1.jpg/240px-Kaltovich_works1.jpg",
    title:"Работа 'Солнца свет'",
    width:100,
    height:100,
  },
  {
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Kaltovich_works2.jpg/240px-Kaltovich_works2.jpg",
    title:"Работа 'Бурелом'",
    width:100,
    height:100,
  },
  {
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Kaltovich_works3.jpg/177px-Kaltovich_works3.jpg",
    title:"Работа 'Безмятежность белорусских озер'",
    width:100,
    height:100,
  },
  {
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Kaltovich_works4.jpg/240px-Kaltovich_works4.jpg",
    title:"Работа 'Неизвестная натура'",
    width:100,
    height:100,
  },
  
];


function Person_info(props) {
  if(props.ident==3){
    return(
      <>
      <div className='portrait_1'>
      </div>
        <div class="info">
          <h2 className="text-coloring"><FormattedMessage id="IdentName1">Бореци Теафил Эугениуш</FormattedMessage></h2>
          <h3 className="text-coloring"><FormattedMessage id="IdentYears1">1860-1910 г. </FormattedMessage></h3>
          <p className="text-coloring"><FormattedMessage id="IdentInfo1">Белорусский и польский фотограф-пейзажист.</FormattedMessage></p>
        </div>
      </>

    );
  } 
  else if(props.ident==2){
    return(
      <>
      <div className='portrait_2'>
      </div>
      
        <div class="info">
          <h2 className="text-coloring"><FormattedMessage id="IdentName2">Булгак Ян</FormattedMessage></h2>
          <h3 className="text-coloring"><FormattedMessage id="IdentYears2" >1876-1950 г.</FormattedMessage></h3>
          <p className="text-coloring"><FormattedMessage id="IdentInfo2">Белорусский и польский фотограф и фотохудожник,"отец польсокй фотографии".</FormattedMessage></p>
        </div>
      </>

    );
  }
  else if(props.ident==4){
    return(
      <>
      <div className='portrait_3'>
      </div>
        <div class="info">
          <h2 className="text-coloring"><FormattedMessage id="IdentName3">Лихтарович Георгий Леонардович</FormattedMessage></h2>
          <h3 className="text-coloring"><FormattedMessage id="IdentYears3">1947 год.</FormattedMessage></h3>
          <p className="text-coloring"><FormattedMessage id="IdentInfo3">Белорусский фоторедактор, литератор.</FormattedMessage></p>
        </div>
      </>

    );
  }
  else if(props.ident==1){
    return(
      <>
      <div className='portrait_4'>
      </div>
      
        <div class="info" >
          <h2 className="text-coloring"><FormattedMessage id="IdentName4">Алексеев Александр Алексеевич</FormattedMessage></h2>
          <h3 className="text-coloring"><FormattedMessage id="IdentYears4">1978 год.</FormattedMessage></h3>
          <p className="text-coloring"><FormattedMessage id="IdentInfo4">Белорусский фотограф,издатель,журналист,режиссер.</FormattedMessage></p>
        </div>
      </>

    );
  }
  else if(props.ident==5){
    return(
      <>
      <div className='portrait_5'>
      </div>
        <div class="info">
          <h2 className="text-coloring"><FormattedMessage id="IdentName5">Калтович Сергей Владимирович</FormattedMessage></h2>
          <h3 className="text-coloring"><FormattedMessage id="IdentYears5">1961-2022 г.</FormattedMessage></h3>
          <p className="text-coloring"><FormattedMessage id="IdentInfo5">Белорусский дизайнер и фотограф.</FormattedMessage></p>
        </div>
      </>

    );
  }

}

function TimeLine(props){
  if(props.ident==3){
    return(
      <Timeline className="timeline">
        <TimelineItem dateText="1860 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident1-Timeline1">Родился в Варшаве в семье архитектора</FormattedMessage></TimelineItem>
        <TimelineItem dateText={<FormattedMessage id="Ident1-Date1">конец ХIX в.</FormattedMessage>} style={{color:'#00bfe6'}} dateInnerStyle={{background:'#1a9fff',color:'#000000',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}} ><FormattedMessage id="Ident1-Timeline2">Переезжает в город Калиш</FormattedMessage></TimelineItem>
        <TimelineItem dateText="1892 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident1-Timeline3">Открыл фотоателье в Несвиже</FormattedMessage></TimelineItem>
        <TimelineItem dateText="1894 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#1a9fff',color:'#000000',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident1-Timeline4">Опубликовал фотографии на выставке во Львове</FormattedMessage></TimelineItem>
        <TimelineItem dateText="1896 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident1-Timeline5">Фотографии Теафила включены в альбом, посвещщенный архитектуре г. Калиша</FormattedMessage></TimelineItem>
        <TimelineItem dateText="1900 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#1a9fff',color:'#000000',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident1-Timeline6">Издал альбом фотографий "Пейзажи родины Адама Мицкевича"</FormattedMessage></TimelineItem>
        <TimelineItem dateText="1904 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident1-Timeline7">Женился на С. Расацкой, у них родились 2 дочки</FormattedMessage></TimelineItem>
        <TimelineItem dateText="1908-1909 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#1a9fff',color:'#000000',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident1-Timeline8">Переехал из Калиша в Скальмежицы</FormattedMessage></TimelineItem>
        <TimelineItem dateText="1910 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident1-Timeline9">Умер в Скальмежицах в семейном кругу</FormattedMessage></TimelineItem>
      </Timeline>
    );
  }
  else if(props.ident==2)
  {
    return(
    <Timeline className="timeline">
    <TimelineItem dateText="1876 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident2-Timeline1">Родился в Осташине(под Новогрудком)</FormattedMessage></TimelineItem>
    <TimelineItem dateText="1897-1899 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#1a9fff',color:'#000000',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}} ><FormattedMessage id="Ident2-Timeline2">Учится в Ягеллонском университете(не закончил)</FormattedMessage></TimelineItem>
    <TimelineItem dateText="1912 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident2-Timeline3">Открыл фотоателье в Вильне</FormattedMessage></TimelineItem>
    <TimelineItem dateText="1912-1915 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#1a9fff',color:'#000000',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident2-Timeline4">Фотографировал памятники архитектуры Вильно на заказ</FormattedMessage></TimelineItem>
    <TimelineItem dateText="1919 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident2-Timeline5">Стал основателем и руководителем Виленского фотоклуба</FormattedMessage></TimelineItem>
    <TimelineItem dateText="1931-1936 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#1a9fff',color:'#000000',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident2-Timeline6">Выпускал серию альбоов "Наброски фотографа"</FormattedMessage></TimelineItem>
    <TimelineItem dateText="1945 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident2-Timeline7">Переехал в Варшаву</FormattedMessage></TimelineItem>
    <TimelineItem dateText="1947 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#1a9fff',color:'#000000',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident2-Timeline8">Стал учредителем и руководителем Союза фотохудожников Польши</FormattedMessage></TimelineItem>
    <TimelineItem dateText="1950 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident2-Timeline9">Умер в Гижицко</FormattedMessage></TimelineItem>
  </Timeline>
    );
  }
  else if(props.ident==4){
    return(
      <Timeline className="timeline">
      <TimelineItem dateText="1947 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident3-Timeline1">Родился в г. Минске,БССР,СССР</FormattedMessage></TimelineItem>
      <TimelineItem dateText="1965-1966 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#1a9fff',color:'#000000',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident3-Timeline2">Работал ассистентом на Минской киностудии научно-популярных и документальных фильмов</FormattedMessage></TimelineItem>
      <TimelineItem dateText="1969-1972 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident3-Timeline3">Работал фотографом в Институте искусствоведения,этнографии и фольклора Академии Наук</FormattedMessage></TimelineItem>
      <TimelineItem dateText="1973-1974 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#1a9fff',color:'#000000',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident3-Timeline4">Работал фотокорреспондентом газеты "Голос Родины"</FormattedMessage></TimelineItem>
      <TimelineItem dateText="1974-1992 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident3-Timeline5">Работал фотографом в государственных издательствах </FormattedMessage></TimelineItem>
      <TimelineItem dateText="2000 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#1a9fff',color:'#000000',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident3-Timeline6">Издал фотоальбом "Добрый день,Беларусь"</FormattedMessage></TimelineItem>
      <TimelineItem dateText="2002 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident3-Timeline7">Издал книгу поэзии "Общая тетрадь"</FormattedMessage></TimelineItem>
      <TimelineItem dateText="2004 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#1a9fff',color:'#000000',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident3-Timeline8">Становится членом Рады Белорусского общественного объединения "Фототворчество" </FormattedMessage></TimelineItem>
      <TimelineItem dateText="2008 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident3-Timeline9">Издал детективный роман "Газ"</FormattedMessage></TimelineItem>
    </Timeline>
      );

  }
  else if(props.ident==1){
    return(
      <Timeline className="timeline">
      <TimelineItem dateText="1978 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident4-Timeline1">Родился в г. Казань в семье военнослужащего</FormattedMessage></TimelineItem>
      <TimelineItem dateText="1979 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#1a9fff',color:'#000000',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident4-Timeline2">Переезжает с семьей в Беларусь</FormattedMessage></TimelineItem>
      <TimelineItem dateText="2001 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident4-Timeline3">Работал на белорусском телевидении, был аккредитован в качестве белорусского фотографа</FormattedMessage></TimelineItem>
      <TimelineItem dateText="2003 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#1a9fff',color:'#000000',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident4-Timeline4">Реализует художественный проект "Наследие Беларуси" совместно с Ольгом Лукашевичем</FormattedMessage></TimelineItem>
      <TimelineItem dateText="2005 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident4-Timeline5">Стал Лауреатом Премии Президента Республики Беларусь "За духовное возрождение"</FormattedMessage></TimelineItem>
      <TimelineItem dateText="2007 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#1a9fff',color:'#000000',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident4-Timeline6">Становится белорусским издателем</FormattedMessage></TimelineItem>
      <TimelineItem dateText="2011 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident4-Timeline7">Становится заместителем руководителя Национальным павильоном</FormattedMessage></TimelineItem>
      <TimelineItem dateText="2012 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#1a9fff',color:'#000000',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident4-Timeline8">Начал работать в белорусской документалистике  в качестве режиссера</FormattedMessage></TimelineItem>
      <TimelineItem dateText="2003-2018 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident4-Timeline9">Проводил серию выставок в рамках проекта "Наследие Беларуси"</FormattedMessage></TimelineItem>
    </Timeline>
      );

  }
  else if(props.ident==5){
    return(
      <Timeline className="timeline">
      <TimelineItem dateText="1961 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident5-Timeline1">Родился в г. Гомель,БССР,СССР</FormattedMessage></TimelineItem>
      <TimelineItem dateText="1968-1979 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#1a9fff',color:'#000000',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident5-Timeline2">Учится в СШ №6 г. Минска</FormattedMessage></TimelineItem>
      <TimelineItem dateText="1980 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident5-Timeline3">Окончил Минское художественное училище</FormattedMessage></TimelineItem>
      <TimelineItem dateText="1987-1990 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#1a9fff',color:'#000000',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident5-Timeline4">Руководитель фотолаборатории в агентстве "Предложение"</FormattedMessage></TimelineItem>
      <TimelineItem dateText="1990-1993 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident5-Timeline5">Фотограф в музее П.Бровки</FormattedMessage></TimelineItem>
      <TimelineItem dateText="1995" style={{color:'#00bfe6'}} dateInnerStyle={{background:'#1a9fff',color:'#000000',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident5-Timeline6">Совмествно с В. Седых организовывает творческую студию "Секо"</FormattedMessage></TimelineItem>
      <TimelineItem dateText="1993-1997 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident5-Timeline7">Фотограф в ТОО "Солвис"</FormattedMessage></TimelineItem>
      <TimelineItem dateText="2022 г." style={{color:'#00bfe6'}} dateInnerStyle={{background:'#1a9fff',color:'#000000',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id="Ident5-Timeline8">Умер в Минске в семейном кругу</FormattedMessage></TimelineItem>
    </Timeline>
      );

  }
}

function Gal(props){
  if(props.ident==3){
    return(
      <PhotoAlbum  layout="masonry" padding="15"  photos={baretty} />

    );
  }
  else if(props.ident==2){
    return(
      <PhotoAlbum  layout="masonry" padding="15"  photos={bulgak} />
    );
  }
  else if(props.ident==4){
    return(
      <PhotoAlbum  layout="rows" padding="15"  photos={lihtarovich} />
    );

  }
  else if(props.ident==1){
    return(
      <PhotoAlbum  layout="rows" padding="15"  photos={alekseev} />
    );

  }
  else if(props.ident==5){
    return(
      <PhotoAlbum  layout="masonry" padding="15"  photos={kaltovich} />
    );

  }
}

function Vid(props){
  if(props.ident==3){
    return(
      <iframe width="560" height="315" src="https://www.youtube.com/embed/rSuNh1QXSWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    );

  }
  else if(props.ident==2){
    return(
      <iframe width="560" height="315" src="https://www.youtube.com/embed/OUl9EEOXAeY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    );

  }
  else if(props.ident==4){
    return(
      <iframe width="560" height="315" src="https://www.youtube.com/embed/YEoAX0pQBsE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    );

  }
  else if(props.ident==1){
    return(
      <iframe width="560" height="315" src="https://www.youtube.com/embed/3xMqE9o7U90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    );

  }
  else if(props.ident==5){
    return(
      <iframe width="560" height="315" src="https://www.youtube.com/embed/tKBB-DGr_p4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    );

  }
  
}


function Maps(props){
  if(props.ident==3){
    return(
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d129513.60648132818!2d18.034973465459565!3d51.73345997280634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ac5913393e6a7%3A0x719f8f40ae38aad3!2zNjItODAwINCa0LDQu9C40YgsINCf0L7Qu9GM0YjQsA!5e1!3m2!1sru!2sby!4v1670674875829!5m2!1sru!2sby" style={{width:600,height:600}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    );

  }
  else if(props.ident==2){
    return(
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186362.27068857756!2d25.112953171338248!3d54.70060369226324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd93fb5c6408f5%3A0x400d18c70e9dc40!2z0JLQuNC70YzQvdGO0YEsINCS0LjQu9GM0L3RjtGB0YHQutC-0LUg0LPQvtGA0L7QtNGB0LrQvtC1INGB0LDQvNC-0YPQv9GA0LDQstC70LXQvdC40LUsINCb0LjRgtCy0LA!5e1!3m2!1sru!2sby!4v1670696391028!5m2!1sru!2sby" style={{width:600,height:600}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    );

  }
  else if(props.ident==4){
    return(
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79916.02070983403!2d27.5354753678537!3d53.888676020811374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQug!5e1!3m2!1sru!2sby!4v1670751865058!5m2!1sru!2sby" style={{width:600,height:600}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    );
  }
  else if(props.ident==1){
    return(
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79916.02070983403!2d27.5354753678537!3d53.888676020811374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQug!5e1!3m2!1sru!2sby!4v1670751865058!5m2!1sru!2sby" style={{width:600,height:600}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    );
  }
  else if(props.ident==5){
    return(
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79916.02070983403!2d27.5354753678537!3d53.888676020811374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQug!5e1!3m2!1sru!2sby!4v1670751865058!5m2!1sru!2sby" style={{width:600,height:600}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    );
  }
  
}


function Person_Page(props) {
    console.log(props.ident);
  const  [locale,setLocale]= useState(LOCALES.RUSSIAN);
    return (
      <IntlProvider messages={messages[locale]} locale={locale}>
      <header class="header-container">
        <div class="languages">
            <button onClick={()=>setLocale(LOCALES.RUSSIAN)}><FormattedMessage id="Rulang"/></button>
            <button onClick={()=>setLocale(LOCALES.ENGLISH)}><FormattedMessage id="Englang"/></button>
          </div> 
            <div class="GoBack">
                 <Back_button></Back_button>
            </div>
      </header>
      <h1 className="text-coloring"><FormattedMessage id="AboutDoer">Информация о деятеле:</FormattedMessage></h1>
      <section className="field">
        <div className="main_div">
          <Person_info ident={props.ident}></Person_info>
        </div>
      </section>
      <TimeLine ident={props.ident}></TimeLine>
      <h2 className="text-coloring"><FormattedMessage id="AuthorsWorks">Работы автора:</FormattedMessage></h2>
      <Gal ident={props.ident}></Gal>
      <h2 className="text-coloring"><FormattedMessage id="Video">Видеоролик:</FormattedMessage></h2>
      <section className="field">
        <Vid ident={props.ident}></Vid>
      </section>
      <h2 className="text-coloring"><FormattedMessage id="AuthorsPlace">Основное место деятельности:</FormattedMessage></h2>
      <section className="field">
        <Maps ident={props.ident}></Maps>
      </section>
     
      </IntlProvider>
    );
 
}

export default Person_Page;