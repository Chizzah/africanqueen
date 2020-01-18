<template>
  <homeLayout>
    <section class="sm:text-xl lg:text-2xl">
      <section class="relative mx-4 flex justify-end items-center text-gray-900">
        <div class="bg-black">
          <g-image class="opacity-75" src="../../static/img/african-queen-in-george-hero-2.webp" alt="" height="650" />
        </div>
        <div class="bg-black">
          <g-image class="opacity-75" src="../../static/img/african-queen-in-george-hero-3.webp" alt="" height="650" />
        </div>
        <section class="hidden lg:absolute lg:top-0 lg:left-0 w-full h-full ml-20 lg:flex flex-col justify-center items-start">
          <h1 class="lg:text-4xl lg:uppercase">Be <span class="text-rosegold">Natural</span>
            <br>Be <span class="text-rosegold">Beautfiul</span>
            <br>African<span class="text-rosegold">Queen</span>
            <br><span class="text-sm">Natural Hair in George</span>
          </h1>
          <p class="lg:text-xl">Be the QUEEN you deserve to be. Get advice on <br class="hidden lg:block"> going natural, support the cause with our merch <br class="hidden lg:block"> and find 100% natural hair & health products in <br class="hidden lg:block"> our online store.</p>
          <button class="mt-8 py-4 px-8 lg:bg-rosegold lg:text-gray-100 lg:text-xl lg:font-semibold lg:rounded-full lg:uppercase hover:bg-red-300 focus:outline-none">Shop Now</button>
        </section>
        <section class="absolute top-0 right-0 w-full h-full mr-4 flex flex-col justify-center items-end text-gray-100 text-right lg:hidden">
          <h1 class="mb-4 uppercase">Be <span class="text-rosegold">Natural</span>
            <br>Be <span class="text-rosegold">Beautfiul</span>
            <br>African<span class="text-rosegold">Queen</span>
            <br><span class="text-xxs">Natural Hair in George</span>
          </h1>
          <button class="py-2 px-4 bg-rosegold text-gray-100 text-lg font-semibold rounded-full uppercase hover:bg-red-300 focus:outline-none">Shop Now</button>
        </section>
      </section>
      <section class="mt-4 mx-6 flex flex-col justify-center items-start lg:hidden">
        <h2 class="my-4 text-xl text-rosegold font-semibold uppercase">Naturally Amazing</h2>
        <p>Be the QUEEN you deserve to be. Get advice on going natural, support the cause with our merch and find 100% natural hair & health products in our online store.</p>
      </section>
    </section>
    <section class="mt-12 mx-6 flex flex-col justify-center items-start">
      <h2 class="my-4 text-xl text-rosegold font-semibold uppercase">Latest Blog Posts</h2>
      <section class="my-8 flex flex-col justify-center items-center" v-for="edge in $page.blogPost.edges" :key="edge.node.id">
        <h3 class="mb-2 text-yellow-700 text-sm font-semibold uppercase">{{ edge.node.title }}
          <br><span class="ml-1 text-gray-900 text-xxs">by {{ edge.node.author.name }}</span>
        </h3>
        <g-image class="my-8" :src="edge.node.postImage.file.url" alt="" />
        <g-link :to="`/blog/${edge.node.slug}`"><button class="py-2 px-4 bg-rosegold text-gray-100 text-lg font-semibold rounded-full uppercase hover:bg-red-300 focus:outline-none">Read More</button></g-link>
      </section>
    </section>
    <section class="mt-8 mx-6 flex flex-col justify-center items-start">
        <h2 class="my-4 text-xl text-rosegold font-semibold uppercase">Featured Items</h2>
        <section class="my-8 w-full h-full flex flex-col justify-center items-center" v-for="edge in $page.products.edges" :key="edge.node.id">
          <section class="w-64 mb-8 flex flex-col justify-center items-center shadow-lg">
            <section class="w-full h-full flex flex-col justify-center items-center py-4 bg-white rounded-t-lg">
              <h3 class="text-rosegold font-bold uppercase">{{ edge.node.name }}</h3>
            </section>
            <section>
              <g-image :src="edge.node.images[0].url" alt="" />
            </section>
            <section class="w-full h-full py-4 flex flex-col justify-center items-center bg-white rounded-b-lg">
              <p class="py-2"><span class="text-3xl text-yellow-700 font-bold">R{{ edge.node.unitCost }}</span> including VAT</p>
              <section class="w-full h-full py-4 flex justify-around items-center">
                <g-link :to="`/product/${edge.node.slug}`"><button class="py-2 px-5 text-gray-100 flex justify-center items-center bg-blue-600 rounded-full shadow focus:outline-none"><g-image src="../../static/icons/info.svg" alt="" /></button></g-link>
                <button class="py-2 px-5 text-gray-100 flex justify-center items-center bg-red-700 rounded-full shadow focus:outline-none"><g-image src="../../static/icons/heart.svg" alt="" /></button>
                <button class="py-2 text-gray-100 px-5 flex justify-center items-center bg-rosegold rounded-full shadow focus:outline-none"><g-image src="../../static/icons/cart.svg" alt="" /></button>
              </section>
            </section>  
          </section>
        </section>
      </section>    
    </section>
  </homeLayout>
</template>

<page-query>
  query blogPost {
    blogPost: allContentfulBlogPost {
      edges {
        node {
          id
          slug
          title
          video
          author {
            name
          }
          postImage {
            file {
              url
            }
          }
        }
      }
    }
  products: allProduct {
      edges {
        node {
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
    }
  }
</page-query>

<script>
import homeLayout from '~/layouts/homeLayout.vue';
import productCard from '~/components/productCard.vue';

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    homeLayout,
    productCard
  }
}
</script>