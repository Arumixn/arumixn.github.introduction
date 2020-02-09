<template>
  <div>
    <div class="course" v-for="course in courses">
      <router-link :to="`/courses/${course.id}`">
        <figure class="img">
        <!-- :style="imgStyle(course.img)" -->
          <!-- <div class="img" :style="imgStyle(course.img)"></div> -->
          <img :src="course.img"/>
          <figcaption class="overlay">
            <div class="projecet-font">{{course.name}}</div>
            <p>Web Developed</p>
          </figcaption>
        </figure>
      </router-link>
      <!--<div class="text">
         <router-link :to="`/courses/${course.id}`">
          {{course.name}}
        </router-link>
        <p>Curabitur augue ipsum, posuere nec dolor at, tincidunt pretium leo. Aenean sit amet odio lacus. Vivamus ipsum risus</p> 
      </div>-->
    </div>
  </div>
</template>

<script>
import courses from './courses';

export default {
  computed:{
    courses(){
      return courses;
    }
  },
  methods:{
    imgStyle(img){
      return {
        backgroundImage: `url('${img}')`,
      };
    },
  },
};
</script>

<style scoped>
div.img{
  display: inline-block;
  flex: 0 0 32%;
  height: 100%;
  background: center center;
  background-size: cover;
  width: 100%;
}
.course {
  display: inline-block;
  position: relative;
  width: 31%;
  padding: 10px;
  transition: all 0.8s ease-in-out;
  -moz-transition: all 0.8s ease-in-out;
  -ms-transition: all 0.8s ease-in-out;
  -o-transition: all 0.8s ease-in-out;
  -webkit-transition: all 0.8s ease-in-out;
}
.course a {
  width: 100%;
  box-shadow: 2px 3px 7px 0px;
  color: rgba(0,0,0,0.2);
}
figure.img {
  margin: 0;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  /* height: 250px; */
}
figcaption {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  color: white;
  opacity: 0;
}
figcaption::before {
  top: 10px;
    right: 10px;
    bottom: 10px;
    left: 10px;
    position: absolute;
    content: '';
    opacity: 0;
    transform: scale(0, 0);
    transform-origin: 0 0;
}
figure:hover figcaption {
  opacity: 1;
}
figure:hover figcaption::before {
  background: rgba(27,23,23,0.5);
  opacity: 1;
  transform: scale(1);
}
figcaption:hover p{
  transition-delay: 0.15s;
  opacity: 1;
  transform: translate3d(0, 0, 0);
  color: #fff;
}
figcaption p,
figure img,
figure .img,
figcaption::before {
  transition: opacity 0.35s, transform 0.35s, transform 0.35s;
}
.projecet-font {
  margin-top: 25%;
  transform: scale(1.06, 1.06);
  font-size: 24px;
}
figure img,
figure .img {
  width: 100%;
  transition-delay: 0.10s;
  transform: scale(1.06, 1.06);
}
figure:hover img,
figure:hover .img {
  transform: translate3d(0, 0, 0);
}
.text{
  display: inline-block;
  padding-left: 10px;
}
a{
  display: inline-block;
  color: #42b983;
  font-size: 1.2em;
  text-decoration: none;
}
p{
  font-size: 10px;
}
@media (max-width:1100px) {
  .course {
    width: 45%;
  }
  .inner-content {
    flex: 0 0 85%;
    max-width: 85%;
  }
}
@media (max-width:820px) {
  .course {
    width: 100%;
  }
  figure.img {
    height: 330px;
  }
  figcaption::before {
    right: 22px;
  }
}
</style>
