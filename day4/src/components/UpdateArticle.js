import React from "react";
import { articlesURL, localStorageKey } from "../utils/constant";
import { withRouter } from "react-router";
import Loader from "./Loader";

class UpdateArticle extends React.Component {
  constructor(props) {
    super();
    this.state = {
      article: "",
      title: "",
      description: "",
      body: "",
      tags: "",
      error: "",
    };
  }

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    fetch(articlesURL + `/${this.props.match.params.slug}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(({ article }) => {
        let { title, description, tagList, body } = article;
        this.setState({
          article,
          title,
          body,
          description,
          tags: tagList.join(","),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = ({ target }) => {
    let { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let { title, description, body, tags } = this.state;
    let token = "Bearer " + localStorage[localStorageKey];
    console.log(this.props.match.params.slug, title);

    fetch(articlesURL + "/" + this.props.match.params.slug, {
      method: "PUT",
      body: JSON.stringify({
        article: {
          title,
          description,
          body,
          tagList: tags.split(",").map((tag) => tag.trim()),
        },
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then(({ errors }) => {
            return Promise.reject(errors);
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.props.history.push(`/article/${this.props.match.params.slug}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let { title, description, body, tags, error, article } = this.state;
    if (!article) {
      return <Loader />;
    }
    return (
      <main>
        <section className="update-article ">
          <div className="container ">
            <form onSubmit={this.handleSubmit}>
              <legend>Edit Article</legend>
              <fieldset className="">
                <span>{error}</span>
                <input
                  type="text"
                  value={title}
                  placeholder="Title"
                  name="title"
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  value={description}
                  name="description"
                  placeholder="Description"
                  onChange={this.handleChange}
                />
                <textarea
                  rows="6"
                  value={body}
                  name="body"
                  placeholder="Articles's Body"
                  onChange={this.handleChange}
                ></textarea>
                <input
                  type="text"
                  value={tags}
                  name="tags"
                  placeholder="Tag List(comma seperated)"
                  onChange={this.handleChange}
                />
                <input
                  type="submit"
                  className="submit"
                  value="Update Article"
                />
              </fieldset>
            </form>
          </div>
        </section>
      </main>
    );
  }
}

export default withRouter(UpdateArticle);
