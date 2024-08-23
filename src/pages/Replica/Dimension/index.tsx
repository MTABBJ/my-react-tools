import React, { useState, useEffect, useRef } from 'react';
import { Space, Button, Card, Typography, Layout } from 'antd';
import './index.less'
import login_bg from '@/assets/images/login_bg.webp'
const drawColor = '0, 255, 0';

const { Paragraph } = Typography;
const { Header, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  backgroundColor: '#fff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#fff',
};

const siderStyle: React.CSSProperties = {
  color: '#fff',
  backgroundColor: '#fff',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(100% - 8px)',
  maxWidth: 'calc(100% - 8px)',
};

const throttle = (cb: { (e: any): void; apply?: any; }, wait = 3000) => {
  let previous = 0;
  return (...args: any) => {
    const now = +new Date();
    if (now - previous > wait) {
      previous = now;
      cb.apply(this, args);
    }
  }
}

const Page: React.FC = (props) => {
  let timer: any;
  const src = login_bg;
  const width = 1000; const height = 1000;

  const baseCanvas = useRef<HTMLCanvasElement | null>(null)
  const topCanvas = useRef<HTMLCanvasElement | null>(null)
  const imgInfo = useRef<any>(null)
  const scale = useRef<any>(null)
  const markArr = useRef<any>([])

  const [isDrawing, setIsDrawing] = useState(false)
  const [points, setPoints] = useState<any>([])

  // 清除标注
  const handleClear = () => {
    setPoints([])
    markArr.current = []
    const ctx = topCanvas?.current?.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, width, height); // 清除底图
    }
  }

  function equalScale(e: any, flag: boolean = true) {
    return e
  }

  // 单击绘制坐标点及连线
  const clickFn = (e: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      let x = e.offsetX, y = e.offsetY;
      const index = points.findIndex((item: any[]) => {
        Math.abs(equalScale(item[0], false) - x) < 10 && Math.abs(equalScale(item[1], false) - y) < 10
      });
      if (index > 0) { console.error('请连接起点'); return; }
      if (index === 0) { x = equalScale(points[0][0], false); y = equalScale(points[0][1], false); }
      const ctx = topCanvas?.current?.getContext("2d");
      if (ctx) {
        ctx.fillStyle = `rgba(${drawColor}, 1)`;
        ctx.fillRect(x - 3, y - 3, 6, 6);
        let prevPoint;
        if (prevPoint = points[points.length - 1]) {
          ctx.strokeStyle = `rgba(${drawColor}, 1)`;
          ctx.beginPath();
          ctx.moveTo(equalScale(prevPoint[0], false), equalScale(prevPoint[1], false));
          ctx.lineTo(x, y);
          ctx.stroke();
          ctx.closePath();
        }
      }
      setPoints([...points, [equalScale(x), equalScale(y)]])
    }, 200);
  }

  // 绘制标注
  const draw = () => {
    const ctx = topCanvas?.current?.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, width, height);
      markArr.current.forEach((mark: { points: any; }) => { // 遍历标注数组，绘制所有的标注区域
        const { points } = mark;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${drawColor}, 1)`;
        points.forEach((item: any[], index: number) => {
          const x = equalScale(item[0], false), y = equalScale(item[1], false);
          ctx.fillRect(x - 3, y - 3, 6, 6);
          index === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        });
        ctx.stroke();
        ctx.fillStyle = `rgba(${drawColor}, .5)`;
        ctx.fill();
        ctx.closePath();
      });
    }
  }

  // 双击保存当前标注
  const dbClickFn = () => {
    clearTimeout(timer);
    if (points.length < 3) {
      setIsDrawing(false)
      setPoints([])
      return; // 构不成平面则不保存
    }
    // 默认连接起点
    if (JSON.stringify(points[0]) !== JSON.stringify(points[points.length - 1])) points.push(points[0]);
    markArr.current.push({
      key: new Date().getTime(),
      points
    }); // 把临时点位数组存起来
    draw(); // 绘制标注区域
    setIsDrawing(false); // 退出新增状态
    setPoints([])
  }

  let current: any = null;
  const moveFn = throttle((e: any) => {
    const ctx = topCanvas?.current;
    if (ctx) {
      ctx.style.cursor = 'default';
      const x = e.offsetX, y = e.offsetY;
      if (current) {
        current[0] = equalScale(x);
        current[1] = equalScale(y);
        draw();
      }
    }
  }, 10);
  const mousedownFn = (e: any) => {
    const x = equalScale(e.offsetX), y = equalScale(e.offsetY);
    for (let i = 0; i < markArr.current.length; i++) {
      const { points } = markArr.current[i];
      current = points.find((item: number[]) => Math.abs(item[0] - x) < 20 && Math.abs(item[1] - y) < 20);
      if (current) break;
    }
  }
  const mouseupFn = () => {
    current = null;
  }

  const init = () => {
    // 绘制底图
    const ctx = baseCanvas?.current?.getContext("2d");
    if (ctx) {
      //图片加载完后，将其绘制在canvas中
      const img = new Image();
      img.src = src;
      img.onload = function () {
        ctx.clearRect(0, 0, width, height); // 清除底图
        let _width = img.width, _height = img.height;
        imgInfo.current = {
          width: _width,
          height: _height
        } // 存储图片宽高 防止计算导致的误差
        if (img.width > width || img.height > height) {
          scale.current = img.width > img.height ? img.width / width : img.height / height;
          _width = img.width / scale.current;
          _height = img.height / scale.current;
        } // 等比例缩放
        // console.log('_width', _width, '_height', _height);
        if (baseCanvas?.current && topCanvas?.current) {
          baseCanvas.current.width = topCanvas.current.width = _width;
          baseCanvas.current.height = topCanvas.current.height = _height;
        }
        ctx.drawImage(img, 0, 0, _width, _height);
        handleClear(); // 清除标注
      }
      img.onerror = () => {
        console.log('图片加载失败');
      }
    }
  }

  useEffect(() => {
    init()
  }, []);

  return (
    <Card>
      <Layout style={layoutStyle}>
        <Layout>
          <Header style={headerStyle}>
            <Space>
              <Button type='primary'
                disabled={isDrawing}
                onClick={() => { setIsDrawing(true); }}
              >
                点击新建/编辑区域，双击保存
              </Button>
              <Button type='default' danger onClick={() => { handleClear() }}>
                清除
              </Button>
            </Space>
          </Header>
          <Content style={contentStyle}>
            <div className='canvas-wrapper'>
              <canvas ref={baseCanvas} id="canvas-1">Canvas not supported</canvas>
              <canvas ref={topCanvas} id="canvas-2"
                onClick={(e) => { isDrawing && clickFn(e.nativeEvent); }}
                onDoubleClick={(e) => { isDrawing && dbClickFn() }}
                onMouseMove={(e) => { isDrawing && moveFn(e.nativeEvent) }}
                onMouseDown={(e) => { isDrawing && mousedownFn(e.nativeEvent) }}
                onMouseUp={(e) => { isDrawing && mouseupFn() }}
              >Canvas not supported</canvas>
            </div>
          </Content>
        </Layout>
        <Sider width="25%" style={siderStyle}>
          <div className='canvas-info'>
            <Paragraph>
              {markArr.current.map((i: any) => (<pre>{JSON.stringify(i)}</pre>))}
            </Paragraph>
          </div>
        </Sider>
      </Layout>
    </Card>

  );
};

export default Page;
