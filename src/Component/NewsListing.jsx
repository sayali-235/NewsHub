import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNews, setSelectedArticle,toggleModal } from "../redux/actions";
import NewsCard from "./NewsCard";
import "./NewsListing.css";
import NewsInfo from "./NewsInfo";
import axios from "axios";
 

function NewsListing() {
  
  const dispatch =useDispatch();
  
  const { category, news, selectedArticle,showModal }= useSelector((state) => state.newsSlice);

  const maxNewsCards = 60;

  const apiUrl = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=cdbd01085d44415194b6b2765c458da2`;
  async function fetchNews(){
  try{
    const res=await axios.get(apiUrl);
    const data=res.data;
    console.log("data" ,data);
    dispatch(setNews(data.articles || []));
   console.log(data.articles);
  }
  catch(error){
    console.error("Error in fetching news: ", error);
    dispatch(setNews([]));
  }
}
  
  useEffect(() => {
    fetchNews();
  }, [category]);

  const handleCardClick = (article) => {
    dispatch(setSelectedArticle(article));
    dispatch(toggleModal(true));
  };

  return (
    <div className="news-listing">
      {news.length > 0 ? (
        news
          .slice(0, maxNewsCards)
          .map((article, index) => (
            <NewsCard
              key={index}
              data={article}
              onCardClick={handleCardClick}
            />
          ))
      ) : (
        <p>No News Available</p>
      )}

      {showModal && (
        <NewsInfo
          data={selectedArticle}
          showModal={showModal}
          setShowModal= {()=> dispatch(toggleModal(false))}
        />
      )}
    </div>
  );
}

export default NewsListing;
