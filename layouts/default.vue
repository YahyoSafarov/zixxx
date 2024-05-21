<template>
  <div>
    <header class="mb-16">
      <nav class="bg fixed w-full z-50 top-0 left-0 dark:border-gray-600">
        <ul
          class="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto"
        >
          <NuxtLink to="/" class="logo" href="#">
            <img src="../assets/image/zix logo.svg" alt="" />
          </NuxtLink>
          <input type="checkbox" id="check" />

          <span
            class="menu text-white flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg"
          >
            <li><NuxtLink to="/">Главная</NuxtLink></li>
            <li><NuxtLink to="/about">О компании</NuxtLink></li>
            <li><NuxtLink to="/products">Продукция</NuxtLink></li>
            <li><NuxtLink to="/contact">Контакты</NuxtLink></li>

            <label for="check" class="close-menu">X</label>
          </span>

          <label for="check" class="open-menu">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
            >
              <path
                d="M4 6.3252H20M4 12.3252H20M4 18.3252H20"
                stroke="#354052"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </label>
        </ul>
      </nav>
    </header>

    <!-- output the page content -->
    <div class="">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #ff662d;
}
.bg {
  background: #232429;
}

.close-menu,
.open-menu {
  position: absolute;
  cursor: pointer;
  display: none;
}

.open-menu {
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  background: #fff  ;
}

.close-menu {
  top: 20px;
  right: 20px;
}
.icon{
  color: #fff !important;
}

#check {
  display: none;
}

@media (max-width: 1200px) {
  /* header {
      display: none;
    } */
}

@media (max-width: 800px) {
  .menu {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 73%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: -100%;
    z-index: 100;
    background-color: #000;
    color: #fff;
    transition: all 0.5s ease-in-out;
    text-transform: uppercase;
    font-size: 24px;
  }

  .menu li {
    margin-top: 40px;
  }

  .menu li a {
    padding: 10px;
  }

  .close-menu,
  .open-menu {
    display: block;
  }

  #check:checked ~ .menu {
    right: 0;
  }
}
</style>
