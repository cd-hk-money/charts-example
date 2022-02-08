<template>
  <section class="container">
    <div>
      <ul id="router">
        <li><router-link to="/">Home</router-link></li>
      </ul>
    </div>
    <div class="chart">
      <apexchart type="candlestick" :options="apexChartOptions" :series="apexChartData"></apexchart>
    </div>
    <div class="charts">
      <div class="row">
        <div class="col-md-4">
          <div id="chart-spark1">
            <!-- <apexchart type="line" :options="chartOptionsSpark1" :series="seriesSpark1"></apexchart> -->
          </div>
        </div>
        <div class="col-md-4">
          <div id="chart-spark2">
            <!-- <apexchart type="area" :options="chartOptionsSpark2" :series="seriesSpark2"></apexchart> -->
          </div>
        </div>
        <div class="col-md-4">
          <div id="chart-spark3">
            <!-- <apexchart type="area" :options="chartOptionsSpark3" :series="seriesSpark3"></apexchart> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

import { randCandleData, randLineData } from '../chartUtils/createRandomData'

export default {
  data () {
    return {
      apexChartOptions: {
        chart: {
          animations: {
            enabled: true
          },
          annotations: {
            xaxis: [
              {
                x: 'Oct 06 14:00',
                borderColor: '#00E396',
                label: {
                  borderColor: '#00E396',
                  stlye: {
                    fontSize: '12px',
                    color: '#fff',
                    background: '#00E396'
                  },
                  orientation: 'horizontal',
                  offsetY: 7,
                  text: 'CODMA'
                }
              }
            ]
          },
          toolbar: {
            show: true,
            tools: {
              download: false,
              selection: false,
              pan: false,
              zoom: false,
              zoomout: true,
              reset: false
            },
            export: {
              enable: false
            },
            autoSelected: 'zoom'
          },
          id: 'vuechart-example'
        },
        // tooltip: {
        //   enabled: true,
        //   custom: function({series, seriesIndex, dataPointIndex}) {
        //     return '<div class="arrow_box">' + '<span>' + series[seriesIndex][dataPointIndex] + '</span>' + '</div>'
        //   },
        //   onDatasetHover: {
        //     highightDataSeries: false
        //   }
        // },
        type: 'candlestick',
        xaxis: {
          // categories: [...Array(100)].map((v, i) => i + 1994)
          // categories: MONTH
          type: 'datetime'
        },
        yaxis: {
          tooltop: {
            enabled: false
          }
        },
        plotOptions: {
          candlestick: {
            wick: {
              useFillColor: true
            }
          }
        }
      },
      chartOptionsSpark1: {
        chart: {
          type: 'line',
          height: 160
        },
        stroke: {
          curve: 'straight'
        },
        fill: {
          opcity: 0.3
        },
        yaxis: {
          show: false
        },
        colors: ['#DCE6EC'],
        title: {
          text: '424,625 ₩',
          offesetX: 0,
          style: {
            fontSize: '24px'
          }
        },
        subtitle: {
          text: 'Sales',
          offsetX: 0,
          style: {
            fontSize: '14px'
          }
        }
      },
      chartOptionsSpark2: {
        chart: {
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'straight'
        },
        fill: {
          opacity: 0.3
        },
        yaxis: {
          min: 0
        },
        colors: ['#DCE6EC'],
        title: {
          text: '235,312 ₩',
          offsetX: 0,
          style: {
            fontSize: '24px'
          }
        },
        subtitle: {
          text: 'Expenses',
          offsetX: 0,
          style: {
            fontSize: '14px'
          }
        }
      },
      chartOptionsSpark3: {
        chart: {
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'straight'
        },
        fill: {
          opacity: 0.3
        },
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        yaxis: {
          min: 0
        },
        title: {
          text: '135,965 ₩',
          offsetX: 0,
          style: {
            fontSize: '24px'
          }
        },
        subtitle: {
          text: 'Profits',
          offsetX: 0,
          style: {
            fontSize: '14px'
          }
        }
      },
      apexChartData: [],
      seriesSpark1: [{data: []}],
      seriesSpark2: [{data: []}],
      seriesSpark3: [{data: []}]
    }
  },
  methods: {
    fillData () {
      let tempData = randLineData(200)
      let tempCandleData = []
      let tempCandleDataYaxis = randCandleData(10000, 200, 0.2)
      let NOW = Date.now()

      for (let i = 0; i < 100; i++) {
        tempCandleData.push({
          x: new Date(NOW + 1800000 * i),
          y: tempCandleDataYaxis[i]
        })
      }
      this.apexChartData = [{
        name: 'candlestick',
        data: tempCandleData
      }]
      this.seriesSpark1.data = tempData
      this.seriesSpark2.data = tempData
      this.seriesSpark3.data = tempData
    }
  },
  created () {
    this.fillData()
  },
  mounted () {
  }
}
</script>
<style scoped>

</style>
