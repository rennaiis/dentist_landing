import { Swiper, SwiperSlide } from "swiper/react";
import { services } from "../../data";
import Card from "../card/Card";
import './Services.scss';
import 'swiper/css'
export default function Services(){
    return(
        <section className="services">
            <h2 className="services__title">{services.title}</h2>
            <div className="services__container">
                <Swiper
                    className="services__swiper"
                    slidesPerView={2.4}
                    breakpoints={{
                        728:{
                            slidesPerView: 3.53,
                        }
                    }}
                    
                >
                    {services.list.map((item)=>(
                        <SwiperSlide>
                            <Card {...item}/>
                        </SwiperSlide>
                    ))}
                
                </Swiper>
            </div>
            
        </section> 
    )
}