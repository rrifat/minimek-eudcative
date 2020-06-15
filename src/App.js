import React from "react";
import { connect } from "react-redux";

function App({ test }) {
  return <div className="App">Data from Redux: {test}</div>;
}

const mapState = (state) => ({
  test: state.test.data,
});

export default connect(mapState)(App);
