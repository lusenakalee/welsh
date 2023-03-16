import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Feed from '../components/Feed';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Blog() {
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
        
        {articles.map((item, i) =>
        <Feed
            key={i}
            title={item.item.title}
            link={item.item.link}
            date={item.item.pubDate}
            creator={item.item.creator} 
            snippet={item.item["content:encodedSnippet"]}         
                    
        />
        )}
        <Footer/>
        

    </div>
  )
}

export default Blog;