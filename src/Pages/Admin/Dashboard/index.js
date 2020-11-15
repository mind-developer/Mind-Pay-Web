import React, { useContext } from 'react';
import styled from 'styled-components';
import useSWR from "swr";
import { AuthContext } from '../../../providers/auth';
import Axios from 'axios';
import { Col, Row, Spin, Avatar } from 'antd';
import {VictoryChart, VictoryLine, VictoryScatter} from "victory";
import { LoadingOutlined } from '@ant-design/icons';


const Container = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;

    
    h1{
        font-size: 42px;
        font-family: 'poppins';
    }

`;

const chartTheme = {
  independentAxis: {
    style: {
      tickLabels: {
        fill: 'black',
        angle: 0,
        padding: 10,
        fontSize: 10,
        fontFamily: 'Poppins'
      },
      grid: {
        stroke: 'transparent',
      }
    },
  },
  dependentAxis: {
    style: {
      tickLabels: {
        fill: 'black',
        padding: 5,
        fontSize: 10,
        fontFamily: 'Poppins'
      },
      grid: {
        stroke: 'transparent',
      }
    },
  }, 
};

const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

function Dashboard() {
  
  const { fetcher } = useContext(AuthContext);

  const { data } = useSWR('/users/count', fetcher);
  const { data: payments } = useSWR('/users/payments', fetcher);

  if(!data && !payments){
    return <Spin indicator={<LoadingOutlined/>}/>
  }


  return <Container>
    <Row style={{justifyContent: 'space-between', alignItems: 'center', width: '70%'}}>
      <Col span={24}>
        <h1 style={{marginTop: 20}}>
          Gráfico de pagamentos mensais
        </h1>
         {
           payments?.data && (
            <VictoryChart height={250} theme={chartTheme}>
              <VictoryLine
                interpolation={'linear'} data={payments?.data.map((i, index) => {return {x: months[index], y: i}})}
                style={{ data: { stroke: "black" } }}
              />
              <VictoryScatter data={payments?.data.map((i, index) => {return {x: months[index], y: i}})}
                size={2}
                style={{ data: { fill: "black" } }}
              />
            </VictoryChart>
           )
         }
      </Col>
      <Col span={24} style={{marginBottom: 50}}>
        <h1>
          já somos {data?.data.length} Minders
        </h1>
        {data?.data.map(item => (
          <Avatar alt={item.name} size={50} style={{objectFit: 'cover'}} src={Axios.defaults.baseURL + "media/" + item.profile_image}>{item.name[0]}</Avatar>
        ))}
      </Col>
    </Row>
  </Container>;
}

export default Dashboard;