<template>
<div>
  <h3>スキル</h3>
  <ul>
    <li v-for="skill in skills">
      {{ skill.label }} - {{ skill.yearLength }}年
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
      skills: [
        {label: "PHP", yearLength: "3"},
        {label: "Laeavel", yearLength: "2"},
        {label: "CakePHP", yearLength: "1"},
        {label: "JavaScript", yearLength: "3"},
        {label: "Vue.js", yearLength: "2"},
        {label: "Nuxt.js", yearLength: "2"},
        {label: "HTML", yearLength: "3"},
        {label: "CSS", yearLength: "3"},
      ]
    }
  }
}
</script>
