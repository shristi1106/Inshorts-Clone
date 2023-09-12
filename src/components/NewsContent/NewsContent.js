import { Container } from '@material-ui/core';
import React from 'react'
import NewsCard from '../NewsCard/NewsCard';
import './NewsContent.css'

const NewsContent = ({ newsArray,loadMore, setLoadMore,newsResults}) => {
  return (
    <Container maxWidth="md">

      <div className="news-content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience, please download the app from the link below
          </span>
          <img
            alt="app-store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"            
            
            />
            <img
            alt="google-play"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"            
            />
            
        </div>

        {
          newsArray.map((newsItem) => (
            <NewsCard newsItem={newsItem} key={newsItem.title} />
          ))
        }

        {loadMore <= newsResults && (
          <>
            <hr />
            <button 
            className = "loadMore"
            onClick={() => setLoadMore(loadMore + 20)}> Load More </button>
          </>
        )}
        
        
      </div>
    </Container>
  );
};

export default NewsContent;