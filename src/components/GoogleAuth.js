import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "716994985845-etn1c1rk8n9kegvs4ncv1a7lpe9g94ce.apps.googleusercontent.com",
        scope: "email",
        plugin_name: "streamy",
      });
    });
  }
  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
