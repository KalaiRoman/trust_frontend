import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Donate from '../../components/Donate'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const DonatePage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'Donate Now'} pagesub={'Donate'}/> 
            <Donate/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default DonatePage;
