import React from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types';

const SummaryContainer = styled.div`
  padding: 1rem;
  /* text-align: center; */
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;

  h2 {
    text-align: center;
  }

  li{
    span{
      text-transform: capitalize;
    }
    &+li{
    margin-top: 5px;
  }
  }
`;

const Summary = ({ info }) => {
  const { origin, year, plan } = info;
  return (
    <SummaryContainer>
      <h2>Quote Summary</h2>
      <ul>
        <li>Origin: <span>{origin}</span></li>
        <li>Year: <span>{year}</span></li>
        <li>Plan: <span>{plan}</span></li>
      </ul>
    </SummaryContainer>
  );
};

Summary.propTypes = {
  info: PropTypes.object.isRequired
}

export default Summary;
