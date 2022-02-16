import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const page = [
  {
    id: 1,
    content:
      "Working with Micah was phenomenal! He took the time to truly get to know my organization and the impact we hope to have. His process is super collaborative.",
    founder: "—Alyssa Nguyen, Founder of Atnn Design",
    msg: "NO ONE does it like you do!",
  },
  {
    id: 2,
    content:
      "I AM DEAD AT FIRST CLICK THROUGH I AM OBSESSED! Like the nav Thank you so much for putting so much care and love into the designs, I am deceased",
    founder: " —Molly O'Neill, Founder of Fred & Co.",
    msg: "NO ONE does it like you do!",
  },
  {
    id: 3,
    content:
      "You are simply the best! The quality of work is literally unmatched! You go above and beyond to incorporate your expertise into designs.",
    founder: "—Alyssa Nguyen, Founder of Atnn Design",
    msg: "NO ONE does it like you do!",
  },
  {
    id: 4,
    content:
      "You work is just so so brilliant. I am truly blown away. Thank you again and again for sharing your mind in tandem with your heart on this project.",
    founder: " —Molly O'Neill, Founder of Fred & Co.",
    msg: "NO ONE does it like you do!",
  },
  {
    id: 5,
    content:
      "You are simply the best! The quality of work is literally unmatched! You go above and beyond to incorporate your expertise into designs.",
    founder: "—Alyssa Nguyen, Founder of Atnn Design",
    msg: "NO ONE does it like you do!",
  },
  {
    id: 6,
    content:
      "I AM DEAD AT FIRST CLICK THROUGH I AM OBSESSED! Like the nav Thank you so much for putting so much care and love into the designs, I am deceased",
    founder: " —Molly O'Neill, Founder of Fred & Co.",
    msg: "NO ONE does it like you do!",
  },
];

function SliderPage() {
  return (
    <div>
      <div className="bg-yellow-400">
        <div className=" p-8 md:p-20 border-2 border-black">
          <div className="bg-rose-200 border-2 border-black sm:p-5 md:p-14">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              //   breakpoints={{
              //     640: {
              //       slidesPerView: 1,
              //     },
              //     768: {
              //       slidesPerView: 1,
              //     },
              //     1024: {
              //       slidesPerView: 1,
              //     },
              //   }}
            >
              {page.map((whatsinside) => {
                return (
                  <SwiperSlide key={whatsinside.id}>
                    <div className="space-y-2 pt-14 px-10 text-xl">
                      <div className=" flex justify-center">
                        <p className="text-center font-exo">
                          {whatsinside.id}
                          {whatsinside.content}
                        </p>
                      </div>
                      <div className="flex justify-center font-bold ">
                        <p className="text-center mb-10 font-yan">
                          {whatsinside.msg}
                        </p>
                      </div>
                      <div className="flex justify-center pb-10">
                        <p className="text-center font-yan">
                          {whatsinside.founder}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderPage;
