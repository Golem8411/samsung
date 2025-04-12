import React from "react";
import styles from "../swiperhome/swiperhome.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import S25U from "../../assets/img/s25UHome.jpg";
import Fold from "../../assets/img/foldHome.jpg";
import Flip from "../../assets/img/flipHomeFixed2.jpg";

const swiperhome = () => {
  return (
    <section className={styles.swiperhome}>
      <div className={styles.swiperhomeWrapper}>
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={styles.carouselSlider}>
              <div className={styles.slideInner}>
                <div className={styles.sliderTxt}>
                  <a className={styles.sliderS} href="/Samsung-S25-Ultra">
                    Saiba mais
                  </a>
                  <a className={styles.sliderC} href="/Comprar-Samsung-S25-Ultra">
                    Comprar
                  </a>
                </div>
                <div className={styles.sliderImg}>
                  <img src={S25U} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.carouselSlider}>
              <div className={styles.slideInner}>
                <div className={styles.sliderTxt2}>
                  <p>Galaxy Z Fold6</p>
                  <div className={styles.aConteiner}>
                    <a className={styles.sliderS} href="">
                      Saiba mais
                    </a>
                    <a className={styles.sliderC} href="/Comprar-Samsung-Z-Fold6">
                      Comprar
                    </a>
                  </div>
                </div>
                <div className={styles.sliderImg}>
                  <img src={Fold} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.carouselSlider}>
              <div className={styles.slideInner}>
                <div className={styles.sliderTxt3}>
                  <a className={styles.sliderS} href="">
                    Saiba mais
                  </a>
                  <a className={styles.sliderC} href="/Comprar-Samsung-Z-Flip6">
                    Comprar
                  </a>
                </div>
                <div className={styles.sliderImg3}>
                  <img src={Flip} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default swiperhome;
