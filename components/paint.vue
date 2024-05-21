<template>
    <div class="wrapper">
       <div class="container">
           <div class="roller">
               <div class="handle"></div>
           </div>
           <div class="paint"></div>
       </div>
   
   </div>
   </template>
   
   <script setup></script>
   
   <style scoped>
   .wrapper {
     height: 470px;
     width: 250px;
     position: absolute;
     top: 50%;
     left: 50%;
     -webkit-transform: translate(-50%, -50%);
     -ms-transform: translate(-50%, -50%);
     transform: translate(-50%, -50%);
     transition: 0.5s ease;
   }
   .container {
     height: 250px;
     width: 250px;
     position: absolute;
     -webkit-transform: rotate(-45deg);
     -ms-transform: rotate(-45deg);
     transform: rotate(-45deg);
     top: 0;
     left: 0;
     transition: 0.5s ease;
   }
   .roller {
     height: 30px;
     width: 100px;
     border: 5px solid #28292D;
     border-radius: 50px;
     background-image: -webkit-gradient(
       linear,
       left top,
       left bottom,
       color-stop(0, #727276),
       color-stop(80%, #727276),
       color-stop(80%, #727276)
     );
     background-image: -o-linear-gradient(
       top,
       #918f88 0,
       #918f88 80%,
       #918f88 80%
     );
     background-image: linear-gradient(
       to bottom,
       #727276 0,
       #727276 80%,
       #727276 80%
     );
     position: absolute;
     margin: auto;
     left: 10px;
     right: 0;
     top: 0;
     -webkit-animation: roller 2s infinite;
     animation: roller 2s infinite;
     transition: 0.5s ease;
   }
   @-webkit-keyframes roller {
     40% {
       top: 165px;
     }
   }
   @keyframes roller {
     40% {
       top: 165px;
     }
   }
   .roller:before {
     position: absolute;
     content: "";
     /* background-color: rgba(255, 255, 255, 0.7); */
     height: 7px;
     width: 75px;
     top: 10px;
     left: 8px;
     border-radius: 10px;
     transition: 0.5s ease;
   }
   .roller:after {
     position: absolute;
     content: "";
     height: 40px;
     width: 85px;
     border: 7px solid #040e15;
     border-left: none;
     right: -20px;
     top: 10px;
     z-index: -1;
     border-radius: 7px;
     transition: 0.5s ease;
   }
   .handle {
     height: 30px;
     width: 7px;
     background-color: #727276;
     position: absolute;
     top: 45px;
     right: 65px;
     transition: 0.5s ease !important;
   }
   .handle:after {
     position: absolute;
     content: "";
     height: 55px;
     width: 12px;
     background-color: #918f88;  
     bottom: -35px;
     right: -3px;
     border-radius: 5px;
     transition: 0.5s ease;
   }
   .paint {
     background-color: #918f88;
     height: 0;
     width: 80px;
     position: absolute;
     margin: auto;
     left: 0;
     right: 0;
     z-index: -1;
     -webkit-animation: paint 2s infinite;
     animation: paint 2s infinite;
     transition: 0.5s ease;
   }
   @-webkit-keyframes paint {
     40% {
       height: 165px;
     }
   }
   @keyframes paint {
     40% {
       height: 165px;
     }
   }
   @media(max-width: 1200px){
     .wrapper{
       display: none;
     }
   }
   
   @media(max-width: 900px){
     .wrapper{
       display: none;
     }
   }
   </style>
   