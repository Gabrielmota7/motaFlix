import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import WebChat from './components/WebChat';

export default () => {

  const [movieList, setMovieList] = useState([]);
  // const [featuredData, setFeaturedData] = useState(null);
  const [webChat, setWebChat] = useState([]);


  useEffect(()=>{
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o featured
      // let originals = list.filter(i=>i.slug === 'originals');
      // let randomChosen = Math.floor(Math.random() * (originals[0].items.results.lenght - 1));
      // let chosen = originals[0].items.results[randomChosen];
      // let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'movie', 'tv');
      // setFeaturedData(chosenInfo);

      // console.log(chosen)
      // console.log(chosenInfo)
     
   
    }

    loadAll();
  }, []);

  return (
    <div className="page">

      {/* {featuredData &&
        <FeaturedMovie item={featuredData} />
      }  */}

      

     <section className="lists">
       {movieList.map((item, key)=>(
         <MovieRow key={key} title={item.title} items={item.items}/>
       ))}
       <WebChat/>
     </section>
    </div>
  );

}