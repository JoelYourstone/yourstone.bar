import React from "react";
import Menu from "./Menu";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <h1>YOURSTONE.BAR</h1>
      <h2 style={{ marginTop: -20, marginBottom: 40 }}>Menu</h2>
      <Menu />
    </AppContainer>
  );
};

export default App;
