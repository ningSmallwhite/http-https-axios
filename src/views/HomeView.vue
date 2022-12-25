<template>
  <div class="home">
    <div class="dom">
      <h3>HTTP原理</h3>
      <span>HTTP是一个基于TCP/IP通信协议来传递数据的协议，传输的数据类型为HTML 文件,、图片文件, 查询结果等。
      HTTP协议一般用于B/S架构（）。浏览器作为HTTP客户端通过URL向HTTP服务端即WEB服务器发送所有请求。</span> 
    </div>
    <div class="dom">
      <h3>HTTP特点</h3>
      <ul>
        <li>http协议支持客户端/服务端模式，也是一种请求/响应模式的协议。</li>
        <li>简单快速：客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有GET、HEAD、POST。</li>
        <li>灵活：HTTP允许传输任意类型的数据对象。传输的类型由Content-Type加以标记。</li>
        <li>无连接：限制每次连接只处理一个请求。服务器处理完请求，并收到客户的应答后，
          即断开连接，但是却不利于客户端与服务器保持会话连接，为了弥补这种不足，
          产生了两项记录http状态的技术，一个叫做Cookie,一个叫做Session。</li>
        <li>无状态：无状态是指协议对于事务处理没有记忆，后续处理需要前面的信息，则必须重传。</li>
      </ul>
    </div>
    <div class="dom">
      <h3>URI和URL的区别</h3>
      <ul>
        <li>HTTP使用统一资源标识符,来传输数据和建立连接。</li>
        <li>URI：Uniform Resource Identifier 统一资源标识符</li>
        <li>URL：Uniform Resource Location 统一资源定位符</li>
        <li>URI 是用来标示 一个具体的资源的，我们可以通过 URI 知道一个资源是什么。</li>
        <li>URL 则是用来定位具体的资源的，标示了一个具体的资源位置。互联网上的每个文件都有一个唯一的URL。</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  }
}
</script>
<style scoped>
.home {
  display: flex;
  justify-content: space-around;
}
.dom {
  padding: 20px;
  width: 30%;
  border: 2px dashed #ccc;
}
</style>
