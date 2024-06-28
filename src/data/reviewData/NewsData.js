import './NewsData.css';

const NewsData =[
{
    NewsImg:'images/CW_HD.jpg',
    NewsName:'Бесплатаная игра от создателей TABS',
    NewsText:'До 2 апреля, можно бесплатно забрать новую игру от создателей TABS, видимо, это что-то по типу Phasmophobia и Company, но про видеосъёмку различных стрёмных мест и создания тем самым любительских фильмов',
    NewsDate:'01.04.2024',
    NewsAutor:'Doladar'
},
{
    NewsImg:'images/KartNIGHT.jpg',
    NewsName:'Nightmer Kart наконец-то вышел',
    NewsText:'Если кто не в курсе, это типа Mario Kart, но в стилистике димейка Bloodborne. Он бесплатен и есть соло-кампания, но можно играть и просто в 4-м, правда только через "steam remote play", так что если есть желающие, можем сегодня зарубиться, правда играется он довольно специфически.',
    NewsDate:'06.06.2024',
    NewsAutor:'Doladar'
},
{
    NewsImg:'images/Epic.png',
    NewsName:'Раздача в Epic Game Store',
    NewsText:'То что раздаётся чейчас, довольно посредственная вещь, но вот следующая игрушка довольно интересная ибо от разрабов Sunless Sea, но радоватся рано учитывая тот факт что она может быть просто недоступна в нашем регионе.',
    NewsDate:'20.6.2024',
    NewsAutor:'Doladar'
}
];
const New = ({NewsImg, NewsName, NewsText, NewsDate, NewsAutor}) => {
    return (
        <div className="News">
        <img src={NewsImg} alt={NewsName}/>
        <h1>{NewsName}</h1>
        <div className='TXT'>{NewsText}</div>
        <hr/>
        <div className='BoringInf'>
            <div>{NewsDate}</div>
            <div>{NewsAutor}</div>
        </div>
        <hr/>
        </div>
    )
}

const NUK = () => (
    <div className='News'>
      {NewsData.map(item => (
        <New
          key={item.NewsName}
          NewsImg={item.NewsImg}
          NewsName={item.NewsName}
          NewsText={item.NewsText}
          NewsDate={item.NewsDate}
          NewsAutor={item.NewsAutor}
        />
      ))}
    </div>
  );
  export default NUK;