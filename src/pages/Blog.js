import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Feed from '../components/Feed';

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
        
        <div className='border center max-w-lg w-3/4'>
            <div><img src='https://zela.org/wp-content/uploads/2019/05/zela_logo_mediun-1.jpg'/></div>
        {articles.map((item, i) =>
        <Feed
            key={i}
            tiltle={item.item.title}
            link={item.item.link}
            date={item.item.pubDate}           
        />
        )}
        </div>

    </div>
  )
}

export default Blog;