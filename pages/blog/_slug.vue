<script>
export default {
  async asyncData(ctx) {
    const page = await ctx.$content(`blog/${ctx.params.slug}`).fetch()
    return {
      page
    }
  },
  computed: {
    formatPublishDate() {
      const dateFormat = new Date(this.page.date)
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }

      return dateFormat.toLocaleDateString('en-US', options)
    }
  }
}
</script>

<template>
  <main>
    <article class="content">
      <p class="blog-publish-date">{{ formatPublishDate }}</p>
      <h1 class="blog-title">{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </article>
  </main>
</template>

<style lang="scss">
@import '../../styles/_settings.scss';
@import '../../styles/main.scss';

.blog-publish-date {
  @apply mt-12;
  font-family: $ff-sans;
}

.blog-title {
  font-family: $ff-sans;
  color: $c-navy;
  @apply font-bold;
  @apply text-5xl;
  @apply mb-4;
}

.content {
  @apply mx-auto;
  @apply px-8;
  max-width: 740px;
}
</style>
