import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import Homepage3 from '../HomePage3'
import AboutPage from '../AboutPage'
import CasePage from '../CasePage'
import CaseSinglePage from '../CaseSinglePage'
import EventPage from '../EventPage'
import EventPageSingle from '../EventPageSingle'
import DonatePage from '../DonatePage'
import VolunteerPage from '../volunteerPage'
import BlogPage from '../BlogPage'
import BlogPageLeft from '../BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogDetails from '../BlogDetails'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide'
import BlogDetailsFull from '../BlogDetailsFull'
import ErrorPage from '../ErrorPage'
import ContactPage from '../ContactPage'
import LoginPage from '../LoginPage'
import SignUpPage from '../SignUpPage'
import ForgotPassword from '../ForgotPassword'
import Otp from '../otp/Otp';
import Changepassword from '../changepassword/Changepassword';
import Profile from '../../components/profile/Profile';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='home' element={<Homepage />} />
          <Route path='home2' element={<Homepage2 />} />
          <Route path='home3' element={<Homepage3 />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='case' element={<CasePage />} />
          <Route path='case-single' element={<CaseSinglePage />} />
          <Route path='event' element={<EventPage />} />
          <Route path='event-details' element={<EventPageSingle />} />
          <Route path='donate' element={<DonatePage />} />
          <Route path='volunteer' element={<VolunteerPage />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-details' element={<BlogDetails />} />
          <Route path='blog-details-left' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-details-fullwidth' element={<BlogDetailsFull />} />
          <Route path='404' element={<ErrorPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignUpPage />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='otp' element={<Otp />} />
          <Route path='change-password' element={<Changepassword />} />
          <Route path='profile' element={<Profile />} />



          <Route path='*' element={<ErrorPage />} />

        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default AllRoute;
