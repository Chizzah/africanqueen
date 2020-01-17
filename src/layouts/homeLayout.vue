<template>
  <transition name="fade" appear>
    <main>
      <homeHeader />
      <slot />
      <homeFooter />
    </main>
  </transition>
</template>

<script>
import homeHeader from '~/components/homeHeader';
import homeFooter from '~/components/homeFooter';

export default {
  components: {
    homeHeader,
    homeFooter
  }
}
</script>

<style lang="postcss">
  .fade-enter-active {
    transition: opacity 1000ms;
  }
  .fade-enter {
    opacity: 0;
  }
</style>