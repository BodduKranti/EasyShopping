"use client"
import { useRef } from "react";
import Brandslider from "./component/BrandSlider/Brandslider";
import CommonTitle from "./component/CommonTitle";
import MyCarousel from "./component/HeroSlider/Heroslider";
import ProductCategoryList from "./component/Product/ProductCategoryList";
import ProductItems from "./component/Product/ProductItems";
import { Products } from "./component/ProductJson";
import RightBanner from "./component/rightBanner/RightBanner";
import Image from "next/image";
import { useAppSelector } from "./ReduxStore/ReduxHook/ReduxHooks";
import { UseContextAuth } from "./contextApi/ContextApi";


export default function Home() {
    const { cartProdImg } = useAppSelector((state) => state.product)
    const { showaddtoCrtImg } = UseContextAuth()

    console.log(showaddtoCrtImg)
    return (
        <>

            <MyCarousel />

            <div className="w-full py-8 bg-[#ECF4FE]">
                <div className="container">
                    <CommonTitle
                        mainTitle={"Categories"}
                    />
                    <ProductCategoryList />
                </div>
            </div>


            <div className="container my-8">

                <div className="w-full block md:flex md:gap-4">
                    <div className="w-full md:w-3/4">
                        <CommonTitle
                            mainTitle={"Today's Popular Pick"}
                        />

                        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:space-y-0 space-y-4">
                            {/* <div ref={showaddtoCrtImg} className={`fly-cart absolute 
                        `}>
                                <Image
                                    fill
                                    src={cartProdImg}
                                    alt=''
                                    className='inline w-full h-full object-contain !relative '
                                />
                            </div> */}

                            {Products.map((data: any) => (
                                <>
                                    <ProductItems
                                        prodItems={data}
                                    />
                                </>
                            ))}

                        </div>
                    </div>
                    <div className="w-full md:w-1/4">
                        <RightBanner />
                    </div>
                </div>
            </div>

            <div className="w-full bg-gray-100 py-8">
                <div className="container">
                    <CommonTitle
                        mainTitle={"Trending Brands"}
                    />
                    <div className="w-full py-5">
                        <Brandslider />
                    </div>
                </div>
            </div>

        </>
    );
}
