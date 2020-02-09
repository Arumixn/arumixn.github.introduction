<template>
  <div>
    <div class="exprience-content">
      <div class="col-md-12">
        <span>My Work Experience</span>
        <h1>Resume</h1>
      </div>
      <div class="col-md-6">
        <h3 class="title">Education</h3>
        <ul class="education">
          <li><span></span>
            <div>
                <div class="lead iq-tw-6 iq-font-black">Bachelor Degree</div>
                <div class="type iq-font-purple">ACPIS</div>
                <div class="info">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
            </div> <span class="number"><span>2000</span> <span>2004</span></span>
          </li>
          <li><span></span>
            <div>
                <div class="lead iq-tw-6 iq-font-black">Bachelor Degree</div>
                <div class="type iq-font-purple">ACPIS</div>
                <div class="info">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
            </div> <span class="number"><span>2000</span> <span>2004</span></span>
          </li>
          <li><span></span>
            <div>
                <div class="lead iq-tw-6 iq-font-black">Bachelor Degree</div>
                <div class="type iq-font-purple">ACPIS</div>
                <div class="info">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
            </div> <span class="number"><span>2000</span> <span>2004</span></span>
          </li>
          <li><span></span>
            <div>
                <div class="lead iq-tw-6 iq-font-black">Bachelor Degree</div>
                <div class="type iq-font-purple">ACPIS</div>
                <div class="info">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
            </div> <span class="number"><span>2000</span> <span>2004</span></span>
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <h3 class="title">Experience</h3>
        <ul class="education">
          <li><span></span>
              <div>
                  <div class="lead iq-tw-6 iq-font-black">Bachelor Degree</div>
                  <div class="type iq-font-purple">ACPIS</div>
                  <div class="info">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
              </div> <span class="number"><span>2000</span> <span>2004</span></span>
          </li>
          <li><span></span>
              <div>
                  <div class="lead iq-tw-6 iq-font-black">Bachelor Degree</div>
                  <div class="type iq-font-purple">ACPIS</div>
                  <div class="info">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
              </div> <span class="number"><span>2000</span> <span>2004</span></span>
          </li>
          <li><span></span>
            <div>
                <div class="lead iq-tw-6 iq-font-black">Bachelor Degree</div>
                <div class="type iq-font-purple">ACPIS</div>
                <div class="info">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
            </div> <span class="number"><span>2000</span> <span>2004</span></span>
          </li>
          <li><span></span>
            <div>
                <div class="lead iq-tw-6 iq-font-black">Bachelor Degree</div>
                <div class="type iq-font-purple">ACPIS</div>
                <div class="info">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
            </div> <span class="number"><span>2000</span> <span>2004</span></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="skill-content">
      <div class="col-md-6">
        <h3 class="title">My Language skills</h3>
        <p class="skill-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <div>
          <p class="skill-item">English
            <span>{{Language.English}}/100</span>
          </p>
          <div class="bar-bg">
            <span class="bar-progress-rate" :style="{width: Language.English + '%'}"></span>
          </div>
        </div>
        <div>
          <p class="skill-item">French
            <span>{{Language.French}}/100</span>
          </p>
          <div class="bar-bg">
            <span class="bar-progress-rate" :style="{width: Language.French + '%'}"></span>
          </div>
        </div>
        <div>
          <p class="skill-item">German
            <span>{{Language.German}}/100</span>
          </p>
          <div class="bar-bg">
            <span class="bar-progress-rate" :style="{width: Language.German + '%'}"></span>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h3 class="title">My Technical skills</h3>
        <p class="skill-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <div>
          <p class="skill-item">HTML
            <span>{{skill.html}}/100</span>
          </p>
          <div class="bar-bg">
            <span class="bar-progress-rate" :style="{width: skill.html + '%'}"></span>
          </div>
        </div>
        <div>
          <p class="skill-item">CSS
            <span>{{skill.css}}/100</span>
          </p>
          <div class="bar-bg">
            <span class="bar-progress-rate" :style="{width: skill.css + '%'}"></span>
          </div>
        </div>
        <div>
          <p class="skill-item">SASS
            <span>{{skill.javascript}}/100</span>
          </p>
          <div class="bar-bg">
            <span class="bar-progress-rate" :style="{width: skill.javascript + '%'}"></span>
          </div>
        </div>
        <div>
          <p class="skill-item">Javascript
            <span>{{skill.javascript}}/100</span>
          </p>
          <div class="bar-bg">
            <span class="bar-progress-rate" :style="{width: skill.javascript + '%'}"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import courses from './courses';

export default {
  data(){
    return {
      name:'',
      tel: '',
      time: '',
      course: 1,
      skill: {
        html: '95',
        css: '80',
        javascript: '70',
      },
      Language: {
        English: '70',
        French: '50',
        German: '30',
      },
    };
  },
  computed:{
    courses(){
      return courses;
    },
  },
};
</script>

