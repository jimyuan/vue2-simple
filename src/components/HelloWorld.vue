<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <input type="text" :value="value" @input="chgValue">
    <slot>
      <h2><strong>slot default content</strong></h2>
    </slot>
    <slot name="second">
      <p>default second</p>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    value: String
  },
  data () {
    return {
      arr: ['Jim', 'Jessica', 'Jerry'].map(v => ({
        val: v,
        id: Math.random()
      }))
    }
  },
  computed: {
  },
  methods: {
    chgValue (e) {
      this.$emit('input', e.target.value)
    },
    addValue () {
      this.arr.push({ val: 'Tom', id: Math.random() })
    }
  }
}
</script>
<style media="screen">
  .code-block {
    width: 400px;
    margin: auto;
    text-align: left;
  }
</style>
