import React from "react";
import { Menu } from "semantic-ui-react";
import ToggleDisplay from "common/toggle-display.jsx";

const TabBar = (props) => {
  const { tabs, currentTab, onTabClick } = props;

  const tabItems = tabs.map((tabInfo) => {
    const { name, label } = tabInfo;
    return (
      <Menu.Item
        key={name}
        name={name}
        content={label}
        active={currentTab === name}
        onClick={() => onTabClick(name)}
      />
    );
  });

  const tabPanel = tabs.map((tabInfo) => {
    const { name, component: TabComponent } = tabInfo;
    return (
      <ToggleDisplay show={currentTab === name} key={name}>
        <TabComponent />
      </ToggleDisplay>
    );
  });

  return (
    <div>
      <Menu tabular attached="top" size="massive">
        {tabItems}
      </Menu>
      {tabPanel}
    </div>
  );
};

export default TabBar;
