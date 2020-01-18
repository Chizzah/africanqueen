<template>
  <header class="lg:text-xl sm:py-2">
    <nav class="flex items-center justify-between w-full py-2 text-gray-900">
      <section class="flex items-center justify-around py-2">
        <g-link to="/home"><h5 class="flex items-center justify-center ml-6 font-semibold text-md uppercase sm:text-xl lg:ml-8 lg:text-2xl">African<span class="flex items-center justify-center text-rosegold mr-1">Queen</span></h5></g-link>
      </section>
      <section class="hidden lg:uppercase lg:font-semibold lg:flex lg:text-lg lg:items-center">
        <ul v-for="menuItem in menuItems" :key="menuItem.title">
          <li class="lg:px-2">
            <g-link class="text-gray-900 hover:text-rosegold" :to="menuItem.route">{{ menuItem.title }}</g-link>
          </li>
        </ul>
      </section>
      <section class="hidden flex justify-center items-center lg:flex">
        <g-image class="mr-2" src="../../static/icons/search.svg" />
        <g-image class="mr-2" src="../../static/icons/cart.svg" />
        <g-image class="mr-4" src="../../static/icons/heart.svg" />
        <g-link to="/cakesinoudtshoorn"><button class="hidden px-4 py-3 mr-4 mr-8 text-sm font-semibold text-gray-100 bg-rosegold shadow rounded-full uppercase focus:outline-none lg:block">Sign Up Now</button></g-link>
      </section>
      <section class="flex px-4 py-2 lg:hidden">
        <section class="flex justify-center items-center">
          <g-image class="mr-2" src="../../static/icons/search.svg" />
          <g-image class="mr-2" src="../../static/icons/cart.svg" />
          <g-image class="mr-4" src="../../static/icons/heart.svg" />
        </section>
        <button @click="isOpen = !isOpen" type="button" class="block focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="12" x2="21" y2="12"></line><line x1="1" y1="6" x2="21" y2="6"></line><line x1="1" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </section>
    </nav>
    <nav :class="isOpen ? 'block' : 'hidden'" class="z-50 flex flex-col items-center justify-center block w-full py-4 text-sm font-semibold uppercase lg:p-0">
      <section class="mb-2 ml-8">
        <ul class="rounded list-reset lg:hidden" v-for="menuItem in menuItems" :key="menuItem.title">
          <li class="py-2">
            <g-link class="text-gray-900 hover:text-rosegold" :to="menuItem.route">{{ menuItem.title }}</g-link>
          </li>
        </ul>
      </section>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { title:'Home', route:'/home' },
        { title:'About', route:'/about' },
        { title:'Shop', route:'/shop' },
        { title:'Blog', route:'/blog' },
        { title:'Contact', route:'/Contact' }
      ],
      isOpen: false,
    }
  }
}
</script>