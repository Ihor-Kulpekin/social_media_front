import React from 'react';
import styled from "styled-components";

const SignTextWrapper = styled.div`
  .facebook-logo {
    font-size: 60px;
    font-weight: bold;
    font-family: "Times New Roman",sans-serif;
    color: #1877f2;
    margin-bottom: -6px;
  }
  .sign-text-facebook {
    font-size: 28px;
    line-height: 32px;
    font-weight: normal;
    max-width: 500px;
  }
  
  @media screen and (max-width: 900px){
    text-align: center;
  }
`

const SignText = () => {
    return (
        <SignTextWrapper>
            <h3 className="facebook-logo">facebook</h3>
            <p className="sign-text-facebook">
                Facebook помогает вам всегда оставаться на связи и общаться со своими знакомыми.
            </p>
        </SignTextWrapper>
    );
};

export default SignText;
