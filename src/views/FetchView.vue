<template>
  <div>
    <button @click="onFetch">点击发送请求</button>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    onFetch() {
      fetch('http://localhost:3000/comments', { methods: 'GET' }).then(function (data) {
        return data.text();
      }).then(function (data) {
        console.log(data,"data");
      })
    },
  }
}
</script>
<style scoped>
</style> 