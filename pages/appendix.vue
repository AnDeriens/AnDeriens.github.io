<template>
<div>
  <h3>リンク</h3>
  <ul>
    <li v-for="link in links">
      <a :href="link.href" target="_blank">{{ link.anchor }}</a>
    </li>
  </ul>
</div>
</template>
<style scoped lang="scss">

</style>

<script>
export default {
  data() {
    return {
      links: [
        {href: 'https://github.com/AnDeriens', anchor: "Github"},
        {href: 'https://qiita.com/Anderiens', anchor: "Qiita"},
      ]
    }
  }
}
</script>
