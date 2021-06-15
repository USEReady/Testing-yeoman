import './App.css';
import React, { useEffect, useState } from 'react';
import Parent from './parent';
import Child from './Child';

const { tableau } = window;

function App() {
  const [dashboardName, setDashboardName] = useState("");

  useEffect(() => {
    tableau.extensions.initializeAsync().then(() => {
      const dashboardName = tableau.extensions.dashboardContent.dashboard.name;
      setDashboardName(dashboardName);
    });
  });

  return  (
  <React.Fragment>
     <h1> Hello {dashboardName}</h1>
    <Parent></Parent>
    {/* <Child></Child> */}
    </React.Fragment>
    )
}

export default App;
