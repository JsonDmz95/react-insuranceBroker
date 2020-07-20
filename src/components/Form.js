import React, { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types'; 

import { getYearsDiference, getPriceByOrigin, getPriceByPlan } from "../helper";

const FieldGroup = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all ease 0.3s;
  margin-top: 1rem;

  &:hover {
    background-color: #26c6da;
  }
`;

const Error = styled.div`
  background-color: #f46c6c;
  color: #fff;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const date = new Date().getFullYear();
const years = [];

for (let i = -1; i < 10; i++) {
  years.push(date - i);
}
// console.log(years);

const Form = ({updateSummary, updateLoading}) => {
  const [info, saveInfo] = useState({
    origin: "",
    year: "",
    plan: "",
  });

  const [error, saveError] = useState(false);

  //get values
  const { origin, year, plan } = info;

  //get info from form and save it on the state
  const handleChange = (e) => {
    saveInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  //Form submition
  const handleSubmit = (e) => {
    e.preventDefault();

    if (origin.trim() === "" || year.trim() === "" || plan.trim() === "") {
      saveError(true);
      return;
    }

    saveError(false);

    //initial price = 2000
    let price = 2000;

    //calculate year diference
    const difference = getYearsDiference(year);

    //decrease the value 3% per year
    price -= ((difference * 3) / 100) * price;

    // Asign value potenciator
    // American 15%
    // Asian 5%
    // Eropean 30%
    price *= getPriceByOrigin(origin);

    // Basic Plan +20%
    //Complete +50%
    let byPlan = getPriceByPlan(plan)
    price = parseFloat(byPlan * price).toFixed(2);
    
    updateLoading(true);

    setTimeout(() => {
      updateLoading(false);

      updateSummary({
        quote: Number(price),
        info
      });
    }, 3000);

    //Total
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error>All the fields are requireds</Error> : null}

      <FieldGroup>
        <Label>Origin</Label>
        <Select name="origin" value={origin} onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </Select>
      </FieldGroup>

      <FieldGroup>
        <Label>Year</Label>
        <Select name="year" value={year} onChange={handleChange}>
          <option value="">--Select--</option>
          {years.map((element) => (
            <option value={element} key={element}>
              {element}
            </option>
          ))}
        </Select>
      </FieldGroup>

      <FieldGroup>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basic"
          checked={plan === "basic"}
          onChange={handleChange}
        />
        {"Basic"}

        <InputRadio
          type="radio"
          name="plan"
          value="complete"
          checked={plan === "complete"}
          onChange={handleChange}
        />
        {"Complete"}
      </FieldGroup>

      <Button type="submit">Quote</Button>
    </form>
  );
};

Form.propTypes = {
  updateSummary: PropTypes.func.isRequired,
  updateLoading: PropTypes.func.isRequired
}

export default Form;
