import React from "react";
import UserInterface from "./Users/";
import MessagesInterface from "./Messages/";
import UserProfile from "./Users/Profile";
import Dashboard from "./Dashboard";

import {
    UserOutlined, 
    PieChartOutlined,
    MessageOutlined,
    TeamOutlined
} from '@ant-design/icons';


 const Routes = [
    {
        path: '/user/:id',
        component: () => <UserProfile/>,
        onlyRoute: true,
    },
    {
        name: 'Perfil',
        path: '/user/',
        component: () => <UserProfile/>,
        icon: <UserOutlined />
    },
    {
        name: 'Usuários',
        path: '/users',
        component: () => <UserInterface/>,
        icon: <TeamOutlined/>
    },
    {
        name: 'Pagamentos',
        path: '/requests',
        component: () => <MessagesInterface/>,
        icon: <MessageOutlined />
    },
    {
        name: 'Dashboards',
        path: '/',
        component: () => <Dashboard/>,
        icon: <PieChartOutlined />
    }
]

const Map = {}

Routes.forEach((route, index) => {
    Map[route.path] = index.toString(); // maps routes in constant time
})

export default Routes;
export const RouteMap = Map;