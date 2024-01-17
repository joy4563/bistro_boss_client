import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import fetured from "../../assets/home/featured.jpg";
import './feturedItem.css';
const Fetured = () => {
    return (
        <div className="py-8 my-20 fetured-item bg-opacity-10 bg-fixed ">
            <SectionTitle
                heading={"From our menu"}
                subHeading={"Check it out"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    {" "}
                    <img src={fetured} alt="" />
                </div>
                <div className="text-white md:ml-10">
                    <h4>March 20, 2023</h4>
                    <h2>WHERE CAN I GET SOME?</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Expedita dicta quas possimus inventore eius
                        temporibus quam, pariatur esse quisquam accusamus
                        adipisci magni! Ab, laborum.
                    </p>
                    <button className="btn   uppercase border-b-2 border-b-white mt-6">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Fetured;
