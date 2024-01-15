import React from 'react';
import Banner from './Banner';
import Catagory from './Catagory';
import ChefServices from './ChefServices';
import PopulerMenu from './PopulerMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <ChefServices></ChefServices>
            <PopulerMenu></PopulerMenu>
        </div>
    );
};

export default Home;