<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('contact').fetch()

    return {
      page
    }
  }
}
</script>

<template>
  <article class="container mx-auto content pt-10">
    <nuxt-content :document="page" />
  </article>
</template>

<style lang="scss">
@import '../../styles/_settings.scss';
@import '../../styles/main.scss';
</style>
