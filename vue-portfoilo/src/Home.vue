<template>
  <div>
    <div class="border-img">
      <img class="photo" src="/src/imgs/test.png"/>
    </div>
    <div class="col-md-8">
      <h1 class="hello-word">Hello,<br/>I Am Andy Lu</h1>
      <p>Nunc eu arcu viverra magna vulputate bibendum vel at nulla. Suspendisse bibendum, magna ac auctor eleifend, metus magna ullamcorper velit, ut</p>
      <p>el ligula et, blandit ullamcorper lorem. Mauris ac ex eu ex mollis laoreet. Nullam quis quam venenatis, consequat nulla sed, varius felis. Vestibulum varius pretium volutpat. Nulla in sapien a dolor auctor volutpat. Pellentesque vel </p>
      <p>estas, quis egestas elit tempor. Quisque vulputate leo non neque eleifend, in tempor felis lacinia. Praesent a</p>
      <router-link to="/about" class="my-cv">My CV</router-link>
    </div>
  </div>
</template>

<script>

</script>
<style scoped>
.hello-word {
  color: black;
  line-height: 51px;
  font-size: 40px;
  letter-spacing: 1.5px;
  font-weight: 900;
}
p{
  font-size: 12px;
}
.col-md-8 {
  padding: 30px 1% 0 4%;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}
.my-cv {
  color: #333333;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 14px;
  border: none;
  position: relative;
  border: 2px solid #31d181;
  display: inline-block;
  text-transform: uppercase;
  background: transparent;
  margin-top: 15px;
  transition: all 0.5s ease-in-out;
}
.my-cv:hover {
  color: #fff;
  border-color: #31d181;
  background: #31d181;
}
.inner-content {
  display: flex;
  padding: 0;
  flex: 0 0 80%;
  max-width: 80%;
  background: unset;
}
.border-img {
  flex: 0 0 30%;
  max-width: 30%;
  margin-right: 2%;
  position: relative;
  width: 87%;
  -webkit-box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.1);
  height: fit-content;
  align-self: center;
}
.border-img:before {
    position: absolute;
    content: "";
    top: -30px;
    right: -30px;
    height: 92%;
    width: 100%;
    border: 15px solid #31d181;
    display: inline-block;
    z-index: -1;
}
.border-img .photo {
  width: 100%; 
  height: auto;
  background: white;
  vertical-align: middle;
}
@media (max-width:820px) {
  .inner-content {
    display: block;
    margin: 0;
    max-width: none;
    flex: none;
    width: 100%;
    margin-top: 80px;
  }
  .menu-right {
    position: relative;
  }
  .border-img {
    max-width: none;
    width: 60%;
    margin: 30px auto;
  }
  .border-img::before {
    top: -15px;
    right: -15px;
    height: 100%;
  }
  .col-md-8 {
    margin: 30px auto;
    max-width: 80%;
  }
}
</style>
