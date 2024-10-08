import * as echarts from 'echarts'

/**
 * @description:通过echarts的实例api生成图表base64
 * @param {option} echarts图表的option配置
 * @return {dataUrl} 图表的base64编码url
 */
const getChartDataUrl = (option: any, width: string = '500px', height: string = '500px') => {
  let container = document.createElement('div')
  container.id = 'container'
  container.style.display = 'none'
  container.style.width = width
  container.style.height = height
  document.body.appendChild(container)
  const instance = echarts.init(container)
  // 绘制图表
  // 刚开始绘制不出来图表的原因如下：
  // 如果有动画效果的话，生成的图片会是在有动画效果出来以前的样子，就是说数据还没渲染上去，因此导出的图片没有数据。
  // https://blog.csdn.net/qq_35239421/article/details/106526147
  instance.setOption(option)
  const dataUrl = instance.getDataURL({ type: 'png' })
  document.body.removeChild(container)
  
  return dataUrl
}

export default getChartDataUrl