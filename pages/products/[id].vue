<template>
    <div class="">
      <div
        class="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden"
      >
        <div class="container p-8 min-h-[700px] flex relative">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10"
          >
            <!-- <img
            src="../assets/image/arra-1.png"
            class="absolute -mt-[510px] mr-[380px]"
            alt=""
          />
          <img
            src="../assets/image/valik.png"
            class="absolute -mt-[350px] mr-[180px]"
            alt=""
          /> -->
  
            <div class="order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30">
              <h1 class="text-4xl font-semibold text-white ml-4 mb-14 mt-20">
                Штукатурка Гипсовая “IZOPLASTER”
              </h1>
  
              <h3 class="text-2xl font-semibold text-white ml-4 mb-14">
                Примение:
              </h3>
  
              <p class="text-white ml-4">
                IZOPLASTER - гипсовая штукатурка с вспученным вермикулитом. Легко
                применяемая на поверхность кирпичной кладки, бетона, монолитного
                бетона и т.п. покрытий стен, не нуждается в каком-нибудь
                дополнительном материале и имеющая высококлеющую способность.
                Можно использовать непосредственно на поверхность кирпичной
                кладки, бетона, газобетона и т.п. на стенах 1-50 мм толщиной
                внутри помещения. Впитывает воздух и за счет этого балансирует
                уровень влажности. Очень легкая, обеспечивает теплоизоляцию.
              </p>
  
              <h3 class="text-2xl font-semibold text-white ml-4 mb-14">
                Описание:
              </h3>
  
              <p class="text-white ml-4">
                Перед применением поверхность необходимо очистить от всякого рода
                препятствующих приклеиванию материалов типа пыли, жира и т.п.
                Сухие и горячие поверхности необходимо перед применением намочить.
                В емкость с чистой водой в соответствующем количестве насыпается
                гипсовая штукатурка «IZOPLASTER», перемешивается миксером и на 4-5
                минут оставляется. Раствор перемешивается до исчезновения комочков
                до однородной массы. В готовый к применению раствор нельзя
                добавлять воду или гипс. При плохом или ручном перемешивании сухой
                строительной смеси могут образовываться комки. Поэтому
                настоятельно рекомендуем внимательно прочитать способ
                приготовления смеси. Необходимая наружная температура +10*С
                +35*С..
              </p>
              <div class="flex gap-6 ml-4">
                <button class="">Узнать больше</button>
              </div>
            </div>
  
            <div
              data-aos="fade-up"
              data-aos-offset="0"
              class="order-1 sm:order-2"
            >
              <img src="../../assets/image/roller-paint.png" alt="" class="" />
            </div>
          </div>
  
          <!-- <div 
            class="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper">
              
            </div> -->
  
          <div class="home_shape-small"></div>
          <div class="home_shape-big-1"></div>
          <div class="home_shape-big-2"></div>
          <div class="home_shape-bg"></div>
        </div>
      </div>
    </div>
    <Footer />
  </template>
  
  <script setup></script>
  
  <style scoped>
  .home_shape-small,
  .home_shape-big-1,
  .home_shape-big-2 {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
  }
  /* .home_shape-small{
      width: 350px;
      height: 350px;
      background-color: #26583d;
      top: -2.5rem;
      left: -1.5rem;
  } */
  .home_shape-big-1,
  .home_shape-big-2 {
    width: 450px;
    height: 450px;
  }
  .home_shape-big-1 {
    background-color: #ff662d;
    top: 50rem;
    left: -6.5rem;
  }
  
  .home_shape-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: soft-light;
    opacity: 0.3;
  }
  
  button {
    display: inline-block;
    border-radius: 16px;
    padding: 16px 32px 16px 32px;
    color: #fff;
    background: #ff662d;
    font-size: 20px;
    transition: 0.5s ease;
  }
  button:hover {
    background: transparent;
    color: #ff662d;
    box-shadow: 0 0 20px #ff662d;
  }
  </style>
  