import React, { useState, useEffect} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'


import axios from 'axios'
import Feed from '../components/Feed';

function News() {

    const [articles,setArticles] = useState ([]);
    console.log(articles);

    const getArticles = async () => {
        try{
            const res = await axios.get("http://localhost:4000/");
            setArticles(res.data);

        }
        catch (error){
            console.log(error);

        }
    }

    useEffect(()=>{
        getArticles();
    }, [])

    console.log(articles);







  return (
    <div>
        <Navbar/>


<section>
    <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="http://cwg.co.zw/wp-content/uploads/2018/10/our-insights-2-Copy.jpg" alt="blog"/>
                
                <h2 class="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">12 November, 2018</h2>
                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Registration of securities over movable assets</h1>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">In a bid to increase access to credit for SMEs and other small businesses, Zimbabwe has passed the Movable Property Security Interests Act…</p>
                <div class="mt-4">
                    <a href="#" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                </div>
            </div>



                 
        <div class="p-6">
            <div><img src='https://zela.org/wp-content/uploads/2019/05/zela_logo_mediun-1.jpg'/></div>
        {articles.map((item, i) =>
        <Feed
            key={i}
            title={item.item.title}
            link={item.item.link}
            date={item.item.pubDate}
            creator={item.item.creator}           
        />
        )}
        </div>

       






       
        </div>
        <Footer/>

        
    </div>
</section>





    </div>
  )
}

export default News