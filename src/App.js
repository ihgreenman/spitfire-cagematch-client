import React, { Component } from 'react';
import ApolloShell from './containers/ApolloShell';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: localStorage.getItem('email') || ""
    }
  }

  setEmail = (email) => {
    // localStorage.setItem('email', email);
    this.setState({ email });
  }

  render() {
    const { email } = this.state;
    return (
      <div className="App">
        <h1>Welcome to the Spitfire Cagematch</h1>
        <ApolloShell
          email={email}
          setEmail={this.setEmail} />
      </div>
    );
  }
}

export default App;
