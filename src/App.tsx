import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Menu from "./Menu";
import Fager from "./Fager";
import imgUrl from "./assets/logo.jpeg";
import { drinks } from "./drink-lists/yourstonebar";

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <img src={imgUrl} alt="logo" style={{ width: 300 }} />
                <h2 style={{ marginTop: -60, marginBottom: 40 }}>Menu</h2>
                <Menu drinks={drinks} />
              </>
            }
          />
          <Route path="/fager" element={<Fager />} />
          <Route path="/mellow" element={<Fager />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
