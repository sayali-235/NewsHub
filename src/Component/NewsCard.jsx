import "./NewsCard.css";
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";

function NewsCard(props) {
  const { title, description, urlToImage } = props.data;
  const { onCardClick } = props;

  const [imageSrc, setImageSrc] = useState(urlToImage || logo);

   
  useEffect(() => {
    setImageSrc(urlToImage || logo);
  }, [urlToImage]);  

  const handleCardClick = () => {
    onCardClick(props.data);
  };

  const handleError = () => {
    setImageSrc(logo);  
  };

  return (
    <div className="news-card" onClick={handleCardClick}>
      <img src={imageSrc} alt="news" onError={handleError} />
      <p id="title">{title}</p>
      <p id="desc" className="truncated-description">
        {description}
      </p>
    </div>
  );
}

export default NewsCard;
