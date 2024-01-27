import React from "react";
import Banner from "./Banner";
import Catagory from "./Catagory";
import ChefServices from "./ChefServices";
import PopulerMenu from "./PopulerMenu";
import ChefRecomended from "./ChefRecomended";
import Fetured from "./Fetured";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
            <ChefServices></ChefServices>
            <PopulerMenu></PopulerMenu>
            <ChefRecomended></ChefRecomended>
            <Fetured></Fetured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
