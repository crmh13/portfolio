<template>
  <div class="content" v-show="id !== null">
    <h2>{{ title }}</h2>
    <img :src="img" :alt="title">
    <p>{{ content }}</p>
    <p v-if="url !== ''"><a :href="url" target="_blank">{{ url }}</a></p>
    <p class="close" @click="close">閉じる</p>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    img: String,
    content: String,
    url: String
  },
  methods: {
    close: function() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.content {
  position: fixed;
  z-index: 1;
  width: 600px;
  height: 550px;
  margin: auto;
  background: blue;
  white-space: pre-wrap;
}

.close {
  border: 5px solid #fff;
  border-radius: 5px;
  padding: 5px;
  width: 4em;
  margin: 10px auto;
  cursor: pointer;
}

a {
  display: inline;
}
</style>