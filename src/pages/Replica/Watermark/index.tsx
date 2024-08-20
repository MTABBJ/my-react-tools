import React, { useEffect, useRef } from "react";
import { Divider, Typography, Card } from 'antd';
import { log } from "console";
const { Title, Paragraph, Text, Link } = Typography;

// 获取当前时间
function curentTime() {
  let newTime = new Date();
  // 获取年
  let newYarn = newTime.getFullYear()
  // 获取月
  let newMonth = (newTime.getMonth() + 1) > 9 ? (newTime.getMonth() + 1) : "0" + (newTime.getMonth() + 1);
  // 获取时间
  let newDay = newTime.getDate() > 9 ? newTime.getDate() : "0" + newTime.getDate();
  return newYarn + '-' + newMonth + ' -' + newDay
}

function App() {
  const canvasRef = useRef(null);
  const bodyRef = useRef(null);

  // 画水印
  function waterMark() {
    // 获取dom节点
    const canvasDom = canvasRef.current;
    // 设置canvas的大小
    canvasDom.width = 300
    canvasDom.height = 200
    // 获取canvs上下文
    const ctx = canvasDom.getContext('2d')
    //设置文字的大小 以及字体样式
    ctx.font = "30px Verdana"
    // 设置透明度
    ctx.fillStyle = 'rgba(0,0,0,.3)'
    // 设置倾斜度
    ctx.rotate(0.2)
    // 填充文字以及位置
    ctx.fillText(curentTime(), 30, 30)

    // 将它转化为base64
    const img = canvasDom.toDataURL('image/png')
    let body = bodyRef.current
    body.setAttribute('style', `background-image:url("${img}")`)
  }


  useEffect(() => {
    waterMark()
  }, []);


  useEffect(() => {
    // 用MutationObserver监听bodyRef是否被修改
    const observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        console.log(mutation.target); // 输出发生变化的节点
        mutation.target === bodyRef.current && waterMark()
      }
    });
    
    // 开始监测  
    observer.observe(bodyRef.current, { attributes: true });
    
    // 组件销毁时停止监测
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      <Card ref={bodyRef} >
        <Typography>
          <Title>写点内容测试水印</Title>
          <Paragraph>
            In the process of internal desktop applications development, many different design specs and
            implementations would be involved, which might cause designers and developers difficulties and
            duplication and reduce the efficiency of development.
          </Paragraph>

          <Title>写点内容测试水印</Title>
          <Paragraph>
            After massive project practice and summaries, Ant Design, a design language for background
            applications, is refined by Ant UED Team, which aims to{' '}
            <Text strong>
              uniform the user interface specs for internal background projects, lower the unnecessary
              cost of design differences and implementation and liberate the resources of design and
              front-end development
            </Text>
            .
          </Paragraph>

          <Title>写点内容测试水印</Title>
          <Paragraph>
            We supply a series of design principles, practical patterns and high quality design resources
            (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product
            prototypes beautifully and efficiently.
          </Paragraph>
        </Typography>
      </Card>
    </>

  );
}

export default App;

