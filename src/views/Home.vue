<template>
  <div class="home">
    <svg-icon icon-class="edit"></svg-icon>
    <hr>
    <hello-world msg="Welcome to Your Vue.js App" v-model="val">
      <template #second>
        <h2><strong>{{user}}</strong></h2>
      </template>
      <template>
        <h2><strong>Current  Slot Content</strong></h2>
      </template>
    </hello-world>
    <hr>
    <p>Outer： <code>{{val}}</code> </p>
    <!-- comments -->
    <input type="text" v-model="val">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      val: 'jim',
      user: 'Jessica'
    }
  },
  components: {
    HelloWorld
  }
}
</script>
