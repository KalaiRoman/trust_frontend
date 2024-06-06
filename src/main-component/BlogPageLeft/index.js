import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import BlogLeft from '../../components/BlogLeft'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const BlogPageLeft =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogLeft/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPageLeft;

