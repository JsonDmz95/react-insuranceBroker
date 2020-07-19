import React, {useState} from "react";
import styled from '@emotion/styled';

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
  background-color: #00838F;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform:uppercase;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all ease 0.3s;
  margin-top: 1rem;

  &:hover{
    background-color: #26c6da;
  }
`;

const Form = () => {
  const [info, saveInfo] = useState({
    origin: '',
    year: '',
    plan: ''
  });

  return (
    <form>
      <FieldGroup>
        <Label>Origin</Label>
        <Select>
          <option value="">--Select--</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </Select>
      </FieldGroup>

      <FieldGroup>
        <Label>Year</Label>
        <Select>
          <option value="">--Select--</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </FieldGroup>

      <FieldGroup>
        <Label>Plan</Label>
        <InputRadio type="radio" name="plan" value="basic" /> Basic
        <InputRadio type="radio" name="plan" value="complete" /> Complete
      </FieldGroup>

      <Button type="button">Quote</Button>
    </form>
  );
};

export default Form;
