import React, { Fragment } from "react";
import styled from "@emotion/styled";

const H2 = styled.h2`
  text-align: right;
`;

const Total = ({ quote }) => {
  return (
    <Fragment>
      <div>
        <H2>Total: $ {quote}</H2>
        </div>
    </Fragment>
  );
};

export default Total;
