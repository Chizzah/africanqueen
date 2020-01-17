<template>
  <section>
    <section class="h-screen w-full bg-black text-gray-100 text-center flex flex-col justify-center items-center">
      <g-image class="mb-8" src="../../static/svg/africanqueencrown.svg" alt="" width="240"/>
      <h1 class="mb-4 text-3xl uppercase">African<span class="text-yellow-600">Queen</span></h1>
      <p class="mx-4 mb-8 text-lg capitalize">Find pride in your roots. Become the natural queen you're meant to be.</p>
      <g-link to="/home"><button class="py-2 px-4 text-2xl border-2 border-solid border-gray-100 rounded uppercase focus:outline-none">Enter</button></g-link>
      <embed src="silence.mp3" type="audio/mp3" autostart="true" hidden="true">
        <audio autoplay loop> <source src="../../static/africanqueenintro.mp3"  type="audio/mp3" ></audio>
    </section>
  </section>
</template>