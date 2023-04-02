import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    EffectFade,
    Autoplay,
    Navigation,
    Pagination,
} from "swiper";
import "swiper/css/bundle";


SwiperCore.use([Autoplay, Navigation, Pagination]);
const ImageUrl = [
    require("../../assets/Slider1.png"),
    require("../../assets/Slider2.jpeg"),
    require("../../assets/Slider3.png"),
]

const Slider = () => {
    return (
        <div>

            <Swiper
                slidesPerView={1}

                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}

                effect="fade"
                modules={[EffectFade]}
                autoplay={{ delay: 3000 }}

            >
                {
                    ImageUrl.map((image) => (
                        <SwiperSlide>

                            <img
                                src={image}
                                height={600}
                                width='100%'
                                alt="" />

                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </div>
    )
}

export default Slider