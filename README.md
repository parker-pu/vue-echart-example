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

## 其它图表的使用

- [echart 案列地址](https://echarts.baidu.com/examples/)

### 选择自己想要的图标

![home](https://github.com/parker-pu/vue-echart-example/raw/master/docs/images/echart_home.png)

### 点击进入

![home](https://github.com/parker-pu/vue-echart-example/raw/master/docs/images/select_echart.png)

### 把左侧的 **option** 的内容填充到案列代码中的 myChart.setOption() 内的集合里面，原样拷贝过来都行，这样就能够在对应的 **<div id="xxx">** 的**div**结构体里面填充对应的图标，如果需要从后台动态传入数据，那么获取数据之后，填充对应数据即可
