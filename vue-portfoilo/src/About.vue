<template>
  <div>
    <div class="border-img">
      <img class="photo" src="/src/imgs/test2.png"/>
      <!-- <div class="photo"></div> -->
    </div>
    <div class="col-md-8">
      <span class="about-me">Know About Me</span>
      <h1 class="hello-word">About Me</h1>
      <p>Nunc eu arcu viverra magna vulputate bibendum vel at nulla. Suspendisse bibendum, magna ac auctor eleifend, metus magna ullamcorper velit, ut</p>
      <p>el ligula et, blandit ullamcorper lorem. Mauris ac ex eu ex mollis laoreet.</p>
      <ul class="contact-info">
        <li><span>Name : </span>Andy</li>
        <li><span>Freelance : </span>Available</li>
        <li><span>Date of birth : </span>1995-03-16</li>
        <li><span>Email : </span>lu840316@gmail.com</li>
        <li><span>Phone : </span>0933XXXXXX</li>
        <li><span>Address : </span>Taoyuan</li>
        <li><span>Nationality : </span>Taiwan</li>
        <li><span>Gender : </span>Male</li>
        <li><span>Marital Status : </span>Single</li>
        <li><span>Work Status : </span>Web Designer</li>
      </ul>
      <router-link to="/booking" class="resume">RESUME</router-link>
      <router-link to="/courses" class="resume">My Portfolio</router-link>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.hello-word {
    color: #31d181;
    line-height: 51px;
    font-size: 40px;
    letter-spacing: 1.5px;
    font-weight: 900;
    margin: 10px 0px;
}
p{
  font-size: 12px;
}
.about-me {
    font-size: 13px;
    color: white;
    background: black;
    padding: .4rem .6rem;
}
.contact-info {
  display: inline-block;
  width: 100%;
  padding: 0;
  margin: 0;
}
.contact-info li {
  list-style: none;
  width: 50%;
  float: left;
  margin: 12px 0px;
}
.contact-info li span {
  font-weight: bold;
}
.resume {
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
.resume:hover {
  color: #fff;
  border-color: #31d181;
  background: #31d181;
}
.col-md-8 {
  padding: 30px 50px 0 1%;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}
.inner-content {
  display: flex;
  padding: 0;
  flex: 0 0 80%;
  max-width: 80%;
  background: none;
}
.border-img {
  flex: 0 0 28%;
  max-width: 28%;
  margin-right: 4%;
  position: relative;
  width: 87%;
  -webkit-box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.1);
  height: fit-content;
  align-self: center;
  /* background: white; */
}
.border-img:before {
    position: absolute;
    content: "";
    top: 49px;
    right: -30px;
    height: 89%;
    width: 100%;
    border: 15px solid #31d181;
    display: inline-block;
    z-index: -1;
}
.border-img .photo {
  width: 100%; 
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
@media (max-width:560px) {
  .contact-info li {
    width: 100%;
  }
}
</style>
