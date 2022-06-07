<template>
  <div style="display: flex; flex-direction: row">
    
    <div style="flex-basis: 33%">
      <list-movie />
    </div>
    
    <div style="flex-basis: 33%">
      <list-friends />
    </div>
    
    <div style="flex-basis: 33%">
      <list-game />
    </div>

  </div>
</template>

<script>
import ListMovie from '@/components/ListMovie.vue'
import ListFriends from '@/components/ListFriends.vue'
import ListGame from '@/components/ListGame.vue'

export default {
  name: 'App',
  components: {
    ListMovie,
    ListFriends,
    ListGame
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
