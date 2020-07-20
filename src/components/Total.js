import React, { Fragment } from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types';

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

Total.propTypes = {
  quote: PropTypes.number.isRequired
}

export default Total;
