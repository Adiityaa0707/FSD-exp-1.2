import { useState } from "react";
import "./App.css";
import Posts from "./components/Posts";
import Platforms from "./components/Platforms";

function App() {
  const [postTitle, setPostTitle] = useState("");
  const [platformName, setPlatformName] = useState("");

  return (
    <div className="container">
      <h1>📱 Redux Toolkit Demo</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter Post Title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter Platform Name"
          value={platformName}
          onChange={(e) => setPlatformName(e.target.value)}
          className="input-field"
        />
      </div>

      <div className="section">
        <Posts postTitle={postTitle} setPostTitle={setPostTitle} />
      </div>

      <div className="section">
        <Platforms platformName={platformName} setPlatformName={setPlatformName} />
      </div>
    </div>
  );
}

export default App;
