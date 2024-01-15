import React from "react";
import img1 from "../../assets/home/chef-service.jpg";
const ChefServices = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

                /* other background styles as needed */
            }}
            className="mb-20   p-28 h-[572px]"
        >
            <div className="bg-white text-black text-center py-16 px-40">
                <h1 className="text-5xl mb-2">Bistro boss</h1>{" "}
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus, libero accusamus laborum deserunt ratione
                    dolor officiis praesentium! Deserunt magni aperiam dolor
                    eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                </p>{" "}
            </div>
        </div>
    );
};

export default ChefServices;
