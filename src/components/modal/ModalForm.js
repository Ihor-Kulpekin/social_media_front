import React from 'react';
import {createPortal} from 'react-dom';
import styled from 'styled-components';
import {Formik} from 'formik';
import Button from "../button/Button";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  .link {
    color: #385898 !important;
  }

  .modal-wrapper {
    position: fixed;
    top: 30%;
    left: 0;
    z-index: 1050;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
  }

  .modal {
    z-index: 100;
    background: white;
    position: relative;
    margin: 1.75rem auto;
    border-radius: 3px;
    max-width: 500px;
    padding-top: 2rem;
  }

  .modal-header {
    display: flex;
    justify-content: flex-end;
  }

  .modal-close-button {
    font-size: 3.4rem;
    font-weight: 700;
    line-height: 1;
    color: gray;
    position: absolute;
    opacity: .3;
    background: none !important;
    cursor: pointer;
    border: none;
    right: 0;
    top: 0;
  }

  button {
    font-size: .9rem;
    font-weight: 700;
    border: none;
    border-radius: 3px;
    padding: .3rem 1rem;
    margin-left: .5rem;
  }

  .heading-container {
    border-bottom: 1px solid gray;
    padding: 0 0 10px 0;
  }

  .signup-text {
    color: #1c1e21;
    font-family: SFProDisplay-Bold, Helvetica, Arial, sans-serif;
    font-size: 32px;
    line-height: 38px;
    margin: 0;
  }

  .textQuicklyAndEasy {
    color: #606770;
    font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
    font-size: 15px;
    line-height: 24px;
    margin: 0;
  }

  .textQuicklyAndEasy, .signup-text {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .inputs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .input, .big-input {
    border-radius: 5px;
    border: 1px solid #ccd0d5;
    padding: 11px;
    background-color: #f5f6f7;
  }

  .input {
    width: 50%;

    &:first-child {
      margin-right: 10px;
    }
  }

  .big-input {
    width: 100%;
  }

  .controls-wrapper {
    padding: 2rem;
  }

  .big-input-container {
    margin-bottom: 10px;
  }

  .textTermsAndConditionals {
    color: #777;
    font-size: 11px;
  }
`


const ModalForm = ({isShow, toggleModal, initialValues, onSubmit, error}) => isShow ? createPortal(
    <Wrapper>
        <div className="modal-wrapper" aria-modal aria-hidden role="dialog">
            <div className="modal">
                <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close"
                        onClick={toggleModal}>
                    <span>&times;</span>
                </button>
                <div className="heading-container">
                    <h3 className="signup-text">Registration</h3>
                    <p className="textQuicklyAndEasy">
                        Quickly And Easy
                    </p>
                </div>
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {({
                          handleSubmit,
                          values,
                          errors,
                          setFieldValue,
                          setFieldError,
                          isSubmitting,
                      }) => {
                        return (
                            <form onSubmit={handleSubmit} className="controls-wrapper" noValidate>
                                <div className="inputs">
                                    <input onChange={(event) => {
                                        setFieldValue('name', event.target.value)
                                    }} type="text" className="input" placeholder="Name" value={values.name}/>
                                    <input onChange={(event => setFieldValue('lastName', event.target.value))}
                                           type="text" className="input" placeholder="Last Name"
                                           value={values.lastName}/>
                                </div>
                                <div className="big-input-container">
                                    <input onChange={(event => setFieldValue('email', event.target.value))} type="text"
                                           className="big-input" placeholder="Email" value={values.email}/>
                                </div>
                                <div className="big-input-container">
                                    <input onChange={(event => setFieldValue('password', event.target.value))}
                                           type="password" className="big-input" placeholder="Password"
                                           value={values.password}/>
                                </div>
                                <div>
                                    <p className="textTermsAndConditionals">
                                        Нажимая кнопку Регистрация, вы принимаете <a rel="noreferrer" target="_blank"
                                                                                     className="link textTermsAndConditionals"
                                                                                     href="https://www.facebook.com/legal/terms/update">Условия</a>, <a
                                        rel="noreferrer"
                                        target="_blank"
                                        className="link textTermsAndConditionals"
                                        href="https://www.facebook.com/about/privacy/update">Политику использования
                                        данных</a> и <a rel="noreferrer" target="_blank"
                                                        className="link textTermsAndConditionals"
                                                        href="https://www.facebook.com/policies/cookies/">Политику в
                                        отношении файлов cookie</a>. Вы можете получать от нас SMS-уведомления,
                                        отказаться от которых можно в любой момент.
                                    </p>
                                </div>
                                <Button text="Create Account" type="submit" />
                            </form>
                        );
                    }}
                </Formik>
                {error && (
                    <span>{error}</span>
                )}
            </div>
        </div>
    </Wrapper>, document.body
) : null

export default ModalForm;
