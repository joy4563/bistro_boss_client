import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <div className="my-20">
            <SectionTitle
                heading={"Testimonials"}
                subHeading={"What our clients say"}
            ></SectionTitle>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>
                        <div className="mx-24 my-4 gap-6 flex flex-col items-center">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft  className="h-28 w-14"/>

                            <p className="text-center">{review.details}</p>
                            <h3 className="text-2xl text-orange-500 font-bold">
                                {review.name}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
