import React from 'react';
import styled from "styled-components";
import {Formik} from "formik";
import Input from "../../moleculs/input/Input";
import Button from "../button/Button";

const StyledSignForm = styled.div`
  width: 396px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  
  .forgot-password {
    text-align: center;
    color: #1877f2;
    font-size: 15px;
    border-bottom: 1px solid rgba(211, 213, 216, 1);
    padding-bottom: 20px;
    margin-bottom: 10px;
  }
  
  .btnContainer {
    display: flex;
    justify-content: center;
  }
  
  .btn {
    background-color: #42b72a;
    color: white;
    text-transform: uppercase;
    border-radius: 8px;
    font-weight: bold;
    padding: 16px;
  }
`

const SignForm = ({initialValues, onSubmit, toggleModal}) => {
    return (
        <StyledSignForm>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {(props) => {
                    const {
                        values,
                        handleSubmit,
                        // handleChange,
                        // handleBlur,
                        // touched,
                        setFieldValue,
                        errors
                    } = props;

                    return (
                        <form onSubmit={handleSubmit}>
                            <Input value={values.email} onChange={(event)=>setFieldValue('email', event.target.value)} name="email" error={errors.email} type="text" placeholder="Email"/>
                            <Input value={values.password} onChange={(event)=>setFieldValue('password', event.target.value)} name="password" error={errors.password} type="password" placeholder="Password"/>
                            <Button text="Sign In" type="submit"/>
                            <div className="forgot-password">
                                <span>Forgot Password?</span>
                            </div>
                            <div className="btnContainer">
                                <button className="btn" type="button" onClick={toggleModal}>
                                    Create account
                                </button>
                            </div>
                        </form>
                    );
                }}
            </Formik>
        </StyledSignForm>
    );
};

export default SignForm;
