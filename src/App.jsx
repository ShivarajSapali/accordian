import { useEffect, useState } from "react";
import "./App.css";
import data from "./data.json";
import Accordian from "./components/Accordian";

function App() {
  const [posts, setPosts] = useState([]);
  const fetchData = () => {
    fetch("https://dummyjson.com/posts")
      .then((data) => data.json())
      .then((res) => setPosts(res.posts));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {posts.map((item, index) => (
        <Accordian key={index} post={item} />
      ))}
    </>
  );
}

export default App;
