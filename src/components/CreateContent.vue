<template>
  <transition name="modal">
    <div class="content" v-if="id !== null">
      <h2>{{ title }}</h2>
      <img :src="img" :alt="title">
      <p>{{ content }}</p>
      <p v-if="url !== ''"><a :href="url" target="_blank">{{ url }}</a></p>
      <p v-if="id === 2">ログインなし、データ保存なしのサンプルはこちら<br><a href="https://laughing-morse-da3d2d.netlify.com/" target="_blank">https://laughing-morse-da3d2d.netlify.com/</a>
      <p class="close" @click="close">閉じる</p>
    </div>
  </transition>
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
  position: absolute;
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
  word-wrap: break-word;
}

a:hover {
  background: rgba(255, 255, 255, 0.2);
}

.modal-enter-active, .modal-leave-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.5s, transform 0.5s;
}
.modal-enter, .modal-leave-to {
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.5s, transform 0.5s;
}


@media screen and (max-width: 960px) {
  .content {
    width: 70%;
    position: absolute;
    height: 90%;
    top:0;
  }
}

@media screen and (max-width: 780px) {
  .content img {
    width: 90%;
  }
}
</style>