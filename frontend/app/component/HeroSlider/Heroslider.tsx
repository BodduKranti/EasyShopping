// react
"use client"
import Image from "next/image";
import * as React from "react";
import { FC } from "react";
// react-slick
import Slider from "react-slick";
// material-ui


const lists = [
    {
        bgColor: "#000000",
        subtitle: "Macbookpro",
        slideTitle: "All Systems Pro.",
        slideDescription: "The Apple M1 chip gives the 13 inch MacBook Pro",
        slideBtn: "Buy Know",
        slideImg: "/images/slider/slider-01.jpg"
    },
    {
        bgColor: "#2c5b8817",
        subtitle: "One For All",
        slideTitle: "All Systems Pro.",
        slideDescription: "No wires. A world of experiences. Unlike",
        slideBtn: "Buy Know",
        slideImg: "/images/slider/slider-02.jpg"
    },
    {
        bgColor: "#ffffff",
        subtitle: "Featured",
        slideTitle: "Studio Buds",
        slideDescription: "True Wireless Noise Cancelling Earphones",
        slideBtn: "Buy Know",
        slideImg: "/images/slider/slider-03.jpg"
    },
    {
        bgColor: "#2c5b8817",
        subtitle: "Featured",
        slideTitle: "For The Gamer",
        slideDescription: "Wrap up next-level tech for Gamers.",
        slideBtn: "Buy Know",
        slideImg: "/images/slider/slider-04.jpg"
    }
];




const MyCarousel: FC = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: false,
        arrows: false
    };
    return (
        <>
            <div className="relative">
                <div className="slider-container relative">
                    <Slider {...settings}>
                        {
                            lists.map((itmes: any) => (
                                <>
                                    <div style={{ backgroundColor: `${itmes.bgColor}`, color: `${itmes.bgColor === "#000000" ? '#ffffff' : "#000000"}` }} className={` w-full flex justify-between  text-[${itmes.bgColor === "#000000" ? '#ffffff' : "#000000"}] bg-[${itmes.bgColor}]`}>
                                        <div className="container block md:flex justify-between ps-10 pe-10 md:ps-24 md:pe-8">
                                            <div className="w-full md:w-1/2 md:flex items-center md:text-start text-center md:pt-0 pt-5">
                                                <div className="w-full">
                                                    <div className="w-full text-sm">{itmes.subtitle}</div>
                                                    <div className="w-full text-2xl my-2 font-semibold">{itmes.slideTitle}</div>
                                                    <p className="text-base">{itmes.slideDescription}</p>
                                                    <div className="w-full text-center md:text-start mt-2">
                                                        <button
                                                            className="btnPrimary py-2"
                                                        >Buy Now</button>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="w-full md:w-1/2">
                                                <figure className="w-full h-auto py-4 mb-5 md:mb-0 md:h-[350px] md:py-0">
                                                    <Image
                                                        width={558}
                                                        height={400}
                                                        className="w-full object-contain h-full"
                                                        src={`${itmes.slideImg}`}
                                                        alt=""
                                                    />
                                                </figure>

                                            </div>
                                        </div>

                                    </div>
                                </>
                            ))
                        }
                    </Slider>
                </div>

            </div>
        </>


    );
};
export default MyCarousel;
