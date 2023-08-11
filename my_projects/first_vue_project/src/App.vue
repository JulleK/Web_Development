<script setup>
  // export default {
  //   data() {
  //     return {
  //       count: 0
  //     }
  //   }
  // }

  import {ref, onMounted} from 'vue'

  const count = ref(0)

  function increment() {
    count.value++
  }

  onMounted(()=>{
    console.log(`intilial count is ${count.value}`)
  })
</script>

<template>
    <button @click="increment">Count is: {{ count }}</button>
</template>

