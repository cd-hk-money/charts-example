<template>
  <div class="codma-body">
    <div class="container">
      <h1>CODMA VUE CHART</h1>
      <ul>
        <li><router-link to="/chartjs">vue-chartjs</router-link></li>
        <li><router-link to="/charts">vue-charts</router-link></li>
        <li><router-link to="/chartKick">vue-chartkick</router-link></li>
        <li><router-link to="/apexcharts">apex-chart</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
 .home {
   display: flex;
   align-items: center;
   align-content: center;
   justify-content: center;
 }
 h1, h2 {
   font-weight: normal;
 }
 ul {
   list-style-type: none;
   padding: 0;
 }
 li {
   display: inline-block;
   margin: 0 10px;
 }
 a {
   color: #42b983;
   text-decoration: underline;
 }
</style>
