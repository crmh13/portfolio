<template>
  <form name="contact">
    <div><label>なまえ ： </label><input type="text" name="name" v-model="name"></div>
    <div><label>メールアドレス ： </label><input type="email" name="email" v-model="email"></div>
    <div><label>ないよう ： </label><textarea rows="10" name="message" v-model="message"></textarea></div>
    <div><input type="button" value="送信" @click="submit()"></div>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      name: null,
      email: null,
      message: null,
    }
  },
  methods: {
    submit: function() {
      const form = document.getElementById("netlifyForm")
      document.getElementById("name").value = this.name
      document.getElementById("email").value = this.email
      document.getElementById("message").value = this.message
      form.submit()
    }
  }
}
</script>

<style scoped>
main {
  position: relative;
}

form {
  margin-top: 200px;
}

form div {
  margin-bottom: 20px;
}

form label {
  display: inline-block;
  text-align: right;
  width: 10em;
}

input[type="text"], input[type="email"], textarea {
  width: 350px;
}

textarea {
  vertical-align: middle;
}

input[type="button"] {
  width: 100px;
  height: 50px;
  background: blue;
  border: 5px solid #fff;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}

@media screen and (max-width: 780px) {
  form label {
    margin-left: 10px;
    display: block;
    text-align: left;
  }
}
</style>