import React,{useState} from 'react';
import { MDBNavbar,  MDBNavbarNav,MDBCollapse, MDBNavItem, MDBIcon } from 'mdbreact';
import {axiosGetInstance} from './../util/axios'
import {resParser} from './../util/helper'
import './../style/topNavigation.css'
import Loader from './../image/loader.gif'
const TopNavigation =(props)=> {
    const [loader, setLoader] = useState(false)
const clickHandler=()=>{
    setLoader(true)
    axiosGetInstance.get("/logout").then((response) => {
        setLoader(false)
       resParser(response, props)
    }).catch((error) => {
        setLoader(false)
    })
}
        return (
            <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
                <MDBCollapse isOpen = { true } navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem>{
                            loader?<img src={Loader} alt="loader" className="loaderimg"></img>:
                            <h5 onClick={clickHandler} className="logout-button">Logout<MDBIcon className="mr-3" icon="power-off" /></h5>
                         } </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
export default TopNavigation;