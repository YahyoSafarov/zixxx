<template>
    <div class="section">
   <div
      class="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden m"
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
  
          <div class="order-2 sm:order-1 title space-y-5 lg:pr-20 relative z-30">
            <h1 class="text-6xl font-semibold text-white ml-4 mb-14">
              Смеси ZIXX для <br />
              ремонта помещений
            </h1>
            <p class="text-white ml-4">
              Высококачественные и экологически чистыесухие <br />
              строительные смеси ZIXX для отделочных работ
            </p>
            <div class="flex gap-6 ml-4">
              <button class="">Узнать больше</button>
            </div>
          </div>
  
          <div data-aos="fade-up" data-aos-offset="0" class="order-1 sm:order-2">
            <img src="../assets/image/master-usta.svg" alt="" class="" />
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
  .section{
    background: #232429;
  }
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
    left: -9.5rem;
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
  
  @media(max-width: 1200px){
    /* .m{
      display: flex;
      align-items: center;
      justify-content: center;
    } */
  
  }
  @media(max-width: 500px){
    .title h1{
      font-size: 45px;
    }
  
  }

  </style>
  