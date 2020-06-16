import React from "react";
import TabBar from "./tab-bar.jsx";

const TabContainer = (props) => {
  const { tabs = [{ name: null }] } = props;
  const [currentTab, setCurrentTab] = React.useState(tabs[0]["name"]);

  const onTabClick = (name) => {
    setCurrentTab(name);
  };

  return <TabBar tabs={tabs} onTabClick={onTabClick} currentTab={currentTab} />;
};

export default TabContainer;
