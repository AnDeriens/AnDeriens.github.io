<template>
<div>
  <h3>学歴</h3>
  <ul>
    <li v-for="h in histories">
      <div>{{ h.start_year }}年 {{ h.start_month }}月 〜 {{ h.end_year }}年 {{ h.end_month }}月</div>
      <div>
        {{ h.company }} / {{ h.employment_status }}
      </div>
      <ul>
        <li v-for="project in h.projects">
          <div>
            <h4>{{ project.title }}</h4>
            <div>
              {{ project.start_year }}年{{ project.start_month }}月
              〜
              {{ project.end_year }}年{{ project.end_month }}月
            </div>
            <div>メンバー人数: {{ project.team_member }}</div>
            <div>役割: {{ project.role }}</div>
            <div>利用技術: <ul><li v-for="t in project.tech">{{ t }}</li></ul></div>
            <div>{{ project.detail }}</div>
          </div>
        </li>
      </ul>
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
      histories: [
        {
          company: "Web広告系",
          employment_status: "正社員",
          start_year: 2017,
          start_month: 3,
          end_year: 2018,
          end_month: 4,
          projects: [
            {
              start_year: 2017,
              start_month: 4,
              end_year: 2017,
              end_month: 6,
              title: "駐輪場ポータルサイト開発",
              team_member: "3",
              role: "メンバー",
              tech: ["PHP", "JavaScript", "jQuery", "GoogleMapAPI"],
              detail: "大まかな要件は上司が担当し、私はDB設計・バックエンド詳細設計&実装・フロントエンド実装を担当しました。実務として初めてのアプリケーション開発でしたが、GoogleMapAPIを使って情報を取得したり、検索条件を上手く取るなど、いろいろなことにチャレンジできました。",
            }
          ]
        },
      ]
    }
  }
}
</script>
