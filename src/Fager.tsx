import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import { drinks } from "./drink-lists/fager";
import imgUrl from "./assets/fager.png";

const FagerContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Fager: React.FC = () => {
  return (
    <>
      <FagerContainer>
        <img src={imgUrl} alt="logo" height={200} />
        <h1 style={{ marginTop: 10 }}>Fager</h1>
      </FagerContainer>
      <Menu drinks={drinks} />
    </>
  );
};

export default Fager;
