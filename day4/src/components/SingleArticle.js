import Loader from "./Loader";
import CommentBox from "./CommentBox";
import React from "react";
import { articlesURL, localStorageKey } from "../utils/constant";
import { Link, withRouter } from "react-router-dom";
import UserContext from "../context/UserContext";

class SingleArticle extends React.Component {
  state = {
    article: null,
    error: "",
  };
  static contextType = UserContext;
  componentDidMount() {
    let slug = this.props.match.params.slug;
    fetch(articlesURL + "/" + slug)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        this.setState({
          article: data.article,
          error: "",
        });
      })
      .catch((err) => {
        this.setState({ error: "Not able to fetch articles!" });
      });
  }
  handleEdit = () => {
    let { slug } = this.state.article;

    this.props.history.push({
      pathname: `/articles/edit/${slug}`,
      article: this.state.article,
    });
  };

  handleDelete = () => {
    let { user } = this.props;

    fetch(articlesURL + "/" + this.props.match.params.slug, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage[localStorageKey],
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then(({ errors }) => {
            return Promise.reject(errors);
          });
        }
        this.props.history.push(`/profiles/${user.username}`);
      })
      .catch((err) => console.log(err));
  };

  render() {
    if (!this.state.article) {
      return (
        <div className="container">
          <Loader />
        </div>
      );
    }

    if (this.state.error) {
      return <p>{this.state.error}</p>;
    }

    let { article } = this.state;
    let { isLoggedIn, user } = this.context.data;
    return (
      <React.Fragment>
        <main>
          <div className="article-hero">
            <div className="container">
              <h1>{article.title}</h1>
              <div className="flex jc-start al-center">
                <img src={article.author.image} alt="icon"></img>
                <div>
                  <h3>{article.author.username}</h3>
                  <p className="date">{article.createdAt}</p>
                </div>
                <div>
                  {isLoggedIn &&
                    (this.props.user.username === article.author.username ? (
                      <div className="follow-box">
                        <button className="btn" onClick={this.handleEdit}>
                          Edit
                        </button>
                        <button className="btn" onClick={this.handleDelete}>
                          Delete
                        </button>
                      </div>
                    ) : (
                      <div className="follow-box">
                        <button className="btn" onClick={this.handleEdit}>
                          +Follow ${article.author.username}
                        </button>
                        <button className="btn" onClick={this.handleDelete}>
                          <i className={"fa fa-heart fa-xs"}></i>
                          &nbsp; Favourite Post&nbsp;
                          <span>{article.favoritesCount}</span>
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <p className="single-article">{article.body}</p>
            <ul className="flex jc-start">
              {article.tagList.map((tag, i) => (
                <li key={i} className="taglist">
                  {tag}
                </li>
              ))}
            </ul>
            <hr />
            {isLoggedIn && <CommentBox {...this.props} slug={article.slug} />}
            {this.props.user === null ? (
              <center>
                <h6 className="flex">
                  <Link className="link" to="/signup">
                    Sign up{" "}
                  </Link>
                  &nbsp; or &nbsp;
                  <Link className="link" to="/signin">
                    Sign in
                  </Link>
                  &nbsp; to add comments on this article.
                </h6>
              </center>
            ) : (
              ""
            )}
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default withRouter(SingleArticle);
