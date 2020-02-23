<template>
  <div id="app">
    <main>
      <transition name="page" mode="out-in">
        <router-view/>
      </transition>
    </main>
    <NavigationBar />
  </div>
</template>

<script>
import "./styles/common.css"
import NavigationBar from './components/NavigationBar'
export default {
  name: 'App',
  components: { NavigationBar }
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
