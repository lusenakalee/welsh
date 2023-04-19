import React, { useEffect, useState } from "react";
import axios from "axios";
import Feed from "./Feed";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function RssArticles() {
  const [articles, setArticles] = useState([]);
  console.log(articles);

  const getArticles = async () => {
    try {
      const res = await axios.get("https://welsh-rss.onrender.com");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        
        scrollbar={{ draggable: true }}
        navigation
        autoplay={{ delay: 10000 }}
        className="mySwiper px-4 pt-5 text-xs"
      >
        {articles.map((item, i) => (
          <SwiperSlide>
            <Feed
              key={i}
              title={item.item.title}
              link={item.item.link}
              date={item.item.pubDate}
              creator={item.item.creator}
              contentSnippet={item.item.contentSnippet}
              content={item.item.content}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RssArticles;
