/* eslint-disable no-useless-concat */
/* eslint-disable no-unused-expressions */
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import useSWR from "swr";
import { AuthContext } from '../../../providers/auth';
import Axios from 'axios';
import { Col, Row, Spin, Avatar, Table } from 'antd';
import { VictoryChart, VictoryLine } from "victory";
import { LoadingOutlined } from '@ant-design/icons';
import { FormatValor } from '../../../utils/format'


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

const months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

function Dashboard() {

  const { fetcher } = useContext(AuthContext);

  const { data } = useSWR('/users/count', fetcher);

  const [pagamentos, setPagamentos] = useState(null)

  const [minder, setMinder] = useState(null)

  const { data: users } = useSWR('/users', fetcher)

  const [ano, setAno] = useState(new Date().getFullYear())

  const [valores, setValores] = useState([])

  const columns = [
    {
      title: 'Meses',
      dataIndex: 'mes',
      key: 'mes',
    },
    {
      title: 'Salario base',
      dataIndex: 'base',
      key: 'base',
    },
    {
      title: 'Hora extra',
      dataIndex: 'extra',
      key: 'extra',
    },
    {
      title: 'Total',
      key: 'total',
      dataIndex: 'total',
    },
  ];

  useEffect(() => {

    if (pagamentos !== []) {
      const aux = []
      pagamentos?.amounted?.forEach((total, index) => {
        aux.push({
          base: FormatValor(pagamentos.base[index]),
          mes: months[index],
          extra: FormatValor(pagamentos.extra[index]),
          total: FormatValor(total)
        });
        return aux;
      })
      setValores(aux);
    }

  }, [pagamentos])

  async function loading() {
    Axios.get('/users/payments', {
      headers: {
        Authorization: localStorage.getItem("jwtToken"),

      },
    }).then(res => {

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
          <select id="minder" style={{ height: 35, width: 130, borderRadius: 5, borderColor: '#ccc' }} onChange={(e) => setMinder(e?.target?.value)}>
            <option value="0" style={{ marginLeft: 10 }}>
              Todos
            </option>
            {users?.data?.map((user) =>
              <option value={user?.id}>{user?.name}</option>
            )}

          </select>

          <select id="ano" style={{ height: 35, width: 130, marginLeft: 10, borderRadius: 5, borderColor: '#ccc' }} onChange={(e) => setAno(e?.target?.value)}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </select>
          <button
            style={{
              height: 35,
              width: 130,
              marginLeft: 10,
              borderRadius: 5,
              backgroundColor: '#7B2627',
              color: '#fff',
              elevation: 15,
              border: 'none'
            }}
            onClick={filterName}
          >Procurar</button>
        </div>
        {
          pagamentos != [] ? (
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
          ) : <p>Não Há dados</p>
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
        <div style={{ width: '100%', marginTop: 25 }}>
          <Table columns={columns} dataSource={valores} pagination={{ pageSize: 12 }} />
        </div>
        <h1>
          Já somos {data?.data?.length} Minders
        </h1>
        {data?.data.map(item => (
          <Avatar alt={item.name} size={50} style={{ objectFit: 'cover' }} src={Axios.defaults.baseURL + "media/" + item.profile_image}>{item.name[0]}</Avatar>
        ))}
      </Col>
    </Row>

  </Container>;
}

export default Dashboard;
