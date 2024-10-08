import React from "react";
import "./NewsInfo.css";

function NewsInfo(props) {
  const { showModal, setShowModal, data } = props;
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
        <button className="close-button" onClick={() => setShowModal(false)}>
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
