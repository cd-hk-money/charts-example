<template>
  <div class="small">
    <line-chart-mix :chart-data="dataCollection"></line-chart-mix>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>

import LineChartMix from './LineChartMix.vue'

export default {
  components: {
    LineChartMix
  },
  data () {
    return {
      dataCollection: null
    }
  },
  created () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.dataCollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Main One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: 'Main One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
      console.log('ChartTestMain', this.dataCollection)
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 4)) + 5
    }
  }
}
</script>

<style>
  .small {
    max-width: 600px;
    margin: 150px auto;
  }
</style>
