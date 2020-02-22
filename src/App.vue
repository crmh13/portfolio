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
