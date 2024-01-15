import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuItems from "../Shared/MenuItems";

const PopulerMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => {
                const populerMenu = data.filter(
                    (item) => item.category === "popular"
                );
                setMenu(populerMenu);
            });
    }, []);
    return (
        <div className="mb-12">
            <SectionTitle
                heading={"From our menu"}
                subHeading={"Check it out"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {menu.map((item) => (
                    <MenuItems key={item._id} item={item}></MenuItems>
                ))}
            </div>
        </div>
    );
};

export default PopulerMenu;
