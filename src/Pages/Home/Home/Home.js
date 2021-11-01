import React from 'react';
import Banner from '../Banner/Banner';
import Choice from '../Choice/Choice';
import Booking from '../Booking/Booking';
import Single from '../Single/Single';
import Header from './../../Shared/Header/Header';
import About from './../About/About';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <br />
            <br />
            <br />
            <Choice></Choice>
            <br />
            <br />
            <br />
            <br />
            <Booking></Booking>
            <br />
            <br />
            <About></About>
            
        </div>
    );
};

export default Home;