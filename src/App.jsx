import { useState } from "react";
import "./App.css";
import data from "./data.json";
import Accordian from "./components/Accordian";

function App() {
  const [posts, setPosts] = useState(data.faqs);
  var query = "";

  const handleSearch = (e) => {
    query = e.target.value;
    query.length > 0
      ? setPosts(
          data.faqs.filter((post) =>
            post.title.toLowerCase().includes(query.toLowerCase())
          )
        )
      : setPosts(data.faqs);
  };
  return (
    <>
      <div>
        <input
          type="search"
          className="search-box"
          placeholder="Search"
          onChange={handleSearch}
        />
      </div>
      {posts.map((item, index) => (
        <Accordian key={index} post={item} />
      ))}
    </>
  );
}

export default App;
