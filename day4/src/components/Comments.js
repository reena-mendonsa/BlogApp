import Loader from "./Loader";
import React from "react";
import UserContext from "../context/UserContext";

function Comments(props) {
  function getDate(date) {
    let newDate = new Date(date).toISOString().split("T")[0];
    return newDate;
  }

  let { comments, loggedInUser, isLoggedIn } = props;
  // let user = UserContext;
  // let { comments } = props;
  // console.log(user, "userrrrr");
  // let { isLoggedIn } = user.data.isLoggedIn;
  // let loggedInUser = user.data.user.username;
  if (!comments) {
    return <Loader />;
  }
  return (
    <React.Fragment>
      {comments.length > 0 ? (
        comments.map((comment) => {
          return (
            <div key={comment.createdAt} className="comment">
              <div className="comnt-body">
                <p>{comment.body}</p>
              </div>
              <div className="flex comnt-info space-between item-center">
                <div className="flex">
                  <img
                    src={comment.author.image || "smiley.png"}
                    alt={comment.author.username}
                  />
                  <div className="flex item-center comnt-info1">
                    <p>{comment.author.username}</p>
                    <p>#{getDate(comment.createdAt)}</p>
                  </div>
                </div>
                <div className="flex item-center">
                  {isLoggedIn && loggedInUser === comment.author.username && (
                    <span className="delete-comment">
                      <i
                        className="fas fa-trash"
                        data-id={comment.id}
                        onClick={(e) => props.handleDelete(e)}
                      ></i>
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h2 className="no-comnt">No comments yet!</h2>
      )}
    </React.Fragment>
  );
}

export default Comments;
