import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import img1 from "../../assets/home/slide1.jpg"

const ChefRecomended = () => {
    return (
        <div className='mb-32'>
            <SectionTitle
                heading={"Chef Recomended"}
                subHeading={"Should try"}
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className="card w-96 shadow-xl bg-[#F3F3F3] p-0 rounded-none">
                    <figure className="w-full">
                        <img src={img1} alt="Shoes" className="w-96 h-80" />
                    </figure>
                    <div className="card-body items-center text-center text-black">
                        <h2 className="card-title ">Caeser Salad</h2>
                        <p>
                            Lettuce, Eggs, Parmesan Cheese, Chicken Breast
                            Fillets.
                        </p>
                        <div className="card-actions">
                            <button className="btn text-[#BB8506]  uppercase border-b-2 border-b-[#BB8506]">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 shadow-xl bg-[#F3F3F3] p-0 rounded-none">
                    <figure className="w-full">
                        <img src={img1} alt="Shoes" className="w-96 h-80" />
                    </figure>
                    <div className="card-body items-center text-center text-black">
                        <h2 className="card-title ">Caeser Salad</h2>
                        <p>
                            Lettuce, Eggs, Parmesan Cheese, Chicken Breast
                            Fillets.
                        </p>
                        <div className="card-actions">
                            <button className="btn text-[#BB8506]  uppercase border-b-2 border-b-[#BB8506]">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 shadow-xl bg-[#F3F3F3] p-0 rounded-none">
                    <figure className="w-full">
                        <img src={img1} alt="Shoes" className="w-96 h-80" />
                    </figure>
                    <div className="card-body items-center text-center text-black">
                        <h2 className="card-title ">Caeser Salad</h2>
                        <p>
                            Lettuce, Eggs, Parmesan Cheese, Chicken Breast
                            Fillets.
                        </p>
                        <div className="card-actions">
                            <button className="btn text-[#BB8506]  uppercase border-b-2 border-b-[#BB8506]">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecomended;