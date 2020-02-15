<template>
  <div id="app">
    <router-view/>
    <nav>
      <ul>
        <li>ステータス</li>
        <li>しごと</li>
        <li>せいさく</li>
      </ul>
      <div>
        <p class="txt-left">TIME</p>
        <p id="time">00:00</p>
      </div>
    </nav>
  </div>
</template>

<script>
import "./styles/common.css"
export default {
  name: 'App'
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

ul {
  margin: 0;
  height: 600px;
  border-top: 5px solid #fff;
  border-left: 5px solid #fff;
  border-bottom: 5px solid #fff;
  border-radius: 5px 0 0 5px;
  padding-top: 15px;
}
ul li {
  list-style-type: none;
  text-align: left;
  font-size: 20px;
  padding: 5px 0;
}

nav {
  width: 180px;
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
</style>
