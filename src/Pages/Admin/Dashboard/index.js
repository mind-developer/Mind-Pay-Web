import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import useSWR from "swr";
import { AuthContext } from '../../../providers/auth';
import Axios from 'axios';
import { Col, Row, Spin, Avatar } from 'antd';
import { VictoryChart, VictoryLine, VictoryScatter } from "victory";
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

  const [pagamentos, setPagamentos] = useState(null)
  const [count, setCount] = useState(0)

  const [minder, setMinder] = useState(null)

  const { data: users } = useSWR('/users', fetcher)

  const [ano, setAno] = useState(new Date().getYear())

  async function loading() {
    Axios.get('/users/payments', {
      headers: {
        Authorization: localStorage.getItem("jwtToken"),

      },
    }).then(res => {
      // console.log(res.data);

      setPagamentos(res.data)
    }).catch(err => {
      console.log(err);
    })
  }
  async function filterName() {

    if (minder) {
      const resp = await Axios.post('/users/filter', {
        minder: minder,
        ano
      }, {
        headers: {
          Authorization: localStorage.getItem("jwtToken"),

        },
      })
      setPagamentos(resp.data)
    }
  }

  useEffect(() => {
    loading()

  }, []);


  if (!data && !pagamentos) {
    return <Spin indicator={<LoadingOutlined />} />
  }

  return <Container>
    <Row style={{ justifyContent: 'space-between', alignItems: 'center', width: '70%' }}>
      <Col span={24}>
        <h1 style={{ marginTop: 20 }}>
          Gráfico de pagamentos mensais
        </h1>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 0, marginRight: 20 }}>
            Escolha um minder e o ano:
        </h1>
          <select id="minder" style={{ height: 35, width: 130, borderRadius: 10 }} onChange={(e) => setMinder(e?.target?.value)}>
            <option value="0">Todos</option>
            {users?.data?.map((user) =>
              <option value={user?.id}>{user?.name}</option>
            )}

          </select>

          <select id="ano" style={{ height: 35, width: 130, marginLeft: 10, borderRadius: 10 }} onChange={(e) => setAno(e?.target?.value)}>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>

          </select>
          <button
            style={{
              height: 35,
              width: 130,
              marginLeft: 10,
              borderRadius: 10,
              backgroundColor: '#7B2627',
              color: '#fff',
              elevation: 15,
              border: 'none'
            }}
            onClick={filterName}
          >Procurar</button>
        </div>
        {
          pagamentos && (
            <VictoryChart height={250} theme={chartTheme}>
              <VictoryLine
                interpolation={'linear'} data={pagamentos?.amounted?.map((i, index) => { return { x: months[index], y: i } })}
                style={{ data: { stroke: "black" } }}
              />
              <VictoryLine
                interpolation={'linear'} data={pagamentos?.extra?.map((i, index) => { return { x: months[index], y: i } })}
                style={{ data: { stroke: "red" } }}
              />
              <VictoryLine
                interpolation={'linear'} data={pagamentos?.base?.map((i, index) => { return { x: months[index], y: i } })}
                style={{ data: { stroke: "#00008b" } }}
              />
            </VictoryChart>
          ) 
        }
      </Col>

      <div style={{ textAlign: "left" }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div
            style={{ width: 15, height: 15, backgroundColor: 'red', borderRadius: 16, marginBottom: 5 }}
          >
          </div>
          <h3 style={{ marginLeft: 10 }}>Linha Vermelha para hora extra</h3><br />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div
            style={{ width: 15, height: 15, backgroundColor: 'black', borderRadius: 16, marginBottom: 5 }}
          ></div>
          <h3 style={{ marginLeft: 10 }}>Linha Preta para salário total</h3><br />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div
            style={{ width: 15, height: 15, backgroundColor: '#00008b', borderRadius: 16, marginBottom: 5 }}
          ></div>
          <h3 style={{ marginLeft: 10 }}>Linha Azul para salário base</h3><br />
        </div>
      </div>

      <Col span={24} style={{ marginBottom: 50 }}>
        <h1>
          já somos {data?.data.length} Minders
        </h1>
        {data?.data.map(item => (
          <Avatar alt={item.name} size={50} style={{ objectFit: 'cover' }} src={Axios.defaults.baseURL + "media/" + item.profile_image}>{item.name[0]}</Avatar>
        ))}
      </Col>
    </Row>
  </Container>;
}

export default Dashboard;
