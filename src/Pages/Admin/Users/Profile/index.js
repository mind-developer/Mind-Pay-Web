import React from "react";
import { Table, Space, Dropdown, Menu, Avatar } from 'antd';
import useSWR from 'swr';
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Container } from "./style";


const fetcher = url => {

  const token = localStorage.getItem('jwtToken');

    return Axios.get(url, 
    {headers: { Authorization: token}})
    .then(res => res);
}

const User = () => {

    const { id } =  useParams();

    const { data } = useSWR('/users/' + id, fetcher)
  

    return(
        <div className="site-layout-background" style={{ padding: 24, minHeight: 350 }}>
          <Container style={{display: "flex"}}>
            <Avatar size={250} src={Axios.defaults.baseURL + 'media/' + data?.data.profile_image} />
            <div>
              <h1>{data?.data.name}</h1>
            </div>
          </Container>
        </div>
    )
}

export default User;