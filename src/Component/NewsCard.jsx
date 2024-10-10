import "./NewsCard.css";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSelectedArticle, toggleModal } from "../redux/actions";
import logo from "../assets/logo.jpg";

function NewsCard(props) {
  const { title, description, urlToImage } = props.data;
    const dispatch = useDispatch();

  const [imageSrc, setImageSrc] = useState(urlToImage || logo);

   
  useEffect(() => {
    setImageSrc(urlToImage || logo);
  }, [urlToImage]);  

  const handleCardClick = () => {
    dispatch(setSelectedArticle(props.data));
    dispatch(toggleModal(true));
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
