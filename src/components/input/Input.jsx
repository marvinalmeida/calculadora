import { InputContainer } from "../input/styles.input";

const Input = ({value}) => {
  
  return (
    <InputContainer>
        <input value={value} disabled/>
    </InputContainer>
  );
};

export default Input;
