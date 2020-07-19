import React from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <Header title="Insurance Broker" />
    </Container>
  );
}

export default App;
