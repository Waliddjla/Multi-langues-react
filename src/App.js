import React from "react";
import Contenu from "./Components/Contenu/contenu";
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs";
import ContextProvider from "./context/langContext";

function App() {
  return (
    <ContextProvider>
    <ToggleLangs/>
    <Contenu/>
    </ContextProvider>
  );
}

export default App;
