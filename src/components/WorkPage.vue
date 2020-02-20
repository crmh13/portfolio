<template>
  <div>
    <article>
      <ul>
        <li v-for="workList in workLists" :key="workList.id" 
          :class="{'active': workId === workList.id}"
          @click="select(workList.id)"
          class="select">{{ workList.work }}</li>
      </ul>
      <div v-if="workId !== null" class="content">
        <p>{{ workLists[workId].content }}</p>
        <p>使用した言語<br>{{ workLists[workId].lang}}</p>
        <p v-if="workLists[workId].db !== ''">使用したDB<br>{{ workLists[workId].db }}</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Work',
  data: function() {
    return {
      workLists: [
        { 
          id: 0,
          work: '官公庁のWebサイト運用・保守',
          content: `国税庁、内閣府、東京都などのWebページのアクセシビリティ対応、更新等を行う。\n特にアクセシビリティ対応に力を入れ、構文エラーがないように気を付けてコーディングを行った。`,
          lang: 'HTML、CSS、VBA、JavaScript(多少)',
          db: ''
        },
        { 
          id: 1,
          work: '業務系システム開発・保守',
          content: '帳票出力機能改修、CSVダウンロード機能開発、メールアドレス管理機能開発や、問い合わせシステムの保守としてエラーログの調査等を行う。\n対応案の作成、見積、設計、実装、テストまで一通りの工程を経験。',
          lang: 'Java、JavaScript、VBA',
          db: 'Oracle Database'
        }
      ],
      workId: null
    }
  },
  methods: {
    select: function(id) {
      this.workId = id;
    }
  }
}
</script>

<style scoped>
article {
  display: flex;
}

ul {
  width: 250px;
  height: 780px;
  margin: 0;
  padding-top: 10px;
  text-align: left;
  border-right: 5px solid #fff;
}

ul li {
  padding: 5px;
  cursor: pointer;
}

.active {
  text-decoration: underline;
}

.content {
  width: 475px;
  text-align: left;
  padding: 10px;
}

.content p {
  white-space: pre-wrap;
  margin: 10px;
}
</style>