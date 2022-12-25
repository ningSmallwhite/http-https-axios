<template>
  <div class="">
    <h1>axios请求</h1>
    <button @click="onAxios">点击发送请求</button>
    <button @click="onAxiosAdd">点击添加数据</button>
    <button @click="onAxiosDelete">点击删除数据</button>
    <button @click="onAxiosUpdate">点击修改数据</button>
    <table border="1">
      <tr v-for="item in tableList" :key="item.id">
        <td>{{item.uname}}</td>
        <td>{{item.age}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      tableList:[]
    }
  },
  methods: {
    onAxios() {
      axios({
        url: 'http://localhost:3000/mies',
        method: 'GET',
        data: {},
      }).then((res) => {
        console.log(res)
        this.tableList = res.data
      }).catch(error => {
        console.log(error)
      });
    },
    onAxiosAdd(){
      axios({
        url: 'http://localhost:3000/mies',
        method: 'POST',
        data: {
          uname: "张三",
          age: "20"
        },
      }).then((res) => {
        console.log(res, 'res')
      }).catch(error => {
        console.log(error)
      });
      this.onAxios()
    },
    onAxiosDelete(){
      axios({
        url: 'http://localhost:3000/mies/3',
        method: 'delete',
      }).then((res) => {
        console.log(res, 'res')
      }).catch(error => {
        console.log(error)
      });
      this.onAxios()
    },
    onAxiosUpdate() {
      axios({
        url: 'http://localhost:3000/mies/1',
        method: 'patch',
        data: {
          uname: "张湖",
          age: "20"
        },
      }).then((res) => {
        console.log(res, 'res')
      }).catch(error => {
        console.log(error)
      });
      this.onAxios()
    }
  }
}
</script>
