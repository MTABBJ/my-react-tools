import { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { getOption } from './option';
import { newDocx } from './newDocx';

const Component = () => {
  const [source, setSource] = useState<any>(null);

  useEffect(() => {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];
    for (let i = 0; i < 100; i++) {
      xAxisData.push('A' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
    setSource({ xAxisData, data1, data2 })
  }, [])

  return (
    <>
      <Card
        title="word导出-Echarts图片"
        extra={<Button type="primary" onClick={() => newDocx(source)}>导出</Button>}
      >
        {source && <ReactEcharts
          option={getOption(source, true)}
          notMerge={true}
          style={{ height: '32rem', width: '100%' }}
        />}
      </Card>
    </>
  );
};

export default Component;
