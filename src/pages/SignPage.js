import React, {useState} from 'react';
import styled from "styled-components";
import SignText from "../moleculs/sign-text/SignText";
import SignForm from "../components/form/SignForm";
import SignUpForm from "../components/form/SignUpForm";
import {api} from "../api/api";
import {useDispatch} from "react-redux";
import {loginSuccess} from "../actions/actions";
import {history} from "../utils/history";

const SignPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  min-height: 100vh;

  @media screen and (max-width: 900px) {
    justify-content: center;
    padding: 10px;
  }
`

const SignPage = () => {
    const [isShow, setIsShow] = useState(false);
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const onSubmit = async (values) => {
        const response = await api.login(values);
        if (response.accessToken) {
            dispatch(loginSuccess(response))
            history.push('/profile');
        } else {
            setError(response.error)
        }
    }

    const toggleModal = () => {
        setIsShow(!isShow)
    }

    const signUp = async (values) => {
        const response = await api.register(values);
        if (!response.error) {
            setIsShow(false)
        } else {
            setError(response.error)
        }
    }

    return (
        <SignPageWrapper>
            <SignText/>
            <SignForm initialValues={{email: '', password: ''}} onSubmit={onSubmit} toggleModal={toggleModal}/>
            <span>{error}</span>
            <SignUpForm isShow={isShow} error={error} toggleModal={toggleModal} signUp={signUp}/>
        </SignPageWrapper>
    );
};

export default SignPage;
