<template>
  <div class="container">
    <h2 class="title">{{ title }}</h2>
    <ul class="list">
      <li><nuxt-link to="/">TOP</nuxt-link></li>
      <li><nuxt-link to="/about">このページについて</nuxt-link></li>
      <li><nuxt-link to="/profile">プロフィール</nuxt-link></li>
      <li><nuxt-link to="/skill">スキル</nuxt-link></li>
      <li><nuxt-link to="/educational_background">学歴</nuxt-link></li>
      <li><nuxt-link to="/work_history">職歴</nuxt-link></li>
      <li><nuxt-link to="/appendix">各リンク</nuxt-link></li>
    </ul>

    <nuxt/>
  </div>
</template>
<style lang="scss">
.container {
  width: 800px;
  margin: 0 auto;
}
.title {
  background-color: $brown-ground-5;
}
</style>
<script>
export default {
  layout: 'default',
  data () {
    return {
      title: 'AnDeriens Portfolio',
    }
  }
}
</script>
