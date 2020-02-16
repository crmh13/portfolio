<template>
  <div id="app">
    <main>
      <router-view/>
    </main>
    <nav>
      <ul>
        <li><router-link to="/status">ステータス</router-link></li>
        <li><router-link to="/work">しごと</router-link></li>
        <li><router-link to="/create">せいさく</router-link></li>
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
a:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
