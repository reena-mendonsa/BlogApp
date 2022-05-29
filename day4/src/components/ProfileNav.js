import React from "react";
import ProfileBanner from "./ProfileBanner";
import Articles from "./Articles";
import { articlesURL, localStorageKey } from "../utils/constant";
import Pagination from "./Pagination";

class ProfileNav extends React.Component {
  state = {
    activeTab: "author",
    articles: [],
  };

  fetchData = () => {
    fetch(
      articlesURL + `/?${this.state.activeTab}=${this.props.user.username}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage[localStorageKey]}`,
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Cannot fetch data for specified user");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        this.setState({
          articles: data.articles,
        });
      })
      .catch((err) => {
        this.setState({ error: "Not able to fetch articles!" });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  handleActive = (tab) => {
    this.setState({ activeTab: tab }, () => {
      this.fetchData();
    });
  };

  render() {
    const { activeTab } = this.state;

    const { user } = this.props;
    return (
      <section>
        <ProfileBanner user={user} />
        <div className="container">
          <div className="article-heading">
            <div className="flex">
              <button
                onClick={() => this.handleActive("author")}
                className={activeTab === "author" ? "active" : ""}
              >
                My Articles
              </button>
              <button
                onClick={() => this.handleActive("favourited")}
                className={activeTab === "favourited" ? "active" : ""}
              >
                Favourite Articles
              </button>
            </div>
            <hr />
            <Articles articles={this.state.articles} />
            <Pagination />
          </div>
        </div>
      </section>
    );
  }
}

export default ProfileNav;
