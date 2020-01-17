<template>
  <homeLayout>
    <section class="sm:text-xl lg:text-2xl">
      <section class="m-2 relative text-gray-100 bg-gray-900 lg:h-128">
        <g-image src="../../static/img/african-queen-in-george.webp" class="w-full h-full bg-gray-900  opacity-50 lg:object-fill" />
        <section class="mt-12 absolute w-full h-full top-0 left-0 flex flex-col items-center justify-start w-full lg:h-full lg:justify-start lg:mt-8">
          <h1 class="mx-2 font-semibold text-sm text-red-300 text-center uppercase sm:mt-32 sm:text-2xl lg:text-4xl lg:mb-8">Find natural beauty within yourself at AfricanQueen in George.</h1>
          <h3 class="mx-4 my-4 font-semibold text-center lg:block lg:text-2xl lg:mb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ex libero officia minima debitis eaque!</h3>
        </section>
      </section>
      <section class="flex flex-col justify-center items-center text-center">
        <h2 class="my-8 text-2xl text-rosegold font-bold uppercase">Welcome to <br> <span class="text-gray-900">African</span>Queen</h2>
        <p class="mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos alias, deserunt soluta veritatis sunt praesentium repudiandae itaque cupiditate. Impedit, quia. Quis iusto amet repellat tempora dolore magnam? Illo, repellendus suscipit!</p>
        <g-link to="/shopingeorge"><button class="my-8 py-4 px-8 text-sm text-white bg-rosegold font-semibold rounded-full uppercase hover:bg-red-300 focus:outline-none">Shop Now</button></g-link>
      </section>
      <section class="flex flex-col justify-center items-center text-center">
        <h2 class="my-8 text-2xl text-rosegold font-bold uppercase">Latest Blog Posts</h2>
        <section class="my-12 flex flex-col justify-center items-center" v-for="edge in $page.blogPost.edges" :key="edge.node.id">
          <h3 class="mb-2 mx-4 text-yellow-700 font-semibold uppercase">{{ edge.node.title }}</h3>
          <p class="mb-8">by {{ edge.node.author.name }}</p>
          <g-link :to="`/blog/${edge.node.slug}`"><g-image :src="edge.node.postImage.file.url" alt="" /></g-link>
        </section>
      </section>
      <section class="text-center">
        <h2 class="my-8 text-2xl text-rosegold font-bold uppercase">Featured Items</h2>
        <section class="my-12 flex flex-col justify-center items-center" v-for="edge in $page.products.edges" :key="edge.node.id">
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