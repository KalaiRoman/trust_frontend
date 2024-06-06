import React, {Fragment} from 'react';
import Header from '../../components/header'
import Hero3 from '../../components/hero3'
import Mission from '../../components/mission'
import About from '../../components/about'
import CaseSlide from '../../components/case'
import CounterSection from '../../components/counter'
import TeamSection from '../../components/team'
import EventSection from '../../components/event'
import CtaSection from '../../components/cta'
import WorldSection from '../../components/world'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const HomePage3 =() => {
    return(
        <Fragment>
            <Header/>
            <Hero3/>
            <Mission subclass={'section-padding'}/>
            <About/>
            <CaseSlide/>
            <CounterSection countclass={'wpo-counter-style-2'}/>
            <TeamSection/>
            <WorldSection worldclass={'wpo-world-area-2'}/>
            <EventSection/>
            <CtaSection ctaclass={'wpo-cta-area-2'}/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage3;