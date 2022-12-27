<template>
  <div class="home">
    <div class="dom">
      <h3>HTTP原理</h3>
      <span>HTTP是一个基于TCP/IP通信协议来传递数据的协议，传输的数据类型为HTML 文件,、图片文件, 查询结果等。
      HTTP协议一般用于B/S架构（）。浏览器作为HTTP客户端通过URL向HTTP服务端即WEB服务器发送所有请求。</span> <br>
      <span>HTTP请求报文构成:1、请求行：包括请求方法、URL、协议/版本。2、请求头。3、请求正文。</span><br>
      <span>HTTP响应报文构成:1、状态行。2、响应头。3、响应正文。</span>
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
        <li>URI：统一资源标识符</li>
        <li>URL：统一资源定位符</li>
        <li>URI 是用来标示 一个具体的资源的，我们可以通过 URI 知道一个资源是什么。</li>
        <li>URL 则是用来定位具体的资源的，标示了一个具体的资源位置。互联网上的每个文件都有一个唯一的URL。</li>
      </ul>
    </div>
    <div class="dom">
      <h3>常见请求方法</h3>
      <ul>
        <li>GET:请求指定的页面信息，并返回实体主体。</li>
        <li>POST:向指定资源提交数据进行处理请求。数据被包含在请求体中。</li>
        <li>HEAD:类似于get请求，只不过返回的响应中没有具体的内容，用于获取报头。</li>
        <li>PUT:从客户端向服务器传送的数据取代指定的文档的内容。</li>
        <li>DELETE:请求服务器删除指定的页面。</li>
      </ul>
    </div>
    <div class="dom">
      <h3>post和get的区别</h3>
      <ul>
        <li>都包含请求头请求行，post多了请求body。</li>
        <li>get多用来查询，请求参数放在url中，不会对服务器上的内容产生作用。post用来提交，如把账号密码放入body中。</li>
        <li>GET是直接添加到URL后面的，直接就可以在URL中看到内容，而POST是放在报文内部的，用户无法直接看到。</li>
        <li>GET提交的数据长度是有限制的，因为URL长度有限制，具体的长度限制视浏览器而定。而POST没有。</li>
      </ul>
    </div>
    <div class="dom">
      <h3>响应状态码</h3>
      <ul>
        <li>1XX- 信息型，服务器收到请求，需要请求者继续操作。</li>
        <li>2XX- 成功型，请求成功收到，理解并处理。</li>
        <li>3XX - 重定向，需要进一步的操作以完成请求。</li>
        <li>4XX - 客户端错误，请求包含语法错误或无法完成请求。</li>
        <li>5XX - 服务器错误，服务器在处理请求的过程中发生了错误。</li>
      </ul>
    </div>
    <div class="dom">
      <h3>常见状态码：</h3>
      <ul>
        <li>200 OK - 客户端请求成功</li>
        <li>301 - 资源（网页等）被永久转移到其它URL</li>
        <li>302 - 临时跳转</li>
        <li>400 Bad Request - 客户端请求有语法错误，不能被服务器所理解</li>
        <li>401 Unauthorized - 请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用</li>
        <li>404 - 请求资源不存在，可能是输入了错误的URL</li>
        <li>500 - 服务器内部发生了不可预期的错误</li>
        <li>503 Server Unavailable - 服务器当前不能处理客户端的请求，一段时间后可能恢复正常。</li>
      </ul>
    </div>
    <div class="dom">
      <h3>HTTPS</h3>
      <ul>
        <span>一般http中存在问题：</span>
        <li>请求信息明文传输，容易被窃听截取。</li>
        <li>数据的完整性未校验，容易被篡改</li>
        <li>没有验证对方身份，存在冒充危险</li>
        <span>什么是HTTPS</span>
        <li>HTTP+SSL/TLS，通过 SSL证书来验证服务器的身份，并为浏览器和服务器之间的通信进行加密。</li>
        <span>SSL是什么</span>
        <li>SSL 协议位于 TCP/IP 协议与各种应用层协议之间，为数据通讯提供安全支持。</li>
      </ul>
    </div>
    <div class="dom">
      <h3>浏览器在使用HTTPS传输数据的流程</h3>
      <ul>
        <li>首先客户端通过URL访问服务器建立SSL连接。</li>
        <li>服务端收到客户端请求后，会将网站支持的证书信息（证书中包含公钥）传送一份给客户端。</li>
        <li>客户端的服务器开始协商SSL连接的安全等级，也就是信息加密的等级。</li>
        <li>客户端的浏览器根据双方同意的安全等级，建立会话密钥，然后利用网站的公钥将会话密钥加密，并传送给网站。</li>
        <li>服务器利用自己的私钥解密出会话密钥。</li>
        <li>服务器利用会话密钥加密与客户端之间的通信。</li>
      </ul>
    </div>
    <div class="dom">
      <h3>HTTPS的缺点</h3>
      <ul>
        <li>HTTPS协议多次握手，导致页面的加载时间延长近50%；</li>
        <li>HTTPS连接缓存不如HTTP高效，会增加数据开销和功耗；</li>
        <li>申请SSL证书需要钱，功能越强大的证书费用越高。</li>
        <li>SSL涉及到的安全算法会消耗 CPU 资源，对服务器资源消耗较大。</li>
      </ul>
    </div>
    <div class="dom">
      <h3>HTTPS和HTTP的区别</h3>
      <ul>
        <li>HTTPS是HTTP协议的安全版本，HTTP协议的数据传输是明文的，是不安全的，HTTPS使用了SSL/TLS协议进行了加密处理。</li>
        <li>http和https使用连接方式不同，默认端口也不一样，http是80，https是443。</li>
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
  flex-wrap: wrap;
}
.dom {
  padding: 20px;
  width: 30%;
  border: 2px dashed #ccc;
}
</style>
