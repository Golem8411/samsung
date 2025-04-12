// import required modules
import styles from "../swiper/swiper.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import S25 from "../../assets/img/s25-s25+.jpg";
import S25ultra from "../../assets/img/s25ultrawide.jpg";
import S25p from "../../assets/img/s25principal.jpg";
import S25t from "../../assets/img/s25teleobjetiva.jpg";

const SwiperComponent = () => {
  return (
    <div className={styles.swiperComponentContainer}>
      <Swiper
        spaceBetween={30}
        autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.slider1}>
            <img src={S25ultra} alt="" />
            <h2>Ultrawide</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slider2}>
            <img src={S25p} alt="" />
            <h2>Principal</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slider3}>
            <img src={S25t} alt="" />
            <h2>Teleobjetiva</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
