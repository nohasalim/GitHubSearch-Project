import { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  const [pagemode, setpagemode] = useState(false);

  function handleonchange(event) {
    let bodyElements = document.querySelector("main");
    if (!pagemode) {
      bodyElements.classList.add("DarkMode");
    } else {
      bodyElements.classList.remove("DarkMode");
    }
    setpagemode(event.target.checked);
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

          <SearchForm></SearchForm>
        </section>
      </main>
    </>
  );
}

export default App;
