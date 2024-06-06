import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import BlogFullwidth from '../../components/BlogFullwidth'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const BlogPageFullwidth =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogFullwidth/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPageFullwidth;

