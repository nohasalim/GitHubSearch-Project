import locationIcon from "../../assets/icon-location.svg";
import company from "../../assets/icon-company.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import github from "../../assets/icon-website.svg";
function ProfileCard({
  avatarUrl,
  username,
  bio,
  repos,
  followers,
  following,
  location,
  twitter,
  website,
  githubUrl,
}) {
  return (
    <div className="grid3">
      <div className="profile-card">
        <div>
          <img
            className="userimg"
            src={avatarUrl}
            alt="Not Found"
          />
        </div>
        <div className="grid-user-info">
          <div className="about-user">
            <div className="username-div">
              <h2>{username}</h2>
              <p>Joined {new Date().toLocaleDateString()}</p>
            </div>

            <div>
              <p>{bio || "This profile has no bio"}</p>
            </div>
          </div>

          <div className="stats">
            <div className="stats-divs">
              <span>Repos</span>
              <span>{repos}</span>
            </div>
            <div className="stats-divs">
              <span> Followers</span>
              <span>{followers}</span>
            </div>
            <div className="stats-divs">
              <span> Following</span>
              <span>{following}</span>
            </div>
          </div>
          <div className="additional-info">
            <div>
              <div className="icon">
                <img src={locationIcon}></img>
                <p>{location}</p>
              </div>
              <div className="icon">
                <img src={twitterIcon}></img>

                <p>{twitter ? `@${twitter}` : "Not Available"}</p>
              </div>
            </div>
            <div>
              <div className="icon">
                <img src={company}></img>

                <p>
                  <a href={website}></a>
                </p>
              </div>
              <div className="icon">
                <img src={github}></img>
                <p>
                  <a href={githubUrl}>GitHub</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
