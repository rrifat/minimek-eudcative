import React from "react";
import { connect } from "react-redux";
import { Header, Container } from "semantic-ui-react";
import "./app.css";
import TabContainer from "./features/tabs/tab-container";

const tabs = [
  { name: "unitInfo", label: "Unit Info" },
  { name: "pilots", label: "Pilots" },
  { name: "mechs", label: "Mechs" },
  { name: "unitOrganization", label: "Unit Organization" },
];

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header as="h1" inverted>
          Project Mini Mek
        </Header>
      </div>
      <Container>
        <TabContainer tabs={tabs} />
      </Container>
    </div>
  );
}

const mapState = (state) => ({
  test: state.test.data,
});

export default connect(mapState)(App);
