<template>
  <div>
    <div class="resume">
      <h1>My Portfolio</h1>
      <router-view/>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.resume {
    padding: 0px 0px 20px 40px
}
.resume h1 {
  margin-top: 0px;
  color: #31d181;
  font-weight: 900;
  font-size: 36px;
}
.inner-content {
  overflow: hidden;
  outline: none;
  max-height: 650px;
  border-top: 20px solid white;
  border-bottom: 20px solid white;
  padding: 0;
}
.inner-content:hover {
  overflow-y: scroll;
}
.inner-content::-webkit-scrollbar-track{
  /* box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
	/* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
	border-radius: 10px;
	/* background-color: #F5F5F5; */
}
.inner-content::-webkit-scrollbar{
	width: 7px;
  position: absolute;
	/* background-color: #F5F5F5; */
}

.inner-content::-webkit-scrollbar-thumb{
	border-radius: 10px;
  /* box-shadow: inset 0 0 6px rgba(0,0,0,.3); */
	/* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3); */
	background-color: #42b983;
}
@media (max-width:1100px) {
  .inner-content {
    flex: 0 0 90%;
    max-width: 90%;
  }
}
@media (max-width:820px) {
  .inner-content {
    display: block;
    max-width: none;
    /* flex: none; */
    width: 100%;
    margin: 0 auto;
    padding: 0;
    max-height: none;
    margin-top: 68px;
  }
  .resume {
    padding: 0px;
  }
}
</style>
