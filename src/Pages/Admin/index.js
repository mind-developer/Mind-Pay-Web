import React from 'react';
import { Layout, Menu } from "antd";
  
import "./index.css";

import {
    BrowserRouter,
    Switch,
    Route,
    Link, useLocation
} from "react-router-dom";

import Routes, {RouteMap} from "./routes";

const { Content, Sider } = Layout;

const Admin = () => {

    const { pathname } = useLocation();


    return (
        <BrowserRouter>
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible style={{background: '#101010'}}>
          {/* <div className="logo"> */}
            {/* <img src={Logo} style={{maxWidth: '100%', padding: '2rem'}}/> */}
          {/* </div> */}
          <Menu 
            theme="dark"
             mode="inline"
             defaultSelectedKeys={[RouteMap[pathname]]}
          >
                {Routes.map((route, index) => {
                  if (!route.onlyRoute) {
                    return (
                      <Menu.Item icon={route.icon} key={index}>
                        <Link to={route.path}>{route.name}</Link>
                      </Menu.Item>
                    );
                  }
                  
                  return null;
                  
                })}
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{backgroundImage: `url('/toppng2.png')`, backgroundSize: '200px 200px'}}>
            <Content style={{ margin: '16px', padding: '0 16px'}}>
                <Switch>
                    {
                        Routes.map(({path, component}, index) => {
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