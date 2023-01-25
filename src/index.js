import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import moment from "moment";

const testTweet = {
  message: "creating this tweet with the use of props",
  gravatar: "avatarszoveg",
  author: {
    name: "bertaur",
    handle: "catperson"
  },
  likes: 16,
  retweets: 0,
  timestamps: "2013-03-12 21:24:37"
};

function Avatar({ hash }) {
  return (
    <img
      src="https://www.gravatar.com/avatar/${hash}"
      className="avatar"
      alt="avatar"
    />
  );
}

function Message({ message }) {
  return <div className="message">{message}</div>;
}

function Author({ author }) {
  return (
    <span className="author">
      <span className="name">{author.name}</span>
      <span className="handle">{author.handle}</span>
    </span>
  );
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;

const LikeButton = () => <i className="fa fa-heart like-button" />;
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} /> <Time time={tweet.timestamp} />
        <Message message={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
