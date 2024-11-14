import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import ModuleSelection from "./components/ModuleSelection";
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [showModuleSelection, setShowModuleSelection] = useState(false);

  const handleContinue = (enteredName) => {
    setName(enteredName);
    setShowModuleSelection(true); 
  };

  return (
    <div className="App">
      {showModuleSelection ? (
        <ModuleSelection name={name} />
      ) : (
        <WelcomeScreen onContinue={handleContinue} />
      )}
    </div>
  );
}

export default App;
