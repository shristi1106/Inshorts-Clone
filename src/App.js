import { useState,useEffect } from "react";
import './App.css';
import axios from 'axios';
import NavInshorts from './components/NavInshorts';
import NewsContent from './components/NewsContent/NewsContent';
import apikey from "./data/config";
import Footer from './components/Footer/Footer';

function App() {
  const [category,setCategory] = useState("general");
  const [newsArray,setNewsArray] = useState([]);
  const [newsResults,setnewsResultsArray] = useState([]);
  const [loadMore,setLoadMore] = useState(20);


  const newsApi = async () => {
    try {
      // const proxyUrl = "https://cors-anywhere.herokuapp.com/";

      const news = await axios.get(
        
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadMore}`
        );
        setNewsArray(news.data.articles);
        setnewsResultsArray(news.data.totalResults);

    }
    catch(error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults,category,loadMore]);
  

  return (
    <div className="App" id="#home">
      <NavInshorts setCategory={setCategory} />
      {newsResults && (
        <NewsContent 
        setLoadMore={setLoadMore}
        loadMore={loadMore} 
        newsArray={newsArray} 
        newsResults={newsResults}
        />
      )}
      
      <Footer />
    </div>
    
  );
     
  
}

export default App;


//12 mins 05 sec after installation of axios