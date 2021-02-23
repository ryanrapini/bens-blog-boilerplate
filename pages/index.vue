<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<template>
  <div class="container mx-auto text-center">
    <div>
      <logo class="mt-20" />
      <h1 class="title">
        Ryan Rapini
      </h1>
      <p class="subtitle">
        Software Developer, Volleyball Player, Traveller, Nerd, Cat Lover.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/_settings.scss';

.title {
  @apply block;
  @apply mt-3;
  color: $c-navy;
  font-family: $ff-sans;
  @apply font-semibold;
  @apply text-5xl;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 1.3;
  color: #57708a;
  padding-bottom: 15px;
  font-family: $ff-serif;
}
</style>
