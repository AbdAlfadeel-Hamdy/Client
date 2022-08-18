import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "716994985845-etn1c1rk8n9kegvs4ncv1a7lpe9g94ce.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "streamy",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange.bind(this));
        });
    });
  }
  onAuthChange() {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know if you signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>You are signed in</div>;
    } else {
      return <div>You are not signed in</div>;
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
