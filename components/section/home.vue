<template>
    <div class="">
      <div
        class="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden"
      >
        <div class="container p-8 min-h-[700px] flex relative">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10"
          >
      
  
            <div class="order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30">
              <h1 class="text-5xl font-semibold text-white ml-4 mb-14">
                КОМПАНИЯ "RAZATA"
              </h1>
              <p class="text-white ml-4">
                ООО "RAZATA" была создана в 2009 году. Основная деятельность
                компании - производство строительных материалов под брендом
                "ZIXX". Первым продуктом для выпуска была выбрана шпатлевка для
                внутренних работ. Далее по спросу рынка начали производство
                шпатлевочных продукций таких как: фасадная шпатлевка, клей
                плиточный, усиленный плиточный клей и штукатурка. С середины 2011
                года было начато производство водно-дисперсионных красок для
                внутренних, потолочных и фасадных работ. Далее, так же по
                требованию рынка, было налажено производство строительных
                материалов: Клея PVA и грунтовки. А также компания "RAZATA"
                является оптовым поставщиком высококачественного микрокальцита от
                2 мкм для производства, на всей территории Узбекистана и за его
                пределами.
              </p>
              <!-- <div class="flex gap-6 ml-4">
                <button class="">Узнать больше</button>
              </div> -->
            </div>
  
            <div class="order-1 sm:order-2 linear">
              <!-- <img src="../../assets/image/grey-bg.png" alt="bg-grey" /> -->
              <div class="flex items-center justify-center">
                <img src="../../assets/image/zix 1.png" alt="zixx" class=" home_img" />
              </div>
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
    top: 40rem;
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
  
  .linear {
    background-image: linear-gradient(to right, #232429, rgba(64, 52, 52, 0.3)),
      url(../../assets/image/grey-bg.png);
    height: 90vh;
    width: 1065px;
    background-size: cover;
    padding: 0 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media(max-width: 520px){
.home_img{
  width: 400px;
}
}
  </style>
  