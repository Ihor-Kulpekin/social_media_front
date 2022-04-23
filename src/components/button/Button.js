import React from 'react';
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-bottom: 10px;

  .button {
    width: 100%;
    padding: 15px;
    background-color: #1877f2;
    border-radius: 8px;
    font-size: 15px;
    color: white;
    text-transform: uppercase;
    font-weight: bold;

    :hover {
      background-color: rgba(24, 119, 242, 0.82);
    }
  }
`

const Button = ({text= 'Sign In', type="button"}) => {
    return (
        <ButtonWrapper>
           <button className="button" type={type}>
               {text}
           </button>
        </ButtonWrapper>
    );
};

export default Button;
