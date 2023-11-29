import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Called from Constr: " + this.props.name);

    this.state = {
      count: 0,
      count1: 1,
    };
  }

  componentDidMount() {
    console.log("Called from Component Did Mount of :" + this.props.name);
  }

  componentDidUpdate() {
    console.log("Called from Component Did Update of :");
  }

  componentWillUnmount() {
    console.log("Called from Component Will Unmount");
  }
  render() {
    console.log("Called from Render: " + this.props.name);

    const { name } = this.props;
    const { count } = this.state;
    return (
      <div className="user-details">
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Decrement
        </button> */}
        {/* <h3>{this.state.count1}</h3> */}
        <h1>Name: {name}</h1>
        <p>SDL</p>
      </div>
    );
  }
}

export default UserClass;
