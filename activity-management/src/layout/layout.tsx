import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import "./layout.css"
import { meuns } from './layout.config';
import { Route, useHistory } from 'dva/router';
import BannerManage from '../pages/bannerManage/bannerManage';
import ActivityManage from '../pages/activityManage/activityManage';
import AdminUserAdmin from '../pages/adminUserAdmin/adminUserAdmin';
import RegisterUserCheck from '../pages/registerUserCheck/registerUserCheck';
import {MenuInfo} from 'rc-menu/lib/interface'
const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const history = useHistory();
  const linkPage = ({key} :MenuInfo) =>{
    history.push(key)
  }
  return (
    <Layout id = "layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
            七七活动管理
        </div>
        <Menu
          theme="dark"
          mode="inline"
          items={meuns}
          onClick = {linkPage}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Route path={"/bannerManage"}>
            <BannerManage></BannerManage>
          </Route>
          <Route path={"/activityManage"}>
            <ActivityManage></ActivityManage>
          </Route>
          <Route path={"/userManage/registerUserCheck"}>
            <RegisterUserCheck></RegisterUserCheck>
          </Route>
          <Route path={"/userManage/adminUserAdmin"}>
            <AdminUserAdmin></AdminUserAdmin>
          </Route>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;