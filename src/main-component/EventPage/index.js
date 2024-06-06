import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import EventSection2 from '../../components/event2'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const EventPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'Our Event'} pagesub={'Event'}/> 
            <EventSection2/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default EventPage;
