<template>
  <div class="menu">
    <div class="menu-left">
      <div class="img-title side-bg">123</div>
    </div>
    <div class="menu-right">
      <button class="nav-toggle" @click="RwdMenu" :class="{show: MenuToggle}">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="overlay" :class="{show: MenuToggle}"></div>
      <div class="sub-menu" :class="{show: MenuToggle}">
        <router-link to="/home"><span @click="RwdMenu">Home</span></router-link>
        <router-link to="/about"><span @click="RwdMenu">About</span></router-link>
        <router-link to="/booking"><span @click="RwdMenu">Resume</span></router-link>
        <router-link to="/courses"><span @click="RwdMenu">Portfoilo</span></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      MenuToggle: false,
    };
  },
  methods:{
    RwdMenu() {
      this.MenuToggle = !this.MenuToggle;
    },
  }
};
</script>

<style scoped>
.overlay {
  height: 100vh;
  width: 100%;
  position: fixed;
  background-image: linear-gradient(to left, rgba(0,0,0,0.8), transparent);
  z-index: 15;
  top: 0;
  display: none;
}

.nav-toggle{
  position: fixed;
  width: 30px;
  right: 20px;
  top: 20px;
  border: none;
  height: 21px;
  background: none;
  cursor: pointer;
  outline: none;
  z-index: 50;
  display: none;
}
.nav-toggle span {
  background-color: #31d181;
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #31d181;
  opacity: 1;
  left: 0;
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: 0.25s ease-in-out;
}
.nav-toggle span:nth-child(1) {
  top: 0px;
}
.nav-toggle span:nth-child(2),
.nav-toggle span:nth-child(3) {
  top: 8px;
}
.nav-toggle span:nth-child(4) {
  top: 16px;
  width: 65%;
}
.nav-toggle:hover span:nth-child(4) {
    width: 100%;
}
.nav-toggle.show span:nth-child(1),
.nav-toggle.show span:nth-child(4){
  transform: scale(0, 0);
}
.nav-toggle.show span:nth-child(2){
  transform: rotate(45deg);
}
.nav-toggle.show span:nth-child(3) {
  transform: rotate(-45deg);
}
.menu {
  display: flex;
  align-items: center;
}
.menu-left{
  flex: 0 0 25%;
  text-align: center;
  padding: 10px 0px;
  background: linear-gradient(to right, rgba(28, 202, 162, 1) 0%, rgba(49, 209, 129, 1) 100%);
}
.menu-right{
  /* background-color: green; */
  flex: 0 0 73%;
  text-align: right;
  /* width: 20%; */
  /* display: inline-block; */
}
a{
  display: inline-block;
  font-size: 12px;
  color: white;
  text-decoration: none;
  padding: 1em 2em;
  color: #42b983;
}
a:hover{
  background-color: #42b98320;
}
a.router-link-active{
  background: #31d181;
  color: #fff;
}
.menu-right a{
  font-size: 15px;
}
.img-title{
  padding: 15px 25px;
}
@media (max-width:1024px) {
  .nav-toggle {
    display: block;
  }
  .sub-menu {
    display: none;
  }
  .sub-menu.show {
    display: flex;
    flex-direction: column;
    text-align: right;
    position: absolute;
    right: 47px;
    z-index: 20;
    top: 80px;
  }
  .menu-right .sub-menu.show a {
    font-size: 21px;
    background: unset;
    color: white;
  }
  .menu-right .sub-menu.show a:hover {
    color: #31d181;
  }
  .overlay {
    transition: all 0.6s ease-in-out;
    transition-delay: 150ms;
  }
  .sub-menu.show a.router-link-active {
    color: #31d181;
  }
  .overlay.show {
    display: block;
  }
  .sub-menu a {
    padding: 0;
    margin: .7em 2em;
  }
  .sub-menu a span {
    padding: 1em 2em;
  }
}
</style>
<style>
  a {
    text-decoration: none;
  }
  body {
    margin: 0;
  }
  @media (max-width:820px) {
    .cover{
      display: none;
    }
    .menu {
      background: linear-gradient(to right, rgba(28, 202, 162, 1) 0%, rgba(49, 209, 129, 1) 100%);
      position: fixed;
      width: 100%;
      z-index: 30;
    }
    .menu-left .side-bg,
    .menu-left {
      background: unset !important;
    }
    .menu-right .nav-toggle span {
      background-color: white;
    }
  }
</style>