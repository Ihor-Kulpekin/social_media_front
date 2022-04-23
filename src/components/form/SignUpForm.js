import React from 'react';
import ModalForm from "../modal/ModalForm";

const SignUpForm = ({isShow, toggleModal, signUp, error}) => {
    return <ModalForm onSubmit={signUp} isShow={isShow} error={error}  toggleModal={toggleModal} initialValues={{name: '', lastName: '', email: '', password: ''}}/>
}

export default SignUpForm;
