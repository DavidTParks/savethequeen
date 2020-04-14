<template>
  <div class="min-h-screen pb-12 bg">
      <div class="max-w-screen-xl mx-auto mx-auto px-4 sm:px-6 lg:px-8 mt-0 sm:mt-4">
          <ul class="flex items-center py-2 sm:py-4 pt-8 sm:pt-4">
            <li class="breadcrumb-style">
                <nuxt-link class="mr-2" to="/">Home</nuxt-link>
                <svg class="h-4 w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L16 12L9 19" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </li>
            <li class="breadcrumb-style">
                <nuxt-link class="mr-2" to="/custom-pours">Custom Pours</nuxt-link>
            </li>
        </ul>
        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-1/2">
            <h1 class="text-4xl tracking-tight leading-10 font-extrabold text-red-600 md:mt-5 md:text-xl mx-auto sm:text-5xl sm:leading-none md:text-6xl text-left mt-4">Custom Pours</h1>
            <p class="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg md:mt-5 md:text-xl mx-auto md:pr-8">We can custom pour a unique candle in the glass container of your choice for $3.00 per ounce. Many of our customers have turned inherited family glassware into functional and meaningful treasures that can be repoured over & over again.</p>
            <p class="mt-3 text-base text-gray-900 sm:mt-5 sm:text-lg md:mt-5 md:text-xl mx-auto font-semibold md:pr-8">To inquire about a custom pour, please fill out the contact form below. We will get back to you soon!</p>
          </div>
          <div class="w-full md:w-1/2">
            <img class="mt-5 sm:text-lg md:mt-5 md:text-xl mx-auto rounded-lg overflow-hidden shadow-lg" src="https://savethequeencandleco.imgix.net/custom-pour-86.jpg?q=1"/>
          </div>
        </div>
        <div class="mx-auto mt-8 sm:mt-24">
          <CustomPourForm/>
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
   },
   head () {
    return {
      title: `Custom Pours - Save The Queen Candle Co.`,
      meta: [
        { hid: 'description', name: 'description', content: 'We can custom pour a unique candle in the glass container of your choice for $3.00 per ounce. Many of our customers have turned inherited family glassware into functional and meaningful treasures that can be repoured over & over again.' },
        {
          hid: `keywords`,
          name: 'keywords',
          content: `custom pours, candle, candles, beeswax candle, Wisconsin candle`
        },
        //Open Graph og:image:secure_url
        { name: 'og:title', content: `Custom Pours - Save The Queen Candle Co.` },
        { name: 'og:description', content: 'We can custom pour a unique candle in the glass container of your choice for $3.00 per ounce. Many of our customers have turned inherited family glassware into functional and meaningful treasures that can be repoured over & over again.' },
        { name: 'og:image', content: `https://savethequeencandleco.imgix.net/custom-pour-86.jpg` },
        { name: 'og:image:secure_url', content: `https://savethequeencandleco.imgix.net/custom-pour-86.jpg` },
        { name: 'og:url', content: `https://savethequeencandleco.com/custom-pours` },
        { name: 'og:type', content: 'article' },
      ]
    }
  },
}
</script>