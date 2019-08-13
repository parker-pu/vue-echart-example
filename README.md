# vue 与 echart 的列子

## 安装相关的包

```
npm install
```

### 运行

```
npm run serve
```

### 编译

```
npm run build
```

### 测试

```
npm run test
```

## 使用步骤

#### **注意**：以下需要安装包的地方均已经安装，包在 **packege.json** 里面有说明

### 安装 echart 的包

```
npm install echarts --save
```

### 示例代码

```html
<template>
  <div>
    <div id="echartBar"></div>
  </div>
</template>

<script>
  var echarts = require('echarts');
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
        var myChart = echarts.init(document.getElementById('echartBar'));
        // 绘制图表
        myChart.setOption({
          title: {text: 'ECharts 入门示例'},
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20],
            },
          ],
        });
      },
    },
  };
</script>

<style scoped>
  #echartBar {
    width: 380px;
    height: 330px;
  }
</style>
```

即可看到如下效果：
![Bar](https://github.com/parker-pu/vue-echart-example/raw/master/docs/images/bar.png)
