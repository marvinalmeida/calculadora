import React from "react";
import Input from "../src/components/input/Input";
import Button from "../src/components/button/Button";
import { Container, Content, Row } from "./App.styles";

import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [fristNumber, setFristNumber] = useState("0");
  const [operation, setOperation] = useState('')

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const clearNumbers = () => {
    setCurrentNumber("0");
    setFristNumber('0')
    setOperation('0')
  };

  const handleSumNambers = () => {
    if (fristNumber === "0") {
      setFristNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation('+')
    } else {
      const sum = Number(fristNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  };

  const handleRemNambers = () => {
    if (fristNumber === "0") {
      setFristNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation('-')
    } else {
      const remove = Number(fristNumber) - Number(currentNumber);
      setCurrentNumber(String(remove));
      setOperation('')
    }
  };

  const handleEquals = () => {
    if(fristNumber !== '0' && operation !== '' && currentNumber !== 0){
      switch(operation){
        case '+':
          handleSumNambers();
          break;
          case '-':
          handleRemNambers();
          break;
          default:
          break;
      }
    }
  }

  return (
    <>
      <Container>
        <Content>
          <Input value={currentNumber} />
          <Row>
            <Button onClick={() => handleAddNumber("x")} label="x" />
            <Button onClick={() => handleAddNumber("/")} label="/" />
            <Button onClick={clearNumbers} label="C" />
            <Button onClick={() => handleAddNumber("X")} label="X" />
          </Row>

          <Row>
            <Button onClick={() => handleAddNumber("7")} label="7" />
            <Button onClick={() => handleAddNumber("8")} label="8" />
            <Button onClick={() => handleAddNumber("9")} label="9" />
            <Button onClick={handleRemNambers} label="-" />
          </Row>

          <Row>
            <Button onClick={() => handleAddNumber("4")} label="4" />
            <Button onClick={() => handleAddNumber("5")} label="5" />
            <Button onClick={() => handleAddNumber("6")} label="6" />
            <Button onClick={handleSumNambers} label="+" />
          </Row>

          <Row>
            <Button onClick={() => handleAddNumber("1")} label="1" />
            <Button onClick={() => handleAddNumber("2")} label="2" />
            <Button onClick={() => handleAddNumber("3")} label="3" />
            <Button onClick={handleEquals} label="=" />
          </Row>
        </Content>
      </Container>
    </>
  );
};

export default App;
