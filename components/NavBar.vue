<template>
<header class="relative z-10 border-b border-gray-200 bg-white flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
  <div class="flex items-end">
    <nuxt-link to="/" class="flex items-center">
      <img class="h-8 w-auto sm:h-10" src="https://image.flaticon.com/icons/svg/2773/2773592.svg"/> 
      <h2 class="text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none ml-4 hidden sm:inline-block">
      Save The Queen
      <br />
      <span class="text-yellow-600">Candle Company</span>
      </h2>
    </nuxt-link>
  </div>

    <div class="flex text-sm leading-5">
    <a href="/candles" class="font-medium text-gray-500 hover:text-gray-900">
      Candles
    </a>
    <a href="/custom-pours" class="ml-4 font-medium text-gray-500 hover:text-gray-900 sm:ml-12">
      Custom Pours
    </a>
    <a href="/about" class="ml-4 font-medium text-gray-500 hover:text-gray-900 sm:ml-12">
      About
    </a>
  </div>
  </header>
</template>