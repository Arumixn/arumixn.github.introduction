<template>
  <div class="app">
    <Menu/>
    <div class="content">
      <div class="cover side-bg"/>
      <router-view class="inner-content"/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Menu from './Menu';
import Footer from './Footer';

export default{
  components: {
    Menu,
    Footer,
  }
}
</script>

<style>
html, body, .app{
  padding: 0;
  margin: 0;
  font-family: Arial;
  color: #444;
}
.side-bg {
  background: linear-gradient(to right, rgba(28, 202, 162, 1) 0%, rgba(49, 209, 129, 1) 100%);
}
.inner-content {
  margin-left: -180px;
  padding: 20px 0;
  z-index: 10;
  background: white;
}
</style>

<style scoped>
.cover{
  width: 100%;
  /* background: url('./imgs/kv.jpg') center center; */
  background-size: cover;
  flex: 0 0 25%;
  max-width: 25%;
  height: 100%;
}
.content{
  width: 100%;
  /* display: inline-block; */
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  height: 90.2vh;
}
.inner-content{
  flex: 0 0 82%;
  max-width: 82%;
  align-self: center;
}
</style>
