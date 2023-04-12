import RSSParser from 'rss-parser';
import cors from 'cors'
import express from 'express'

const feedURL ="https://african.business/sectors/economy/feed"; 
const feedURL2 ="https://fingaz.co.zw/feed/"; 
  
const parser = new RSSParser();
let articles=[];

const parse = async url =>{
    const feed = await parser.parseURL(url);
   

    
    feed.items.forEach(item=>{
       articles.push({ item  })
       console.log(`${item.title}\n${item.link}`)
    });
   
}

parse(feedURL);
parse(feedURL2);
let app = express();
app.use(cors());
app.get('/',(req, res)=>{
    res.send(articles);
})






const server = app.listen ("4000", () =>{
     console.log("App will work")
})


export default server;