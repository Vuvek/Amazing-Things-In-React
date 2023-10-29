import React, { PureComponent } from "react";

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log(error, "errorororo1");
    return {
      error: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error, "errorororo");
    console.log(info, "infoolfdslks");
  }

  render() {
    if (this.state.error) {
      return <h1>Something Went Wrong</h1>;
    }
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
