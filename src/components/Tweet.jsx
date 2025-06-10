import ProfileImage from "./ProfileImage";
import User from "./User";
import tweetsArray from "./"

function Tweet() {
  return (
    <div className="tweet">
      <ProfileImage image={"https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/ih_logo.jpeg"} />

      <div className="body">
        <div className="top">            
          <User name={tweetsArray.user.name} handle={Tweet.user.handle} />
          
          <span className="timestamp">1h ago</span>
        </div>

        <p className="message">
          the human likes to say. that i live here rent free. but i would argue.this 
          housing accommodation. is my payment. for a lifetime of love. and 
          excellent company
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
