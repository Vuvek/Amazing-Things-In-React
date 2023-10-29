import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import Modal from "./Portal2";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    console.log("Parent Constructor");
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  handleOpen() {
    this.setState((prev) => {
      return {
        ...prev,
        showModal: true,
      };
    });
  }

  handleClose() {
    this.setState((prev) => {
      return {
        ...prev,
        showModal: false,
      };
    });
  }

  render() {
    console.log("Parent Rendered is Called");
    return (
      <>
        <div
          style={{
            height: "100%",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>About</h1>
          <User />
          <UserClass name={"Vuvek"} />
          <UserClass name={"Vikas"} />
          <button onClick={this.handleOpen}>Show Secret Modal</button>
          {this.state.showModal ? (
            <Modal handleClose={this.handleClose}>
              This is the secret modal Message
            </Modal>
          ) : null}
        </div>
      </>
    );
  }
}

export default About;
