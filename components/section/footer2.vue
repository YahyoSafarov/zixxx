<template>
  <div>
    <div class="bg relative -mt-8 z-20">
      <section class="mx-auto max-w-[1200px] text-white">
        <div class="grid py-5 md:grid-cols-3">
          <div class="container">
            <h1
              class="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl"
            >
              <a href="#home">
                <img
                  src="../../assets/image/zixx-grey-logo.png"
                  class="home_img"
                  alt="image"
                />
              </a>
            </h1>
            <p class="text-gray-300">
              Высококачественные и экологически чистыесухие строительные смеси
              ZIXX для отделочных работ
            </p>
            <br />
          </div>

          <div
            class="col-span-2 grid gap-8 grid-cols-2 sm:grid-cols-3 m"
          >
            <div class="">
              <div class="">
                <h1
                  class="mb-3 text-justify text-xl hover:text-amber-300 font-bold sm:text-left sm:text-xl"
                >
                  <RouterLink to="/akademiya">Социальные медиа</RouterLink>
                </h1>

                <div class="mt-6 flex items-center gap-3">
                  <div class="tooltip facebook">
                    <RouterLink to="/">
                      <span class="tooltipText fb">Facebook</span>
                      <img src="../../assets/image/facebook (2).png" alt="" />
                    </RouterLink>
                  </div>

                  <div class="tooltip twitter">
                    <RouterLink>
                      <span class="tooltipText tw">Twitter</span>
                      <img src="../../assets/image/twitter (2).png" alt="" />
                    </RouterLink>
                  </div>

                  <div class="tooltip whatsapp">
                    <RouterLink>
                      <span class="tooltipText wa">Instagram</span>
                      <img src="../../assets/image/instagram (2).png" alt="" />
                    </RouterLink>
                  </div>

                  <div class="tooltip telegram">
                    <RouterLink>
                      <span class="tooltipText tg">Telegram</span>
                      <img src="../../assets/image/telegram (2).png" alt="" />
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class=" container">
                <h1
                  class="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl"
                >
                  Компания
                </h1>
                <ul class="flex flex-col gap-2">
                  <li
                    class="cursor-pointer transition-all duration-300 hover:translate-x-[2px]"
                  >
                    Главная
                  </li>
                  <li
                    class="cursor-pointer transition-all duration-300 hover:translate-x-[2px]"
                  >
                    О компании
                  </li>
                  <li
                    class="cursor-pointer transition-all duration-300 hover:translate-x-[2px]"
                  >
                    Продукция
                  </li>
                  <li
                    class="cursor-pointer transition-all duration-300 hover:translate-x-[2px]"
                  >
                    Контакты
                  </li>
                </ul>
              </div>
            </div>
            <div class="">
              <div class="py-8">
                <div class="flex flex-col gap-1 m2">
                  <div class="flex items-center gap-3">
                    <img
                      src="../../assets/image/phone.svg"
                      class="animate-pulse group-hover:scale-105 duration-200 cursor-pointer"
                      alt=""
                    />
                    <p class="cursor-pointer underline-hover-effect">
                      +99890 9350500
                    </p>
                  </div>

                  <div class="flex items-center gap-3 ">
                    <img
                      src="../../assets/image/email.svg"
                      class="animate-pulse group-hover:scale-105 duration-200 cursor-pointer"
                      alt=""
                    />
                    <p class="cursor-pointer underline-hover-effect">
                      ZiXX@mail <span>.com</span>
                    </p>
                  </div>
                  <div class="mt-3 flex items-center gap-3">
                    <img
                      src="../../assets/image/location.svg"
                      class="animate-pulse group-hover:scale-105 duration-200 cursor-pointer"
                      alt=""
                    />
                    <p class="cursor-pointer underline-hover-effect">
                      Ул.Навои - 3 Ташкент 100011 Узбекистан
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <!-- <div class="border-t-2 border-gray-300/50 py-6 text-center">
              @copyright 2024 "Iqtidor" || Yakhyo
            </div> -->
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
// const navigation = [{ path: "akademiya", name: "Akademiya Haqida", to: "to" }];
</script>
<style scoped>
.bg {
  background: #3a3b3f;
}
.tooltip {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: -20px;
}

/* Style text tooltip */
.tooltipText {
  background-color: #fff;
  position: absolute;
  bottom: 130%;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 14px;
  opacity: 0;
  transition: all 0.5s;
}

.grey {
  filter: sepia(1);
  transition: 0.7s ease;
}
.grey:hover {
  filter: sepia(0);
}

.fb {
  color: #ff662d;
}
.tw {
  color: #ff662d;
}
.wa {
  color: #ff662d;
}
.tg {
  color: #ff662d;
}

/*  Membuat dan style tip*/
.tooltipText::after {
  content: "";
  border-width: 5px;
  border-style: solid;
  border-color: #fff transparent transparent transparent;
  position: absolute;
  top: 100%;
  left: 40%;
  margin-left: 5%;
}

/* Style Icon */
img {
  padding: 10px 15px;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
}

/* Hover text tooltip */
.tooltip:hover .tooltipText {
  opacity: 1;
  transform: translateY(-10px);
}

/* Hover Background icon */
/* .facebook:hover img {
    background-color: #ff662d;
  }
  .twitter:hover img {
    background-color: #ff662d;
  }
  .whatsapp:hover img {
    background-color: #ff662d;
  }
  
  .telegram:hover img {
    background: #ff662d;
  } */

.underline-hover-effect {
  display: inline-block;
  padding-bottom: 0.25rem; /* defines the space between text and underline */
  position: relative;
}

.underline-hover-effect::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: rgb(255, 255, 255);
  transition: width 0.25s ease-out;
}
.underline-hover-effect:hover::before {
  width: 100%;
}

@media (max-width: 820px) {
  .m{
    display: flex;
    flex-direction: column;
  }
  .m2{
    display: flex;
    flex-direction: column;
  }
}

</style>
