<template>
  <div>
    
    <img src='https://via.placeholder.com/400'>
    
    <h1>Dad Joke</h1>

    <div>
      {{state.text}}
    </div>

    <button 
      @click="getDadJoke"
      :disabled="!net.online"
    >Get New Joke</button>
    <div v-if='!net.online'>
      You Are offline!
    </div>
  </div>
</template>

<script setup>
  import axios from "axios"
  import { reactive } from "vue"
  import {detectOnline} from "@/utils/detect-online"
  let net = detectOnline()
  let state = reactive({
    text: ""
  })
  let getDadJoke = async () => {
    state.text =  await axios.get('https://icanhazdadjoke.com/', { headers: { "Accept": "text/plain" } })
    .then(e => e.data)
  }
  getDadJoke()
</script>
<style>
#app {
  margin-top: 60px;
  text-align: center;
  font-size: 30px;  
}

button {
  margin-top:20px;
  padding: 10px;
  background: green;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}
button:disabled {
  opacity: .5;
  background: #f00;
  cursor: not-allowed;
}
</style>
