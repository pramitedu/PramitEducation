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
    "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667",
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"
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