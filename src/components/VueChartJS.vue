<template>
  <section class="container">
    <div>
      <ul id="router">
        <li><router-link to="/">Home</router-link></li>
        <!-- <li><router-link to="/chartjs">vue-chartjs</router-link></li>
        <li><router-link to="/charts">vue-charts</router-link></li>
        <li><router-link to="/chartKick">vue-chartKick</router-link></li> -->
      </ul>
    </div>
    <div class="filter">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="day" disabled>
          <label class="form-check-label" for="inlineRadio1">일(disabled)</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="week" checked v-model="picked" @change="fillCollection">
          <label class="form-check-label" for="inlineRadio2">주</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="month" v-model="picked" @change="fillCollection">
          <label class="form-check-label" for="inlineRadio3">월</label>
        </div>
    </div>
    <div class="colums">
      <div class="column">
        <h3>&nbsp;</h3>
        <line-chart :chart-data="dataCollection" :options="options"></line-chart>
      </div>
      <div class="column">
        <h3>Bar Chart</h3>
        <bar-chart></bar-chart>
      </div>
    </div>
    <div class="colums">
      <div class="column">
        <h3>Doughnut Chart</h3>
        <doughnut-chart></doughnut-chart>
      </div>
      <div class="column">
        <!-- <h3>Reactive Chart</h3> -->
      </div>
      <div class="column">
        <!-- <h3>Date test</h3> -->
      </div>
    </div>
  </section>
</template>

<script>

import LineChart from '@/components/LineChart'
import BarChart from '@/components/BarChart'
import BubbleChart from '@/components/BubbleChart'
import Reactive from '@/components/Reactive'
import DoughnutChart from './DoughnutChart'

// const MONTH = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export default {
  name: 'VueChartJS',
  components: {
    LineChart,
    BarChart,
    BubbleChart,
    Reactive,
    DoughnutChart
  },
  data () {
    return {
      picked: 'week',
      dataCollection: null,
      options: null,
      data: []
    }
  },
  computed: {
    getLabels (filter) {
      return (filter === 'week') ? 0 : 6
    }
  },
  methods: {
    filterChange () {
      console.log('필터가 변경되었음.' + this.$data.picked)
    },
    fillCollection () {
      const type = this.picked
      const count = 50
      for (let i = 0; i < count; i++) {
        this.data.push((Math.floor(Math.random() * 100) + 50))
      }
      this.dataCollection = {
        labels: this.createLabels(type, 20),
        // labels: Array.from({ length: maxlength.max }, (v, i) => String(`${(new Date()).toISOString().substring(8, -1)}${this.dateConvert(i + maxlength.mount * 2)}`)),
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#d87979',
            fill: false,
            pointBackgroundColor: 'white',
            borderWidth: 5,
            pointBorderColor: '#249EBF',
            tension: 0,
            data: this.data
          }
        ]
      }
      this.options = {
        scales: {
          x: {
            type: 'time',
            time: {
              tooltipFormat: 'YYYY MM DD'
            }
          },
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    },
    dateConvert (arg) {
      if (arg < 10) {
        return '0' + String(arg)
      }
      return String(arg)
    },
    createLabels (type, count) {
      let option = {
        max: 20,
        amount: 1
      }
      if (type === 'week') {
        option.max = count
        option.amount = 2
        return Array.from({ length: option.max }, (v, i) => String(`${(new Date()).toISOString().substring(8, -1)}${this.dateConvert(i + option.amount * 2)}`))
      } else {
        option.max = 4
        option.amount = 1
        return Array.from({ length: option.max }, (v, i) => String(`${(new Date()).getFullYear()}-${this.dateConvert(i + option.amount * 2)}`))
      }
    }
  },
  created () {
    this.fillCollection()
  }
}
</script>

<style scoped>

</style>
