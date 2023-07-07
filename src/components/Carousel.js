import Data from '../data.js';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, } from 'swiper/modules';


export default function Carousel() {
    // map over data.js
    /* img={card.coverImg}
        text={card.description}
        title={card.title}
        price={card.price}
        rating={card.stats.rating}
        country={card.location}
        space={card.openSpots} */
    let cards = Data.map((card) => {
        return  <SwiperSlide><Card 
        {...card}
        />
        </SwiperSlide>

})

// swiper config and rendering cards
return (

    <div className=''>
    <Swiper
    style={{
        "--swiper-pagination-color": "#FF5A5F",
        "marginLeft": "60px",
    }}
    loop={true}
    slidesPerView={1}
    spaceBetween={30}
    modules={[Pagination, Autoplay]}
    pagination={{
        clickable: true,
    }}
    breakpoints={{
        575: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1280: {
            slidesPerView: 5,
        }
    }}
    autoplay={{ delay: 2000}}
    className="mySwiper"
  > 
  {cards}
    
  </Swiper>
  </div>
)

}