import React from "react";
import { Menu } from "semantic-ui-react";

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

  return (
    <Menu tabular attached="top" size="massive">
      {tabItems}
    </Menu>
  );
};

export default TabBar;
