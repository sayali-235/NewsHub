import React from "react";
import "./NewsInfo.css";
import { useDispatch } from "react-redux";
import {  toggleModal } from "../redux/actions";
 

function NewsInfo(props) {
  const dispatch = useDispatch();
  const { data, showModal } = props;
  console.log("props info", props);

  if (!showModal || !data) {
    return null;
  }

  const {
    title,
    description,
    content,
    urlToImage,
    author,
    publishedAt,
    source,
  } = data;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button
          className="close-button"
          onClick={() => dispatch(toggleModal(false))}
        >
          Close
        </button>
        <div>
          <img src={urlToImage} alt="news" className="details-image" />
        </div>
        <div className="news-details">
          <h2>{title}</h2>
          <p>
            <strong>Author:</strong> {author || "Unknown"}
          </p>
          <p>
            <strong>Source:</strong> {source?.name || "Unknown"}
          </p>
          <p>
            <strong>Published At:</strong>{" "}
            {new Date(publishedAt).toLocaleString()}
          </p>
          <p>{description}</p>
          <p>{content}</p>
           
        </div>
      </div>
    </div>
  );
}

export default NewsInfo;
