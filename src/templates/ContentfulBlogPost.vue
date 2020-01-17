<template>
  <layout>
    <section class="mt-8 md:mt-40 md:flex md:justify-start md:items-start">
      <section class="m-8">
        <h2 class="mb-8 md:text-lg">{{ $page.blogPost.date }}</h2>
        <p class="mb-2">by {{ $page.blogPost.author.name }}
        <br>Follow us on <g-link class="text-blue-600" :to="$page.blogPost.author.facebook" >Facebook</g-link> </p>
        <h1 class="mb-8 text-3xl md:text-6xl">{{ $page.blogPost.title }}</h1>
        <p class="mb-8 md:mr-20 md:text-2xl"><span class="font-extrabold text-red-700 uppercase">Quick Summary:</span> {{ $page.blogPost.summary }}</p>
      </section>
      <section class="flex flex-col justify-center items-center">
        <iframe :src="$page.blogPost.video" controls width="350" height="350" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
        <article class="flex flex-col justify-center items-center text-center">
          <h3 class="my-8 text-xl text-rosegold font-bold uppercase">Video Transcript</h3>
          <p class="mx-4">{{ $page.blogPost.videoTranscript }}</p>
        </article>
      </section>
    </section>
  </layout>
</template>

<page-query>
  query blogPost ($path: String!) {
    blogPost: contentfulBlogPost(path: $path) {
      id
      slug
      title
      date(format: "MMMM DD, YYYY")
      author {
        name
        facebook
        authorImage {
          file {
            url
          }
        }
      }
      video
      seo {
        title
        description
      }
      summary
      videoTranscript
      postImage {
        file {
          url
        }
      }
    }
  }
</page-query>