<template>
  <div>
    <h1>test1</h1>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
  setup() {
    onMounted(() => {
      console.log('test')
    })
    return {
      
    }
  }
})
</script>