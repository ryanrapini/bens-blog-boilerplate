<script>
import Example from '~/components/global/Example'
import VImg from '~/components/global/VImg'

export default {
components: {
	Example,
	VImg
},
  async asyncData({ $content }) {
    const page = await $content('portfolio').fetch()

    return {
      page
    }
  }
}
</script>

<template>
  <article class="container mx-auto content pt-10">
	<example />
	<v-img src="thumbnails/aofarm.jpg" />
    <nuxt-content :document="page" />
  </article>
</template>

<style lang="scss">
@import '../../styles/_settings.scss';
@import '../../styles/main.scss';
</style>
