import React ,{useEffect,useState} from 'react'
import SideNavigation from '../component/sideNavigation';
import TopNavigation from '../component/topNavigation';
import TableSection from '../component/sections/TableSection';
import ChartSection1 from '../component/sections/ChartSection1';
import {  axiosGetInstance } from '../util/axios'
import { resParser } from '../util/helper'
import { MDBRow } from 'mdbreact';
import Loader from './../image/loader.gif'
export const Admin = (props) => {
    const [pageLoader, setPageLoader] = useState(false)
    useEffect(() => {
        setPageLoader(true)
        axiosGetInstance.get('/admin').then((response) => {
            setPageLoader(false)
            resParser(response, props)
        })
    }, [])
    if (!pageLoader) {return (
        <>
        <TopNavigation {...props}/>
            <SideNavigation/>
            <main id="content" className="p-5">
                <ChartSection1 />
                <TableSection />
                <MDBRow className="mb-4">
                </MDBRow>
            </main>
            
        </>

    )
    }
    else{
        return (
            <img src={Loader} alt="loader" className="pageLoader"></img>
        );
    }
}