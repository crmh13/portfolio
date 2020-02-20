<template>
  <div id="app">
    <main>
      <transition name="page" mode="out-in">
        <router-view/>
      </transition>
    </main>
    <nav>
      <ul>
        <li class="select"><router-link to="/status">ステータス</router-link></li>
        <li class="select"><router-link to="/work">しごと</router-link></li>
        <li class="select"><router-link to="/create">せいさく</router-link></li>
      </ul>
      <div>
        <p class="txt-left">TIME</p>
        <p id="time">{{ clock }}</p>
      </div>
    </nav>
  </div>
</template>

<script>
import "./styles/common.css"
export default {
  name: 'App',
  data: function() {
    return {
      time: new Date()
    }
  },
  computed: {
    clock: function() {
      const hh = ("0" + this.time.getHours()).slice(-2)
      const mm = ("0" + this.time.getMinutes()).slice(-2)
      return hh + ':' + mm
    }
  },
  methods: {
    clockAdvance: function() {
      this.time = new Date()
      const self = this
      setTimeout(() => { self.clockAdvance() }, 1000)
    }
  },
  created: function() {
    this.clockAdvance()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: blue;
  color: #ffffff;
  width: 960px;
  height: 800px;
  margin: auto;
  border: 5px solid #fff;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
}

nav ul {
  margin: 0;
  height: 600px;
  border-top: 5px solid #fff;
  border-left: 5px solid #fff;
  border-bottom: 5px solid #fff;
  border-radius: 5px 0 0 5px;
  padding: 15px;
}
nav ul li {
  list-style-type: none;
  text-align: left;
  font-size: 20px;
  padding: 5px;
}

nav {
  width: 160px;
  top: 0;
  right: 0;
}

nav div {
  border-top: 5px solid #fff;
  border-left: 5px solid #fff;
  border-bottom: 5px solid #fff;
  border-radius: 5px 0 0 5px;
}
nav div p {
  margin: 5px;
}

a {
  color: #fff;
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: block;
}

.page-enter-active, .page-leave-active {
  transition: transform 0.5s;
}

.page-enter {
  transform: translateX(800px);
}

.page-leave-to {
  transform: translateX(-800px);
}
</style>
