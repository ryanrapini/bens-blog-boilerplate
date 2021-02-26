<template>
  <img :src="imgSrc()" :alt="alt" />
</template>

<script>
export default {
  name: 'Test',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    }
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/assets/${this.src}`);
      } catch (error) {
        return null
      }
    }
  }
}
</script>