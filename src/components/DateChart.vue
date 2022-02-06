<script>

import { Line, mixins } from 'vue-chartjs'
import Utils from '../chartUtils/Utils.js'

const DATA_COUNT = 7
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100}

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['options'],
  data () {
    return {
      dataCollection: {
        labels: 'Data 1',
        datasets: [
          {
            label: 'Dataset 1',
            data: Utils.numbers(NUMBER_CFG),
            borderColor: Utils.CHART_COLORS.red,
            backgroundColor: Utils.CHART_COLORS.red
          }
        ]
      },
      options_date: {
        responsive: true,
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false
          },
          title: {
            display: true,
            text: 'chart.js CODMA Line Chart'
          }
        },
        hover: {
          mode: 'index',
          intersec: false
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Month'
            }
          }
        },
        y: {
          title: {
            display: true,
            text: 'Value'
          },
          min: 0,
          max: 100,
          ticks: {
            stepSize: 50
          }
        }
      }
    }
  },
  methods: {
    fillData () {

    }
  },
  mounted () {
    this.renderChart(this.dataCollection, this.options_date)
  }
}
</script>
