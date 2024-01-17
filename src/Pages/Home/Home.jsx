import React from "react";
import Banner from "./Banner";
import Catagory from "./Catagory";
import ChefServices from "./ChefServices";
import PopulerMenu from "./PopulerMenu";
import ChefRecomended from "./ChefRecomended";
import Fetured from "./Fetured";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <ChefServices></ChefServices>
            <PopulerMenu></PopulerMenu>
            <ChefRecomended></ChefRecomended>
            <Fetured></Fetured>
        </div>
    );
};

export default Home;
