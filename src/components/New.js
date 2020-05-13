import React from "react";
import styles from "./New.module.css";

const New = ({ aNew }) => {
  const { title, description, url, urlToImage, source } = aNew;

  const image = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;

  return (
    <div className="col s12 m6 l4">
      <div className="card medium">
        {image}
        <div className={`${styles.content_in_card} card-content`}>
          <h3 className={styles.news_desc}>{title}</h3>
          <p>{description}</p>
        </div>

        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            See complete new..
          </a>
        </div>
      </div>
    </div>
  );
};

export default New;
