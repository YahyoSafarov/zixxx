<template>
    <div>
      <div class="py-12 bg -mt-8 sm:py-0 relative">
        <div class="container min-h-[620px] flex items-center">
          <div class="grid grid-cols-1 mimg sm:grid-cols-2 gap-8 place-items-center">
            <!-- {/* image section */} -->
            <div data-aos="fade-up" data-aos-once="false">
              <img
                src="../assets/image/home-remont.png"
                alt=""
                class="w-full max-w-[400px]"
              />
              <img src="../assets/image/fasadnie materiali icon.png" class=" absolute ml-[300px] top-[370px] m" alt="">
            </div>
  
            <div class="lg:pr-20 relative">
              <div class="relative z-10 space-y-5">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="300"
                  class="text-4xl font-semibold text-white"
                >
                  Фасадные материалы для <br> отделки дома
                </h1>
                <p class="text-white">
                  Продукция под торговой маркой "ZIXX": -Штукатурка, Шпатлевка
                  фасадная, Краска водно-дисперсионная фасадная - позволит Вам
                  произвести качественную внешнюю отделку здания и жилого дома.
                </p>
                <p class="text-white">
                  Готовая фасадная шпатлевка на цементной основе с полимерными
                  добавками, обладающая высоко клеящимися свойствами.
                </p>
                <div class="flex gap-6">
                  <button class="btn">Узнать больше</button>
                </div>
              </div>
              <!-- {/* backgrond color blob */} -->
              <!-- <div
                class="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-50"
              ></div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .bg{
      background: #3A3B3F;
  }
  
  @media(max-width: 1200px){
    .m{
      display: none;
    }
  
    .bg{
      /* background: #3A3B3F;
      padding: 90px 2% 80px; */
  }
  
  /* .mimg{
    padding: 60px;
  } */
  }
  </style>
  