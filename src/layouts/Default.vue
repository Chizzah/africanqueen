<template>
  <main>
    <Header />
    <slot />
    <Footer />
  </main>
</template>

<script>
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Karla', sans-serif;
}

h1,
h5 {
  font-family: 'Audiowide', cursive;
}
</style>