<template>
<div>
  <h3>学歴</h3>
  <ul>
    <li v-for="h in histories">
      {{ h.year }}年
      {{ h.school }} {{ h.department }} {{ h.degree }}課程 {{ h.event }}
    </li>
  </ul>
</div>
</template>
<style scoped>

</style>

<script>
export default {
  data() {
    return {
      histories: [
        {year: 2017, school: "京都大学", department: "人間・環境学研究科", degree: "博士",  event: "中途退学"},
        {year: 2015, school: "京都大学", department: "人間・環境学研究科", degree: "修士",  event: "修了"},
        {year: 2013, school: "京都大学", department: "総合人間学部", degree: "学士",  event: "卒業"},
      ]
    }
  }
}
</script>
