import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle";

const Catagory = () => {
    return (
        <div className="mb-14">
            <SectionTitle
                subHeading={"From 11 AM to 10 PM"}
            heading={"Order Online"}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h1 className="text-2xl text-white font-bold text-center uppercase -mt-16">
                        Salad
                    </h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" /><h1 className="text-2xl text-white font-bold text-center uppercase -mt-16">
                        Pizza
                    </h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" /><h1 className="text-2xl text-white font-bold text-center uppercase -mt-16">
                        Soup
                    </h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" /><h1 className="text-2xl text-white font-bold text-center uppercase -mt-16">
                        Cake
                    </h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" /><h1 className="text-2xl text-white font-bold text-center uppercase -mt-16">
                        Salad
                    </h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Catagory;
