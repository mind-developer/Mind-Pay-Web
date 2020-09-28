import React from 'react';
import { Layout, Menu } from "antd";
  
import "./index.css";
import {
    UserOutlined, 
    PieChartOutlined,
    MessageOutlined,
    TeamOutlined
} from '@ant-design/icons';

import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

import routes from "./routes";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

const Admin = () => {
    return (
        <BrowserRouter>
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible style={{background: '#101010'}}>
          {/* <div className="logo"> */}
            {/* <img src={Logo} style={{maxWidth: '100%', padding: '2rem'}}/> */}
          {/* </div> */}
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/">
                    Dashboard
                </Link>
            </Menu.Item>
            <Menu.Item key="sub1" icon={<UserOutlined />} title="Users">
                <Link to="/user">
                    Users
                </Link>
            </Menu.Item>
            <Menu.Item key="sub2" icon={<MessageOutlined />} title="Mensagens">
                <Link to="/requests">
                    Mensagens
                </Link>
            </Menu.Item>
            <SubMenu key="sub3" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{backgroundImage: `url('/toppng2.png')`, backgroundSize: '200px 200px'}}>
            <Content style={{ margin: '16px', padding: '0 16px'}}>
                <Switch>
                    {
                        routes.map(({path, component}, index) => {
                            return (
                                <Route key={index} path={path} component={component} />                       
                            )
                        })
                    }
                </Switch>
            </Content>
        </Layout>
      </Layout>
      </BrowserRouter>
    )
}

export default Admin;