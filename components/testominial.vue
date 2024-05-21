<template>
  <div>
    <div class="py-14 dark:bg-dark bg duration-300">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          <div>
            <div class="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <!-- <div className="text-primary/70 text-7xl ">
                        <h1 className="font-bold">01</h1>
                      </div> -->
                <div>
                  <h1 class="text-2xl sm:text-4xl font-bold text-white mb-4">
                    Почему люди и компании <br />
                    выбирают нас
                  </h1>
                </div>
              </div>
              <div></div>

              <p class="leading-8 tracking-wide text-gray-300">
                Мы очень рады использовать ZIXX. мы бы порекомендовали всем.
                После этого остается только работать с компанией zixx и еще раз
                всем рекомендоваю!!!
              </p>

              <img src="../assets/image/mans.png" alt="" />

              <div class="flex gap-3">
                <img src="../assets/image/Star-gray.png" alt="" />
                <p class="text-gray-300 text-xl">Доверенный пилот</p>
              </div>

              <img
                src="../assets/image/Vector-arrow.png"
                class="absolute ml-96 m"
                alt=""
              />
            </div>
          </div>

          <div class="swipe">
            <swiper
              :slidesPerView="1"
              :spaceBetween="30"
              :loop="true"
              :pagination="{
                clickable: true,
              }"
              :modules="modules"
              class="mySwiper container"
            >
              <swiper-slide>
                <div class="p-4">
                  <div class="flex gap-3 mb-3">
                    <img src="../assets/image/round.png" alt="slide" />
                    <h3 class="text-lg mt-4">Равшан Турдиев</h3>
                  </div>
                  <div class="flex gap-2 mb-3">
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                  </div>
                  <div class="">
                    <p>
                      Мне очень понравились работы и вещи zixx.качественный и
                      доступный. Я бы порекомендовал всем использовать эту
                      компанию.
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="p-4">
                  <div class="flex gap-3 mb-3">
                    <img src="../assets/image/round.png" alt="slide" />
                    <h3 class="text-lg mt-4">Равшан Турдиев</h3>
                  </div>
                  <div class="flex gap-2 mb-3">
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                  </div>
                  <div class="">
                    <p>
                      Мне очень понравились работы и вещи zixx.качественный и
                      доступный. Я бы порекомендовал всем использовать эту
                      компанию.
                    </p>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="p-4">
                  <div class="flex gap-3 mb-3">
                    <img src="../assets/image/round.png" alt="slide" />
                    <h3 class="text-lg mt-4">Равшан Турдиев</h3>
                  </div>
                  <div class="flex gap-2 mb-3">
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                  </div>
                  <div class="">
                    <p>
                      Мне очень понравились работы и вещи zixx.качественный и
                      доступный. Я бы порекомендовал всем использовать эту
                      компанию.
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="p-4">
                  <div class="flex gap-3 mb-3">
                    <img src="../assets/image/round.png" alt="slide" />
                    <h3 class="text-lg mt-4">Равшан Турдиев</h3>
                  </div>
                  <div class="flex gap-2 mb-3">
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                  </div>
                  <div class="">
                    <p>
                      Мне очень понравились работы и вещи zixx.качественный и
                      доступный. Я бы порекомендовал всем использовать эту
                      компанию.
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="p-4">
                  <div class="flex gap-3 mb-3">
                    <img src="../assets/image/round.png" alt="slide" />
                    <h3 class="text-lg mt-4">Равшан Турдиев</h3>
                  </div>
                  <div class="flex gap-2 mb-3">
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                  </div>
                  <div class="">
                    <p>
                      Мне очень понравились работы и вещи zixx.качественный и
                      доступный. Я бы порекомендовал всем использовать эту
                      компанию.
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="p-4">
                  <div class="flex gap-3 mb-3">
                    <img src="../assets/image/round.png" alt="slide" />
                    <h3 class="text-lg mt-4">Равшан Турдиев</h3>
                  </div>
                  <div class="flex gap-2 mb-3">
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                  </div>
                  <div class="">
                    <p>
                      Мне очень понравились работы и вещи zixx.качественный и
                      доступный. Я бы порекомендовал всем использовать эту
                      компанию.
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="p-4">
                  <div class="flex gap-3 mb-3">
                    <img src="../assets/image/round.png" alt="slide" />
                    <h3 class="text-lg mt-4">Равшан Турдиев</h3>
                  </div>
                  <div class="flex gap-2 mb-3">
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                  </div>
                  <div class="">
                    <p>
                      Мне очень понравились работы и вещи zixx.качественный и
                      доступный. Я бы порекомендовал всем использовать эту
                      компанию.
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="p-4">
                  <div class="flex gap-3 mb-3">
                    <img src="../assets/image/round.png" alt="slide" />
                    <h3 class="text-lg mt-4">Равшан Турдиев</h3>
                  </div>
                  <div class="flex gap-2 mb-3">
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                  </div>
                  <div class="">
                    <p>
                      Мне очень понравились работы и вещи zixx.качественный и
                      доступный. Я бы порекомендовал всем использовать эту
                      компанию.
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="p-4">
                  <div class="flex gap-3 mb-3">
                    <img src="../assets/image/round.png" alt="slide" />
                    <h3 class="text-lg mt-4">Равшан Турдиев</h3>
                  </div>
                  <div class="flex gap-2 mb-3">
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                  </div>
                  <div class="">
                    <p>
                      Мне очень понравились работы и вещи zixx.качественный и
                      доступный. Я бы порекомендовал всем использовать эту
                      компанию.
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="p-4">
                  <div class="flex gap-3 mb-3">
                    <img src="../assets/image/round.png" alt="slide" />
                    <h3 class="text-lg mt-4">Равшан Турдиев</h3>
                  </div>
                  <div class="flex gap-2 mb-3">
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                    <img src="../assets/image/Star 4.svg" alt="star" />
                  </div>
                  <div class="">
                    <p>
                      Мне очень понравились работы и вещи zixx.качественный и
                      доступный. Я бы порекомендовал всем использовать эту
                      компанию.
                    </p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <!-- {/* Image section */} -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
<style scoped>
.bg {
  background: #37383c;
}

.swiper {
  width: 415px;
  height: 258px;
}

.swiper-slide {
  background: #464646;
  color: aliceblue;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 1200px) {
  .m {
    display: none;
  }
}
@media (max-width: 915px) {
  .swipe {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 500px) {
  .swiper {
    width: 315px;
    height: 258px;
  }
}
</style>
