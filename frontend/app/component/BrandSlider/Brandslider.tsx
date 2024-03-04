"use client"
import React from 'react'
import Slider from 'react-slick'
import { BrandList } from './BrandList'
import BrandItem from './BrandItem'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    adaptiveHeight: true,
    // nextArrow: <MdKeyboardArrowRight />,
    // prevArrow: <MdKeyboardArrowLeft />
}

const Brandslider: React.FC = () => {
    return (
        <>
            <div className="relative">
                <div className="slider-container relative">
                    <Slider {...settings}>
                        {BrandList.map((list: any) => (
                            <>
                                <BrandItem
                                    brandLogo={list}
                                />
                            </>
                        ))}
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Brandslider
