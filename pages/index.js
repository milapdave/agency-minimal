import React, { useState } from "react";
import { Inter, DM_Sans } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import img from "../public/Customization.png";
import img2 from "../public/Vector_shape.png";
import img3 from "../public/Editing.png";
import img4 from "../public/Award.png";
import banner2 from "../public/img2.png";
import video from "../public/video.png";
import banner3 from "../public/img-5.png";
import blog1 from "../public/image.png";
import Image from "next/image";
import Button from "@/components/Button";
import YoutubePlayer from "@/components/YoutubePlayer";

import { Navigation } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const dmsans = DM_Sans({
  weight: ["400", "700", "600"],
  subsets: ["latin"],
});

export default function Home() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0); // Initialize the active slide index to 0
  const [swiper, setSwiper] = useState(null);

  const handlePaginationButtonClick = (slideIndex) => {
    console.log(slideIndex, "slideIndex");
    if (swiper) {
      swiper.slideTo(slideIndex);
      setActiveSlideIndex(slideIndex);
    }
  };

  return (
    <div className={`${dmsans.className}`}>
      <HeroSection />
      <section className="lg:py-20 py-10">
        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center lg:text-3xl text-2xl font-semibold lg:mb-20 mb-10">
            Meet exciting feature of app
          </h2>

          <div class="grid grid-cols-1 gap-4 gap-y-10 lg:grid-cols-4 lg:gap-8">
            <div class="text-center px-4">
              <Image src={img} alt="" className="mx-auto" />
              <h3 className="text-lg font-semibold my-4">
                Unlimited Customization
              </h3>
              <p className="text-base">
                Get your blood tests delivered at home collect a sample from the
                your blood tests.
              </p>
            </div>
            <div class="text-center px-4">
              <Image src={img2} alt="" className="mx-auto" />
              <h3 className="text-lg font-semibold my-4">
                Vector shape & resizable
              </h3>
              <p className="text-base">
                Get your blood tests delivered at home collect a sample from the
                your blood tests.
              </p>
            </div>
            <div class="text-center px-4">
              <Image src={img3} alt="" className="mx-auto" />
              <h3 className="text-lg font-semibold my-4">Editing freedom</h3>
              <p className="text-base">
                Get your blood tests delivered at home collect a sample from the
                your blood tests.
              </p>
            </div>
            <div class="text-center px-4">
              <Image src={img4} alt="" className="mx-auto" />
              <h3 className="text-lg font-semibold my-4">Best Award history</h3>
              <p className="text-base">
                Get your blood tests delivered at home collect a sample from the
                your blood tests.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:py-20 py-10">
        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:flex lg:items-center lg:px-8 justify-between">
          <div>
            <Image src={banner2} alt="" />
          </div>
          <div class="max-w-lg">
            <h2 class="text-3xl font-semibold sm:text-5xl sm:leading-tight">
              Boost your agencies by choosing Ninja Developers
            </h2>

            <p class="mt-4 max-w-lg sm:text-lg/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <Button color="secondary" size="large">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:py-20 py-10">
        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:flex lg:flex-col lg:items-center lg:px-8 justify-center">
          <div className="max-w-screen-sm text-center mb-10">
            <h2 className="text-3xl font-semibold sm:text-5xl sm:leading-tight mb-4">
              Leading companies trust us to develop software
            </h2>
            <p className="text-lg">
              We believe it’s important for everyone to have access to software
              especially when it comes to digital learning be navigate.
            </p>
          </div>
          <YoutubePlayer videoId={'2g811Eo7K8U'} posterImageUrl={video}/>
        </div>
      </section>
      <section className="lg:py-20 py-10">
        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center lg:text-3xl text-2xl font-semibold">
            Why customers love us
          </h2>
          <Swiper
            modules={[Navigation]}
            autoplay={true}
            slidesPerView={1}
            onSwiper={(swiper) => setSwiper(swiper)}
            onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
          >
            <SwiperSlide>
              {" "}
              <h2 className="lg:text-4xl text-xl max-w-4xl mx-auto leading-relaxed text-center lg:py-20 py-10">
                They are doing amazing job with hundred percent customer
                satisfaction, Love their work and would like to work with them
                again
              </h2>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <h2 className="lg:text-4xl text-xl max-w-4xl mx-auto leading-relaxed text-center lg:py-20 py-10">
                They are doing amazing job with hundred percent customer
                satisfaction, Love their work and would like to work with them
                again
              </h2>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <h2 className="lg:text-4xl text-xl max-w-4xl mx-auto leading-relaxed text-center lg:py-20 py-10">
                They are doing amazing job with hundred percent customer
                satisfaction, Love their work and would like to work with them
                again
              </h2>
            </SwiperSlide>
          </Swiper>

          <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-16 w-full max-w-4xl mx-auto pt-10">
            <div
              className={`${
                activeSlideIndex === 0 ? "!border-primary" : "not active"
              } py-5 border-t-4 border-transparent col-span-1 flex cursor-pointer`}
              onClick={() => handlePaginationButtonClick(0)}
            >
              <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center text-white text-xl">
                P
              </div>
              <div className="px-4">
                <h3 className="text-lg font-semibold">Pierre Hackett</h3>
                <p className="text-base text-opacity-70 text-black">
                  VP of Engineering
                </p>
              </div>
            </div>
            <div
              className={`${
                activeSlideIndex === 1 ? "!border-primary" : "not active"
              } py-5 border-t-4 border-transparent col-span-1 flex cursor-pointer`}
              onClick={() => handlePaginationButtonClick(1)}
            >
              <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center text-white text-xl">
                N
              </div>
              <div className="px-4">
                <h3 className="text-lg font-semibold">Natalia Sanz</h3>
                <p className="text-base text-opacity-70 text-black">
                  Head of Technology
                </p>
              </div>
            </div>
            <div
              className={`${
                activeSlideIndex === 2 ? "!border-primary" : "not active"
              } py-5 border-t-4  col-span-1 flex border-transparent cursor-pointer`}
              onClick={() => handlePaginationButtonClick(2)}
            >
              <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center text-white text-xl">
                P
              </div>
              <div className="px-4">
                <h3 className="text-lg font-semibold">Ece Akman</h3>
                <p className="text-base text-opacity-70 text-black">
                  Senior Marketer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:py-20 py-10">
        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:flex lg:items-center lg:px-8 justify-between">
          <div className="order-2">
            <Image src={banner3} alt="" />
          </div>
          <div class="max-w-[550px]">
            <h2 class="text-3xl font-semibold sm:text-5xl sm:leading-tight">
              Free Customer Support to ensure what you like to expect
            </h2>

            <p class="mt-4 max-w-lg sm:text-lg/relaxed">
              We offer a risk-free trial period of up to two weeks. You will
              only have to pay if you are happy with the developer and wish to
              continue. If you are unsatisfied, we’ll refund payment or fix
              issues on our dime period customers.
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <Button color="secondary" size="large">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:py-20 py-10 bg-[#F3F4F5]">
        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center lg:text-3xl text-2xl font-semibold lg:mb-20 mb-10">
            Tutorials that people love most
          </h2>

          <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div class="bg-white borer border-[#F3F4F5] rounded overflow-hidden hover:shadow-2xl">
              <Image src={blog1} alt="" className="" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4">
                  How to work with prototype design with adobe xd featuring
                  tools
                </h3>
                <p className="text-base text-opacity-70 text-black">
                  Get your blood tests delivered at home collect a sample from
                  the your blood tests.
                </p>
              </div>
            </div>
            <div class="bg-white borer border-[#F3F4F5] rounded overflow-hidden hover:shadow-2xl">
              <Image src={blog1} alt="" className="" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4">
                  How to work with prototype design with adobe xd featuring
                  tools
                </h3>
                <p className="text-base text-opacity-70 text-black">
                  Get your blood tests delivered at home collect a sample from
                  the your blood tests.
                </p>
              </div>
            </div>
            <div class="bg-white borer border-[#F3F4F5] rounded overflow-hidden hover:shadow-2xl">
              <Image src={blog1} alt="" className="" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4">
                  How to work with prototype design with adobe xd featuring
                  tools
                </h3>
                <p className="text-base text-opacity-70 text-black">
                  Get your blood tests delivered at home collect a sample from
                  the your blood tests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
