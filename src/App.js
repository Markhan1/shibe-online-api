import { useState } from "react";
import "./App.css";
import { BASE_URL } from './api';

const Parameters = {
  count: 3,
  urls: true,
  httpsUrls: true,
};

function App() {
  const [shibeLinks, setShibeLinks] = useState(null);

  const FetchJson = () => {
    fetch(
      `${BASE_URL}?count=${Parameters.count}&urls=${Parameters.urls}&httpsUrls=${Parameters.httpsUrls}`
    )
      .then((response) => response.json())
      .then((output) => {
        setShibeLinks(output);
      });
  };
  return (
    <div className="App">
      <div className="text">{"Click on this button bellow to fetch Shiba images! <3"}</div>
      <button className="btn" onClick={FetchJson}>
        click here
      </button>
      <ul style={{listStyleType: 'none'}}>
        {shibeLinks &&
          shibeLinks.map((element, index, array) => {
            return (
              <li key={index}>
                {/* <a href={element}>{element}</a> */}
                <img className="image" alt="Loading..." src={element} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
