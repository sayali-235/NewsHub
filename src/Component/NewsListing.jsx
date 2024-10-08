import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import "./NewsListing.css";
import NewsInfo from "./NewsInfo";

function NewsListing({ category }) {
  const [response, setResponse] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const maxNewsCards = 60;

  const apiUrl = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=21794adaee6e4f6b89170c96b832b0f3`;

  async function fetchNews() {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setResponse(data.articles || []);
    } catch (error) {
      console.error("Error in fetching news: ", error);
      setResponse([]);
    }
  }

  useEffect(() => {
    fetchNews();
  }, [category]);

  const handleCardClick = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  return (
    <div className="news-listing">
      {response.length > 0 ? (
        response
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
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

export default NewsListing;
