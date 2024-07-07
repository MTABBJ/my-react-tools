import { SettingContext } from '@/contexts/Setting';
import { GithubFilled } from '@ant-design/icons';
import { Layout, Typography } from 'antd';
import { useContext } from 'react';

const Footer = () => {
  const {
    settings: { showFooter }
  } = useContext(SettingContext);

  const { Text, Link } = Typography;

  if (!showFooter) {
    return null;
  }

  return (
    <Layout.Footer style={{ textAlign: 'center', paddingBottom: 4 }}>
      <Link href="https://github.com/MTABBJ" target="_blank" style={{ color: 'inherit' }}>
        <GithubFilled /><Text type="secondary"> Moto </Text>
      </Link>
    </Layout.Footer>
  );
};

export default Footer;
