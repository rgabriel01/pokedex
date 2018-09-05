import React, { Component } from 'react';
import store from "./store/index";
import Info from "./components/Info";
import Lineup from "./components/Lineup";
import List from "./components/list/Index";
window.App = {};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    window.App.store = store;
    window.App.store.subscribe(this.updateState);
  }

  updateState = () => {
    console.log("updating state!")
    this.setState(window.App.store.getState());
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <Lineup />
            <Info />
          </div>
          <div className="col-sm-4">
            <List />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
