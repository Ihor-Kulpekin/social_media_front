import React from 'react';
import styled from "styled-components";

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  .error-message {
    color: red;
  }
  
  .input {
    width: 100%;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid rgba(211, 213, 216, 1);
    background-color: white;
    ::placeholder {
      color: rgba(211, 213, 216, 1);
    }
    :-internal-autofill-selected {
      background-color: white !important;
    }
  }
`

const Input = ({name, value, error, type, placeholder, onChange}) => {
    return (
        <InputWrapper>
            <input className="input" autoComplete="on" onChange={onChange} placeholder={placeholder} type={type} name={name} value={value} />
            {
                error ? (<div className="error-message">
                    {error}
                </div>) : null
            }
        </InputWrapper>
    );
};

export default Input;
