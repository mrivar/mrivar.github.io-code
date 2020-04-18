<template>
  <div class="main-container">
    <InfoBubbleNumber title="title name" value="10" note="asd">
      <apexchart class="chart" type="area" :options="options" :series="series"></apexchart>
    </InfoBubbleNumber>
    <InfoBubbleNumber value="100" note="asd"></InfoBubbleNumber>
    <InfoBubbleNumber title="title3" value="1000"></InfoBubbleNumber>
    <apexchart type="line" :options="options" :series="series"></apexchart>
    <apexchart type="area" :options="options" :series="series"></apexchart>
    <apexchart type="bar" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
//import spain from '~/assets/data_utils/spain.js'
import spainCSV from '~/static/data/serie_historica_acumulados.csv';
import InfoBubbleNumber from '~/components/molecules/InfoBubbleNumber.vue';

export default {
  layout: "covid19",
  validate ({ params }) {
    //country must exist
    return true
  },
  components: {
    InfoBubbleNumber
  },
  asyncData ({ params }) {
    return { spainCSV }
  },
  data() {
    return {
      infected: 500,
      infected_new: 100,
      dead: 50,
      dead_new: 10,
      recovered: 200,
      recovered_new: 50,
      options: {
        chart: {
          animations: {
            enabled: false
          },
          sparkline: {
            enabled: true
          },
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
        },
        colors: ['#74b4e6'],
        dataLabels: {
          enabled: false
        },
        fill: {
          opacity: 1,
          type: 'solid'
        },
        grid: {
          show: false
        },
        stroke: {
          curve: 'straight'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          labels: {
            show: false,
            maxHeight: 0,
          }
        },
        yaxis: {
          labels: {
            show: false,
            maxWidth: 0,
          }
        },
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  },
  mounted () {
    console.log(spainCSV)
  }
}
</script>

<style scoped lang="scss">
.main-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
}

.chart {
  position: absolute;
  bottom: 0;
}
</style>
