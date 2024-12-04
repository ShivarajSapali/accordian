import { useState } from "react";

const Accordian = ({ post }) => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="accordian">
      <h3>
        {" "}
        {post.title}
        <span onClick={() => handleToggle()}>{toggle ? "⬇️" : "⬆️"}</span>
      </h3>
      {toggle && <p>{post.body}</p>}
    </div>
  );
};

export default Accordian;
