import {Tabs , Tab, TabList,TabPanel } from 'react-tabs';
import {useState} from 'react';
import 'react-tabs/style/react-tabs.css';
import './maintainence.css';
import Pm from './maintainence/pm';
import Clirt from './maintainence/clirt';
const Maintainence = () => {

  return (
    <div className="configTabs">
    <Tabs  selectedTabClassName="bg-white border border-##223E7F-intermediate">
    <TabList>
      <Tab>Predictive Maintainence</Tab>
      <Tab>CLIRT</Tab>
      <Tab>Template Floor Checklists</Tab>
    </TabList>

    <TabPanel>
      <Pm />
    </TabPanel >
    <TabPanel >
      <Clirt />
    </TabPanel>
    <TabPanel>
      <h2>yet to</h2>
    </TabPanel>
  </Tabs>
    </div>
  )
}

export default Maintainence
