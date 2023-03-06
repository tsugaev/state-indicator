import React from 'react';
import { useSelector } from 'react-redux';


const StateIndicator: React.FC = () => {
  const appState = useSelector((state: any) => state.stateDisplay.appState);

  return (
    <div>
      <h2>Current State:</h2>
      <pre>{JSON.stringify(appState)}</pre>
    </div>
  );
};

export default StateIndicator;
