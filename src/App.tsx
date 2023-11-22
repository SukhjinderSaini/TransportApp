import React, { useState } from "react";
import { Theme, AvailableThemes } from "./App.types";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RunningReport from "./components/RunningReport/RunningReport";

import "./App.css";

function App() {
  const [appliedTheme, updateTheme] = useState<Theme>({
    theme: AvailableThemes.NORMAL,
  });

  const switchTheme = () => {
    if (appliedTheme.theme === AvailableThemes.NORMAL) {
      updateTheme({ theme: AvailableThemes.FANCY });
      return;
    }
    return updateTheme({ theme: AvailableThemes.NORMAL });
  };

  return (
    <div className={`App ${appliedTheme.theme}`}>
      <Header switchTheme={switchTheme} showThemeSwitch></Header>
      <Container fluid className="main-content">
        <RunningReport></RunningReport>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
