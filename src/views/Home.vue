<template>
  <div>
    <div id="echartBar"></div>
  </div>
</template>

<script>
var echarts = require("echarts");
export default {
  data() {
    return {};
  },

  // 在页面加载的时候，调这个函数
  mounted: function() {
    // 绘制直方图
    this.loadBar();
  },

  methods: {
    loadBar() {
      var myChart = echarts.init(document.getElementById("echartBar"));
      // 绘制图表
      myChart.setOption({
        title: { text: "ECharts 入门示例" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
#echartBar {
  width: 380px;
  height: 330px;
}
</style>
