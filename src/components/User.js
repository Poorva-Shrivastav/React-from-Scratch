import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(2);

  return (
    <div className="user-details">
      <h1>Count = {count}</h1>
      <h1>Name: {name}</h1>
      <p>Bangalore</p>
    </div>
  );
};

export default User;
