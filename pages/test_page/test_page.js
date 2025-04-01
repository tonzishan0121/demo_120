const fs = wx.getFileSystemManager();
import * as echarts from '../../ec-canvas/echarts'
Page({
  data: {
    ec: {
      onInit: function (canvas, width, height) {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height
        });

        // 读取上海地图的JSON文件
        try {
          const shanghaiJsonStr = fs.readFileSync('../../static/上海.json', 'utf8');
          const shanghaiJson = JSON.parse(shanghaiJsonStr);
          echarts.registerMap('shanghai', shanghaiJson);

          const option = {
            title: {
              text: '上海地图',
              left: 'center',
              textStyle: {
                fontSize: 16
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: '{b}<br/>{c}人'
            },
            visualMap: {
              min: 10000,
              max: 60000,
              text: ['高', '低'],
              realtime: false,
              calculable: true,
              inRange: {
                color: ['#e0ffff', '#006edd']
              }
            },
            series: [
              {
                name: '人口',
                type: 'map',
                map: 'shanghai',
                roam: true,
                emphasis: {
                  label: {
                    show: true
                  }
                },
                data: [
                  { name: '黄浦区', value: 12345 },
                  { name: '徐汇区', value: 23456 },
                  { name: '长宁区', value: 18900 },
                  { name: '静安区', value: 34567 },
                  { name: '普陀区', value: 28900 },
                  { name: '虹口区', value: 21000 },
                  { name: '杨浦区', value: 19876 },
                  { name: '闵行区', value: 45678 },
                  { name: '宝山区', value: 32100 },
                  { name: '嘉定区', value: 28765 },
                  { name: '浦东新区', value: 56789 },
                  { name: '金山区', value: 15678 },
                  { name: '松江区', value: 23456 },
                  { name: '青浦区', value: 18765 },
                  { name: '奉贤区', value: 12345 },
                  { name: '崇明区', value: 9876 }
                ]
              }
            ]
          };

          chart.setOption(option);
        } catch (err) {
          console.error('读取地图数据失败', err);
        }

        return chart;
      }
    }
  }
});