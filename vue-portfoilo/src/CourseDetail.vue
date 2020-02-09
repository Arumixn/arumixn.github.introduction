<template>
  <div>
    <router-link to="/courses" class="back">Back</router-link>
    <!-- <div class="cover" :style="coverStyle"></div> -->
    <h1>{{course.name}}</h1>
    <img class="course-img" :src="this.course.img" alt="">
    <h3 class="description-title">{{course.name}}描述</h3>
    <pre>{{course.description}}</pre>
    <h3 v-if="course.links" class="link-title">網站連結：</h3>
    <div class="link-area" v-for="linking in course.links">
      <a class="about-link" target="_blank" :href="linking.link">{{linking.name}}</a>
    </div>
  </div>
</template>

<script>
import courses from './courses';

export default {
  computed:{
    course(){
      const {id} = this.$route.params;
      return courses.find(course=>course.id == id) || {};
    },
    coverStyle(){
      return {
        backgroundImage: `url('${this.course.img}')`,
      }
    },
  },
};
</script>

<style scoped>
a{
  font-size: 10px;
  text-decoration: none;
  color: #42b983;
  line-height: 2.5em;
}
a:before{
  content: '< ';
}
.about-link::before {
  content: '';
}
.cover{
  width: 100%;
  height: 200px;
  background: center center;
  background-size: cover;
}
.course-img {
  width: 50%;
}
h1{
  color: #42b983;
}
p{
  font-size: 10px;
}
.back {
  font-size: 16px;
  font-weight: 600;
  padding: 10px 14px;
  border-radius: 10px;
    color: mediumseagreen;
  background: white;
  transition-duration: 0.3s;
}
.back:hover {
  color: white;
  background: mediumseagreen;
}
.description-title,
.link-title {
  margin-left: 10px;
}
.link-area a{
  margin: 10px 0 10px 20px;
  font-size: 16px;
  font-weight: 600;
}
pre {
  font-size: 18px;
  font-family: 'Microsoft JhengHei';
  line-height: 1.5;
  margin: 10px 0 50px 20px;
}
@media (max-width: 820px) {
  .cover {
      display: block;
  }
  .course-img {
    width: 80%;
  }
  .inner-content {
    margin-top: 60px;
  }
}
</style>
