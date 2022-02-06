<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  data () {
    return {
      datacollection: {
        labels: ['grade'],
        datasets: [
          {
            label: 'Doughnut',
            data: [40, 90],
            backgroundColor: [
              'rgb(255, 99, 132)',
              '#fafad2'
            ],
            hoverOffset: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
</script>
