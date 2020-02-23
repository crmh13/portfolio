<template>
  <nav>
    <ul>
      <li class="select"><router-link to="/status">ステータス</router-link></li>
      <li class="select"><router-link to="/work">しごと</router-link></li>
      <li class="select"><router-link to="/create">せいさく</router-link></li>
      <li class="select"><router-link to="/contact">といあわせ</router-link></li>
    </ul>
    <div>
      <p class="txt-left">TIME</p>
      <p id="time">{{ clock }}</p>
    </div>
  </nav>
</template>

<script>
export default {
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