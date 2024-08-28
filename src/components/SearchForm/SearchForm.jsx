import { useState } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import searchicon from "../../assets/icon-search.svg";

import "./SearchForm.css";
function SearchForm() {
  const [username, setUsername] = useState("");

  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setError(null);
    setUserData(null);
    try {
      const response = await fetch(`http://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      setUserData(result);
      console.log(userData);
    } catch (err) {
      setError(err.message);
    }
  };
  if (error) {
    return (
      <>
        <div className="grid2">
          <div className="searchform">
            <img src={searchicon}></img>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Search GitHub username..."
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div><h1>{error}</h1></div>

        
      </>
    );
  }

  if (!userData) {
    return (
      <>
        <div className="grid2">
          <div className="searchform">
            <img src={searchicon}></img>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Search GitHub username..."
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div>
          <h1>loading.....</h1>
        </div>
      </>
    );
  }
    return (
      <>
        <div className="grid2">
          <div className="searchform">
            <img src={searchicon}></img>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Search GitHub username..."
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <ProfileCard
          avatarUrl={userData.avatar_url}
          username={userData.login}
          joinDate={userData.created_at}
          bio={userData.bio}
          repos={userData.public_repos}
          followers={userData.followers}
          following={userData.following}
          location={userData.location}
          twitter={userData.twitter_username}
          website={userData.blog}
          githubUrl={userData.html_url}
        />
      </>
    );
  }

export default SearchForm;
