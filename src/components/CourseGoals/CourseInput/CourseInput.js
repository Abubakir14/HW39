import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

// импорт css Button и useState

const FormControl = styled.div ` 
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => (props.invalid ? 'red' : 'black')}
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => (props.invalid ? 'red' : 'black')};
  background: ${props => (props.invalid ? 'rgb(197, 155, 155);' : '#transparent')};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}
`; // это styled component метод css

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState(''); // useState для получения и обрабатывания значения
  const [isValid, setIsValid] = useState(true) // чтобы манипулировать с помощью true false

  const goalInputChangeHandler = event => { 
    if(event.target.value.trim().length > 0) { // если значение больше 0 тоо setIsValid true
      setIsValid(true);
    }
    setEnteredValue(event.target.value); // значит setEnteredValueполучает значение котторое мы пишем
  };

  const formSubmitHandler = event => {
    event.preventDefault(); // чтобы при клике каждый раз не обновлялось
    if(enteredValue.trim().length === 0) { // если значение равно 0
      setIsValid(false); // setIsValid будет false
      return; // и ниче не возвращает
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}> {/*boolean атрибут чтобы isValid был первоначально false*/}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} /> {/*  инпут в котторый привязано фукц goalInputChangeHandler чтобы получать значение*/}
      </FormControl>
      <Button type="submit">Add Goal</Button> {/*кнопка */}
    </form>
  );
};

export default CourseInput;
