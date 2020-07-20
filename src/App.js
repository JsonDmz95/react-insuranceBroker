import React, { useState, Fragment } from "react";
import styled from "@emotion/styled";

import Header from "./components/Header";
import Form from "./components/Form";
import Summary from "./components/Summary";
import Total from "./components/Total";
import Spinner from "./components/Spinner";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [summary, updateSummary] = useState({});

  const [loading, updateLoading] = useState(false);

  const { info, quote } = summary;

  return (
    <Container>
      <Header title="Insurance Broker" />

      <FormContainer>
        <Form updateSummary={updateSummary} updateLoading={updateLoading} />

        {loading ? <Spinner /> : null}

        {info ? (
          <Fragment>
            <Summary info={info} />
            <Total quote={quote} />
          </Fragment>
        ) : null}
      </FormContainer>
    </Container>
  );
}

export default App;
