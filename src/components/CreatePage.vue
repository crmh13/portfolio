<template>
  <article>
    <div v-for="create in creates" :key="create.id" class="thumbnail select" @click="open(create.id)">
      <img :src="create.img" :alt="create.title">
      <p>{{ create.title }}</p>
    </div>
    <CreateContent :id="id" :title="title" :img="img" :content="content" :url="url" @close="close" />
  </article>
</template>

<script>
import CreateContent from './CreateContent'
export default {
  name: 'Create',
  components: { CreateContent },
  data: function() {
    return {
      creates: [
        { id: 0,
          title: 'Port Folio',
          img: '/static/portfolio.png',
          content: `このサイトです。\nVue.jsを使用し、SPAで構築しています。`,
          url: ''
        },
        {
          id: 1,
          title: 'Todoアプリ',
          img: '/static/todoapp.png',
          content: `Todoアプリです。\nRuby On Railsを使用し、予定日にメール通知ができるようにしています。\nテストユーザーのログイン情報\n ユーザー名：テストユーザー\nパスワード：test123`,
          url: 'https://nfvsxpqbegwp.herokuapp.com/'
        }
      ],
      id: null,
      title: null,
      img: null,
      content: null,
      url: null
    }
  },
  methods: {
    open: function(num) {
      this.id = num
      this.title = this.creates[num].title
      this.img = this.creates[num].img
      this.content = this.creates[num].content
      this.url = this.creates[num].url
    },
    close: function() {
      this.id = null
    }
  }
}
</script>

<style scoped>
article {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}

article div {
  border: 5px solid #fff;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
}

.thumbnail {
  width: 250px;
  height: 150px;
  cursor: pointer;
}

.thumbnail img {
  width: 150px;
  height: 113px;
}
</style>