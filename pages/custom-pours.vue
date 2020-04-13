<template>
  <div class="min-h-screen pb-12">
      <div class="max-w-screen-xl mx-auto mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div class="flex flex-col sm:flex-row">
          <div class="w-full sm:w-1/2">
            <h1 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 md:mt-5 md:text-xl mx-auto sm:text-5xl sm:leading-none md:text-6xl text-left mt-12">Custom Pours</h1>
            <p class="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg md:mt-5 md:text-xl mx-auto">We can custom pour a unique candle in the glass container of your choice for $3.00 per ounce. Many of our customers have turned inherited family glassware into functional and meaningful treasures that can be repoured over & over again.</p>
            <p class="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg md:mt-5 md:text-xl mx-auto">To inquire about a custom pour, please fill out the contact form below.</p>
          </div>
          <div class="w-full sm:w-1/2">
            <img class="mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl mx-auto" src="https://savethequeencandleco.imgix.net/custom-pour-86.jpg?q=1"/>
          </div>
        </div>
        <div class="mx-auto">
          <CustomPourForm class="mt-12"/>
        </div>
      </div>
  </div>
</template>

<script>
import CustomPourForm from '~/components/CustomPourForm.vue'
export default {
   layout: "detail",
   components: {
     CustomPourForm
   }
}
</script>