import React from "react";
import Loader from "./Loader";

import { Link } from "react-router-dom";

function Articles(props) {
  const { articles, error } = props;

  let { isLoggedIn } = props.isLoggedIn;

  if (error) {
    return <p>{error}</p>;
  }
  if (!articles) {
    return (
      <div className="container">
        <Loader />
      </div>
    );
  }
  if (articles.length < 1) {
    return <h2>No articles found!</h2>;
  }
  return (
    <div className="articles">
      {articles.map((article) => (
        <section key={article.slug} className="article">
          <div className="flex jc-between al-center">
            <div className="flex">
              <img
                src={article.author.image}
                alt={article.author.username}
              ></img>

              <div>
                <h3>{article.author.username}</h3>
                <p className="date">{article.createdAt}</p>
              </div>
            </div>

            {isLoggedIn ? (
              <div className="heart">
                <i
                  className={"fa fa-heart fa-xs"}
                  onClick={(e) => props.handleFavorite(e)}
                  data-id={article.favorited}
                  data-slug={article.slug}
                  aria-hidden="true"
                ></i>
                <span>{article.favoritesCount}</span>
              </div>
            ) : (
              ""
            )}
          </div>
          <h2>{article.title}</h2>
          <p className="des">{article.description}</p>
          <div className="flex jc-between al-center">
            <Link to={`/article/${article.slug}`}>
              <button>Read more...</button>
            </Link>

            <ul className="flex ">
              {article.tagList.map((tag, i) => (
                <li key={i} className="taglist">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <hr />
        </section>
      ))}
    </div>
  );
}

export default Articles;
