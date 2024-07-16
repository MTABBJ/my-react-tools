import { itemCategory, radomFloat, randomId } from './const';
import { SearchOutlined } from '@ant-design/icons';
import { Col, Input, Row, Card, Tabs, Space } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import './index.less'

interface UrlInfo {
  url: string;
  key: string;
  id: string;
}

interface Urls {
  [key: string]: UrlInfo;
}

const urls: Urls = {
  阿里巴巴: {
    url: 'https://p4psearch.1688.com/page.html?hpageId=old-sem-pc-list&keywords=',
    key: '阿里巴巴',
    id: 'alibaba',
  },
  爱采购: {
    url: 'https://b2b.baidu.com/s?q=',
    key: '爱采购',
    id: 'aicaigou',
  },
  淘宝: {
    url: 'https://s.taobao.com/search?q=',
    key: '淘宝',
    id: 'taobao',
  },
  京东: {
    url: 'https://search.jd.com/search?keyword=',
    key: '京东',
    id: 'jingdong',
  },
};

const Component = () => {
  const [keywords, setKeywords] = useState<any>('');
  const [searchValue, setSearchValue] = useState<any>('');
  const [curUrl, setCurUrl] = useState<any>(urls['阿里巴巴']);
  const [historyData, setHistoryData] = useState<any>([]);

  const onChange = (e: any) => {
    setSearchValue(e);
    setKeywords(e);
    if (curUrl !== '历史价格') {
      let f: any = document.getElementById(curUrl.id);
      f.src = f.src;
    }
  };

  const singleHisDate = (key: any, n: any) => {
    return {
      id: randomId(),
      date: dayjs().subtract(n, 'days').format('YYYY-MM-DD'),
      material: key,
      price: radomFloat(100, 1000),
    };
  };

  useEffect(() => {
    const l = 30;
    const d: any = [];
    for (let n = 0; n < l; n++) {
      d.push(singleHisDate(keywords, n));
    }
    setHistoryData(d);
  }, [keywords]);

  const items: any = () => {
    const d: any = [];
    Object.keys(urls).map((key: any, index) => {
      d.push({
        label: <div style={{ fontSize: '1.2rem', padding: '0 1.2rem' }}>{urls[key].key}</div>,
        key: key,
        children: (
          <iframe
            className="iframeStyle"
            id={urls[key].id}
            src={`${urls[key].url}${keywords}`}
          ></iframe>
        ),
      });
    });

    return d;
  };

  const changeTab = (key: any) => {
    setCurUrl(urls[key] ? urls[key] : key);
  };

  return (
    <>
      {keywords === '' ? (
        <Card title='常用搜索' extra={
          <Input.Search
            placeholder="输入搜索关键词"
            allowClear
            enterButton={<SearchOutlined />}
            size="large"
            onSearch={onChange}
          />
        }>
          <Row
            style={{
              borderTop: '1px solid #eee',
              borderLeft: '1px solid #eee',
            }}
          >
            {itemCategory.map((item: any, index: any) => (
              <>
                {index < 32 ? (
                  <Col
                    span={6}
                    key={item.code}
                    style={{
                      borderRight: '1px solid #eee',
                      borderBottom: '1px solid #eee',
                      padding: '5px 15px',
                    }}
                  >
                    <span
                      style={{ cursor: 'pointer', }}
                      onClick={() => onChange(item.desc)}
                    >
                      {item.desc}
                    </span>
                  </Col>
                ) : null}
              </>
            )
            )}
          </Row>
        </Card>
      )
        : null}

      <Card style={{ width: '100%', height: '70vh', display: `${keywords === '' ? 'none' : 'block'}` }}>
        <Tabs
          onChange={changeTab}
          activeKey={curUrl.key}
          type="card"
          items={items()}
          tabBarGutter={10}
          tabBarExtraContent={
            <Input.Search
              placeholder="输入搜索关键词"
              allowClear
              style={{ width: 600 }}
              enterButton={<SearchOutlined />}
              size="large"
              onSearch={onChange}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          }
        />
      </Card>
    </>
  );
};

export default Component;
