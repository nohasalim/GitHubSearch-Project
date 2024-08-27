import { useState } from "react";
import "./App.css";
import searchicon from "./assets/icon-search.svg";
import userimg from "./assets/image-user-placeholder.png";
import location from "./assets/icon-location.svg";
import company from "./assets/icon-company.svg";
import twitter from "./assets/icon-twitter.svg";
import github from "./assets/icon-website.svg";
function App() {
  const [pagemode, setpagemode] = useState(false);
  const [username, setUsername] = useState("");

  function handleonchange(event) {
    let bodyElements = document.querySelector("main");
    if (!pagemode) {
      bodyElements.classList.add("DarkMode");
    } else {
      bodyElements.classList.remove("DarkMode");
    }
    setpagemode(event.target.checked);
  }
  function handleOnclick() {
    return console.log(username);
  }

  return (
    <>
      <main>
        <section>
          <div className="grid1">
            <div>
              <h2>Devfinder</h2>
            </div>
            <div className="ModeDiv">
              <span>DarkMode</span>
              <label className="switch">
                <input type="checkbox" onChange={handleonchange}></input>
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div className="grid2">
            <div className="searchform">
              <img src={searchicon}></img>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Search GitHub username..."
              />
              <button onClick={handleOnclick}>Search</button>
            </div>
          </div>
          <div className="grid3">
            <div className="profile-card">
              <div>
                <img
                  className="userimg"
                  src={userimg}
                  alt={`${username}'s avatar`}
                />
              </div>
              <div className="grid-user-info">
                <div className="about-user">
                  <div className="username-div">
                    <h2>{username}</h2>
                    <p>Joined {new Date().toLocaleDateString()}</p>
                  </div>

                  <div>
                    <p>This profile has no bio</p>
                  </div>
                </div>

                <div className="stats">
                  <div className="stats-divs">
                    <span> Repos</span>
                    <span> 8</span>
                  </div>
                  <div className="stats-divs">
                    <span> Followers</span>
                    <span>3965 </span>
                  </div>
                  <div className="stats-divs">
                    <span> Following</span>
                    <span> 9</span>
                  </div>
                </div>
                <div className="additional-info">
                  <div>
                    <div className="icon">
                      <img src={location}></img>
                      <p>location</p>
                    </div>
                    <div className="icon">
                      <img src={twitter}></img>

                      <p>Not Available</p>
                    </div>
                  </div>
                  <div>
                    <div className="icon">
                      <img src={company}></img>

                      <p>no company</p>
                    </div>
                    <div className="icon">
                      <img src={github}></img>

                      <p>GitHub</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
