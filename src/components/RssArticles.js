import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Feed from './Feed';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';

function RssArticles() {
    const [articles, setArticles ] = useState([]);
    console.log(articles);

    const getArticles = async () => {
        try{
            const res = await axios.get("http://localhost:4000/");
            setArticles(res.data);
        }catch (error){
        console.log(error);}
    }

    useEffect(()=>{
        getArticles();
    },[])


  return (
    <div>
        <h1>RssArticles za lee</h1>
        <div>
        

            <div>
        {articles.map((item, i)=>

        <Feed
        key={i}
        title={item.item.title}
        link={item.item.link}
        date= {item.item.pubDate}
        creator= {item.item.creator}
        contentSnippet = {item.item.contentSnippet}
        content = {item.item.content}
        
        />

        )}
        </div>

        
        </div>

    </div>
  )
}

export default RssArticles;