<template>
  <footer class="text-gray-500 bg-gray-900 lg:rounded-lg lg:mb-16 lg:max-w-6xl lg:mx-auto">
    <section class="mt-8 border-b border-rosegold border-solid sm:mx-12 lg:ml-24 lg:mt-16">
      <h4 class="pt-16 mx-8 mb-4 text-xs text-yellow-700 font-semibold uppercase lg:text-lg">Be Incredible. Be Natural.</h4>
      <h2 class="mx-8 mb-6 text-rosegold text-lg lg:text-3xl">Unleash & unshackle the AFRO QUEEN you're meant to be. Become your natural self!</h2>
      <h3 class="mx-8 mr-6 text-sm text-gray-100 lg:text-xl">View our amazing products ranging from branded t-shirts to natural hair products and more. Join our email list as a SISTA or SISTA Supporter and get notified on the latest deals, reviews and so much more.</h3>
      <g-link to="/cakesinoudtshoorn"><button class="ml-8 my-8 py-4 px-8 text-sm text-gray-100 bg-rosegold font-semibold rounded-full uppercase hover:bg-red-300 focus:outline-none">Shop Now</button></g-link>
    </section>
    <section class="flex flex-row items-start justify-around mb-8 text-lg text-left lg:justify-end lg:w-full lg:text-lg">
      <section class="my-16 lg:mr-20">
        <h3 class="text-yellow-700 font-semibold">Navigation</h3>
        <ul class="text-gray-100 rounded list-reset" v-for="navItem in navItems" :key="navItem.title">
          <li class="my-3">
            <g-link class="hover:text-rosegold" :to="`${navItem.route}`">{{ navItem.title }}</g-link>
          </li>
        </ul>
      </section>
      <section class="mt-16 lg:mr-16">
        <h3 class="text-yellow-700 font-semibold">Products</h3>
        <ul class="text-gray-100 rounded list-reset" v-for="productItem in productItems" :key="productItem.title">
          <li class="my-3">
            <g-link class="hover:text-rosegold" :to="`${productItem.route}`">{{ productItem.title }}</g-link>
          </li>
        </ul>
      </section>
      <section class="hidden mt-16 mr-2 lg:mr-16">
        <h3 class="text-yellow-700 font-semibold">Get in touch</h3>
        <ul class="text-gray-100 rounded list-reset" v-for="contactItem in contactItems" :key="contactItem.title">
          <li class="my-3">
            <g-link class="hover:text-rosegold" :to="`${contactItem.route}`">{{ contactItem.title }}</g-link>
          </li>
        </ul>
      </section>
    </section>
    <section class="ml-6 pl-1 block text-lg lg:hidden">
        <h3 class="text-yellow-700 font-semibold">Get in touch</h3>
        <ul class="text-gray-100 rounded list-reset" v-for="contactItem in contactItems" :key="contactItem.title">
          <li class="my-3">
            <g-link class="hover:text-rosegold" :to="`${contactItem.route}`">{{ contactItem.title }}</g-link>
          </li>
        </ul>
      </section>
    <section class="mt-24 py-2 mx-4 text-gray-100 text-xs text-center border-solid lg:order-2">
      <p class="mb-4 lg:ml-16">JAMstack Website by <a href="http://chaddwebdesign.co.za" target="_blank"><span class="font-semibold hover:text-green-400">Chadd Web Design</span></a></p>
      <p class="mb-4 lg:ml-8 lg:mb-8">Copyright &copy; {{ new Date().getFullYear() }} AfricanQueen. All rights reserved.</p>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { title:'Home', route:'/home' },
        { title:'About', route:'/about' },
        { title:'Shop', route:'/shop' },
        { title:'Blog', route:'/blog' },
        { title:'Privacy', route:'/privacypolicy' },
      ],
      productItems: [
        { title:'Shipping & Delivery', route:'/shippinganddelivery' },
        { title:'Payment & Orders', route:'/paymentandorders' },
        { title:'Return Policy', route:'/returnpolicy' }
      ],
      contactItems: [
        { title:'Sign Up', route:'/becomeasista' },
        { title:'Contact Us', route:'/contact' },
      ],
      isOpen: false,
    }
  }
}
</script>

<style lang="postcss">
  #neuButtons2 {
    box-shadow: 
    -12px -12px 12px 0 rgba(255,255,255,1),
    12px 12px 12px 0 rgba(255,255,255,1),
  }
</style>