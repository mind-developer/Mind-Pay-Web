import React from "react";
import UserInterface from "./Users/";
import MessagesInterface from "./Messages/";
import UserProfile from "./Users/Profile";
import Dashboard from "./Dashboard";

export default [
    {
        path: '/user/:id',
        component: () => <UserProfile/>
    },
    {
        path: '/user',
        component: () => <UserInterface/>
    },
    {
        path: '/requests',
        component: () => <MessagesInterface/>
    },
    {
        path: '/',
        component: () => <Dashboard/>
    }
]