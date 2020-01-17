<template>
  <section class="flex flex-col justify-center items-center">
    <h2 class="my-8 text-xl text-rosegold font-bold uppercase">Featured Items</h2>
    <section class="w-64 mb-8 flex flex-col justify-center items-center shadow-lg">
      <section class="w-full h-full flex flex-col justify-center items-center py-4 bg-white rounded-t-lg">
        <h3 class="text-rosegold font-semibold uppercase">{{ edge.node.name }}</h3>
      </section>
      <section>
        <g-image :src="edge.node.images[0].url" alt="" />
      </section>
      <section class="w-full h-full py-4 flex flex-col justify-center items-center bg-white rounded-b-lg">
        <p class="py-2"><span class="text-3xl text-yellow-700 font-bold">R{{ edge.node.unitCost }}</span> including VAT</p>
        <section class="w-full h-full py-4 flex justify-around items-center">
          <button class="py-2 px-5 text-gray-100 flex justify-center items-center bg-blue-600 rounded-full shadow focus:outline-none"><g-image src="../../static/icons/info.svg" alt="" /></button>
          <button class="py-2 px-5 text-gray-100 flex justify-center items-center bg-red-700 rounded-full shadow focus:outline-none"><g-image src="../../static/icons/heart.svg" alt="" /></button>
          <button class="py-2 text-gray-100 px-5 flex justify-center items-center bg-rosegold rounded-full shadow focus:outline-none"><g-image src="../../static/icons/cart.svg" alt="" /></button>
        </section>
      </section>  
    </section>
  </section>
</template>