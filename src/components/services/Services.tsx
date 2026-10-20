import { Swiper, SwiperSlide } from "swiper/react";
import { services } from "../../data";
import Card from "../card/Card";
import './Services.scss';
import 'swiper/css'
export default function Services(){
    return(
        <section className="services">
            <h2 className="services__title">{services.title}</h2>
            <Swiper
                className="services__swiper"
                spaceBetween={0}
                slidesPerView={3.5}
                
            >
                {services.list.map((item, index)=>(
                    <SwiperSlide>
                        <Card {...item}/>
                    </SwiperSlide>
                ))}
            
            </Swiper>
        </section> 
    )
}