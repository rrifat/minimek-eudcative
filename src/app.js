import React from "react";
import { connect } from "react-redux";
import { Header, Container } from "semantic-ui-react";
import "./app.css";
import TabContainer from "features/tabs/tab-container.jsx";
import UnitInfo from "features/unit-info/unit-info.jsx";
import Pilots from "features/pilots/pilots.jsx";
import Mechs from "features/mechs/mechs.jsx";
import UnitOrganization from "features/unit-organization/unit-organization.jsx";

const tabs = [
  { name: "unitInfo", label: "Unit Info", component: UnitInfo },
  { name: "pilots", label: "Pilots", component: Pilots },
  { name: "mechs", label: "Mechs", component: Mechs },
  {
    name: "unitOrganization",
    label: "Unit Organization",
    component: UnitOrganization,
  },
];

function App() {
  return (
    <div>
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
