<template>
 <layout>
   <section>
      <section class="w-64 mb-8 flex flex-col justify-center items-center shadow-lg">
        <section class="w-full h-full flex flex-col justify-center items-center py-4 bg-white rounded-t-lg">
          <h3 class="text-rosegold font-bold uppercase">{{ $page.myProduct.name }}</h3>
        </section>
        <section>
          <g-image :src="$page.myProduct.images[0].url" alt="" />
        </section>
        <section class="w-full h-full py-4 flex flex-col justify-center items-center bg-white rounded-b-lg">
          <p class="py-2"><span class="text-3xl text-yellow-700 font-bold">R{{ $page.myProduct.unitCost }}</span> including VAT</p>
          <section class="w-full h-full py-4 flex justify-around items-center">
            <button class="py-2 px-5 text-gray-100 flex justify-center items-center bg-blue-600 rounded-full shadow focus:outline-none"><g-image src="../../static/icons/info.svg" alt="" /></button>
            <button class="py-2 px-5 text-gray-100 flex justify-center items-center bg-red-700 rounded-full shadow focus:outline-none"><g-image src="../../static/icons/heart.svg" alt="" /></button>
            <button class="py-2 text-gray-100 px-5 flex justify-center items-center bg-rosegold rounded-full shadow focus:outline-none"><g-image src="../../static/icons/cart.svg" alt="" /></button>
          </section>
        </section>  
      </section>
    </section>
  </layout>  
</template>


<page-query>
  query MyProduct ($path: String!) {
    myProduct: product (path: $path) {
      id
      slug
      name
      images {
        url
      }
      inStock
      unitCost
      color
      designer
      description
    }
  }
</page-query>