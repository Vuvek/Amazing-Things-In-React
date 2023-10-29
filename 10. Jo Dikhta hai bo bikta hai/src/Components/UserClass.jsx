import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    (this.state = {
      count: 0,
      count2: 2,
      userData: {},
      name: "kumar",
    }),
      (this.handleClick = this.handleClick.bind(this));
    console.log(this.props.name + "Child Constructor", this.props.name);
    if (this.props.name === "Vikas") {
      throw new Error("This name is Wrong");
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("log getDerivedStateFromProps", nextProps, prevState);
    if (nextProps.name !== prevState.name) {
      return { ...prevState, name: nextProps.name };
    }
    return null;
  }

  async getData() {
    const res = await fetch(`https://api.github.com/users/${this.props.name}`);
    const data = await res.json();
    this.setState((prev) => {
      return {
        ...prev,
        userData: data,
      };
    });
  }
  componentDidMount() {
    console.log(this.props.name + "Child ComponentDidMount", this.props.name);
    this.getData();
    this.intervalId = setInterval(() => {
      console.log("Namaste Vivek");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count == prevState.count) {
      // write logic here
    }
    if (this.state.count2 == prevState.count2) {
      // wrile logic here when count2 will change
    }
    console.log(this.props.name, "I am updated", this.props.name);
  }

  componentWillUnmount() {
    console.log("Componenet unmounted called");
    clearInterval(this.intervalId);
  }

  handleClick() {
    this.setState((prev) => {
      return {
        ...prev,
        count2: prev.count2 + 1,
      };
    });
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    console.log(this.props.name, "Child Rendered", this.props.name);
    return (
      <>
        {
          <div className="user-card">
            <h1>Component Name : {this.state.name}</h1>
            <h1>Count : {count}</h1>
            <h1>Count2 : {count2}</h1>
            <h2>Name : {this.state.userData?.name}</h2>
            <h3>Location : {this.state.userData?.location}</h3>
            <h4>Contact : {this.state.userData?.bio}</h4>
            <button onClick={this.handleClick}>Increase</button>
          </div>
        }
      </>
    );
  }
}

export default UserClass;
