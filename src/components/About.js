import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       About
//       {/* <User name={"PJ function"} /> */}
//       <UserClass name={"MJ Class"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super();
    console.log("Called from Constructor - Parent");
  }

  componentDidMount() {
    console.log("Called from Component Did Mount - Parent");
  }
  render() {
    console.log("Called from Render - Parent");

    return (
      <div>
        <UserClass name={"MJ Class"} />
        {/* <UserClass name={"MJ2 Class"} /> */}
      </div>
    );
  }
}

export default About;
