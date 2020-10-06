import React, { useReducer, useState, useEffect } from 'react';
import './../style/login.css'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBCardHeader, MDBBtn, MDBInput,MDBContainer } from 'mdbreact'
import { axiosInstance, axiosGetInstance } from '../util/axios'
import { resParser } from '../util/helper'
import Loader from './../image/loader.gif'

const Login = (props) => {
    const [pageLoader, setPageLoader] = useState(false)
    useEffect(() => {
        setPageLoader(true)
        axiosGetInstance.get('/login').then((response) => {
            setPageLoader(false)
            resParser(response, props)
        })
    }, [])
    const [inputValues, setInputValues] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        { username: '', password: '' }
    );
    const handleOnChange = event => {
        const { name, value } = event.target;
        setInputValues({ [name]: value });
    };
    const [inputError, setInputError] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        { userNameError: false, passwordError: false }
    );
    const [loader, setLoader] = useState(false)
    const [errMsg, seterrMsg] = useState("")
    const handleSubmit = () => {
        if (inputValues.username === "") {
            setInputError({ userNameError: true });
            return
        } else {
            setInputError({ userNameError: false })
        }
        if (inputValues.password === "") {
            setInputError({ passwordError: true });
            return
        } else {
            setInputError({ passwordError: false });
        }
        setLoader(true)
        axiosInstance.post("/login", {
            username: inputValues.username,
            password: inputValues.password
        }).then((response) => {
            setLoader(false)
            let err = resParser(response, props)
            if (err !== "") {
                seterrMsg(err)
            }
        }).catch((error) => {
            setLoader(false)

        })
    }
    if (!pageLoader) {
        return (
            <MDBContainer>
            <MDBRow className="loginWrapper">
                <MDBCol sm="3"></MDBCol>
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardHeader className="form-header  header">
                                <h3 className=" headerContent">
                                    <MDBIcon icon="lock" /> Login
                                 </h3>
                            </MDBCardHeader>
                            <div className="grey-text">
                                <MDBInput label="Type your username" name="username" className={inputError.userNameError ? "error" : ""} icon="envelope" group type="text" error="wrong" success="right" onChange={handleOnChange} required />
                                <MDBInput label="Type your password" name="password" icon="lock" className={inputError.passwordError ? "error" : ""} type="password" onChange={handleOnChange} validate />
                                {
                                    errMsg === "" ? "" :
                                        <>
                                            <div class="arrow-up"></div>
                                            <div class="box">
                                                <p >
                                                    {errMsg}
                                                </p>
                                            </div>
                                        </>
                                }
                            </div>

                            <div className="text-center mt-4">
                                <MDBBtn className="mb-3 loginButton" type="submit" onClick={handleSubmit}>
                                    {loader ? <img src={Loader} alt="loader" className="loaderimg"></img> : "Login"}
                                </MDBBtn>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        );
       
    }
    else {
        return (
            <img src={Loader} alt="loader" className="pageLoader"></img>
        );
    }
}
export default Login