<style scoped>
.group{
  display: flex;
  flex-flow: row nowrap;
  font-size: 12px;
  margin: 1em 0;
  align-items: center;
  justify-content: center;
}
label{
  flex: 0 0 40px;
  text-align: right;
  padding-right: 10px;
}
input, select{
  flex: 1 1;
  font-size: 12px;
  padding: 4px;
}
p{
  font-size: 10px;
}
.btns{
  text-align: center;
  margin-top: 2em;
}
button{
  background: #42b983;
  border: none;
  color: white;
  font-size: 12px;
  padding: .5em 2em;
  cursor: pointer;
}
button:hover{
  background: #55cc99;
}
.inner-content {
  padding: 20px 40px;
  overflow: hidden;
  outline: none;
  max-height: 480px;
  border-top: 20px solid white;
  border-bottom: 20px solid white;
  position: relative;
  flex: 0 0 78%;
  max-width: 78%;
}
.inner-content:hover{
  overflow-y: scroll;
  flex: 0 0 78%;
  max-width: 78%;
}
.resume::-webkit-scrollbar-track{
  /* box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
	/* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
	border-radius: 10px;
	/* background-color: #F5F5F5; */
  position: absolute;
}
.resume::-webkit-scrollbar{
	width: 7px;
  position: absolute;
	/* background-color: #F5F5F5; */
}

.resume::-webkit-scrollbar-thumb{
	border-radius: 10px;
  /* box-shadow: inset 0 0 6px rgba(0,0,0,.3); */
	/* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3); */
	background-color: #42b983;
  position: absolute;
}

.exprience-content, .skill-content{
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  padding: 0px 16px;
}
.exprience-content .col-md-12 span {
  font-size: 13px;
  color: white;
  background: black;
  padding: .4rem .6rem;
}
.exprience-content .col-md-12 h1 {
  color: #31d181;
  font-size: 40px;
  margin: 6px 0px;
}
h3.title {
  font-size: 25px;
  font-weight: 900;
  margin: 14px 0;
  position: relative;
  padding-bottom: 7px;
}
h3.title:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  display: inline-block;
  background: -webkit-linear-gradient(left, rgba(28, 202, 162, 1) 0%, rgba(49, 209, 129, 1) 100%);
}
.col-md-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
}
.col-md-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
}
ul.education {
    margin: 20px 0 50px;
    list-style: none;
    position: relative;
    padding: 0 0 0 50px;
    display: inline-block;
    font-size: 14px;
}
ul.education li {
    position: relative;
    margin-left: 30px;
    background-color: #fbfbfb;
    padding: 20px;
    transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
}
ul.education li:not(:first-child) {
    margin-top: 60px;
}
ul.education li > span {
    width: 2px;
    height: 100%;
    background: #777777;
    left: -30px;
    top: 0;
    position: absolute;
}
ul.education li > span:before, ul.education li > span:after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 90%;
    border: 2px solid #777777;
    position: absolute;
    left: -6px;
    top: -12px;
}
ul.education li span:after {
    top: 100%;
}
ul.education li > div {
    margin-left: 10px;
}
span.number span {
    position: absolute;
    left: -43px;
    font-weight: bold;
}
span.number span:first-child {
    top: -16px;
}
span.number span:last-child {
    top: 97%;
}
.skill-content .col-md-6{
    padding-right: 1.5%;
    padding-left: 1.5%;
    flex: 0 0 47%;
}
.skill-content p.skill-description{
  margin-bottom: 15px;
  font-size: 15px;
  color: #777777;
}
.skill-content p.skill-item {
  font-size: 14px;
  line-height: 24px;
}
.skill-content p.skill-item span {
  float: right;
}
.bar-bg {
  background: #666 none repeat scroll 0 0;
  box-shadow: 0 0 0;
  height: 5px;
  margin: 0 0 30px;
  position: relative;
  width: 100%;
}
.bar-progress-rate {
    background: #31d181 none repeat scroll 0 0;
    display: block;
    transition: width 2s ease 0s;
    width: 0%;
    height: 5px;
}
@media (max-width:820px) {
  .inner-content {
    display: block;
    max-width: none;
    flex: none;
    width: 100%;
    margin-top: 80px;
    margin: 0 auto;
    padding: 0;
    max-height: none;
  }
  .inner-content:hover {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .col-md-6,
  .skill-content .col-md-6 {
    flex: 0 0 95%;
    max-width: 95%;
  }
  .exprience-content {
    margin: 0;
    margin-top: 70px;
  }
  .skill-content {
    margin: 0;
    margin-top: 40px;
  }
  .inner-content:hover {
    overflow: auto;
  }
}
</style>
