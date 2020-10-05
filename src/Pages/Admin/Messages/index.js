import React, { useState } from "react";
import { Table, Space, Dropdown, Menu, Modal } from 'antd';
import useSWR from 'swr';
import Axios from "axios";
import { Status } from "./style";
import { DownOutlined, FilePdfOutlined } from '@ant-design/icons';

  const DropMenu = () => {

    return (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer">
            Enviar Recibo
          </a>
        </Menu.Item>
      </Menu>
    )
  };


const columns = [
    {
      title: 'Nome',
      dataIndex: ['users', 'name'],
      key: 'nome',
      render: (text, record) => <a href={`user/${record.user_id}`} title="Ir para usuário">{text}</a>,
    },
    {
      title: 'Quantidade',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Descrição',
      dataIndex: 'description',
      key: 'description',
      render: text => <p style={{maxWidth: '250px'}}>{text}</p>
    },
    {
			title: 'Pago?',
			dataIndex: 'request_finished',
			key: 'request_finished',
			render: text => <a>
				{<Status status={Boolean(text)}/> }
			</a>,
    },
    {
			title: 'Data',
			dataIndex: 'created_at',
			key: 'created_at',
    },
    {
      title: 'Ação',
      key: 'acao',
      render: (text, record) => (
        <Space size="middle">
					<Dropdown overlay={() => DropMenu()}>
						<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
							Mais Opções <DownOutlined />
						</a>
					</Dropdown>
        </Space>
      ),
    },
  ];

const expandable = { expandedRowRender: record => {
    return (
      <a href={Axios.defaults.baseURL + "media/" + record.receipt_location}> 
        <FilePdfOutlined /> 
        {record.receipt_location}
      </a>
    )
  } 
};

const fetcher = url => {

  const token = localStorage.getItem('jwtToken');

    return Axios.get(url, 
    {headers: { Authorization: token}})
    .then(res => res);
}

const Messages = () => {

    const { data } = useSWR('/requests/all', fetcher);
    return(
        <div className="site-layout-background" style={{ padding: 24 }}>
          {/* <img src={ require('../../../assets/images/mindbear.png')} /> */}
          <h1>Listagem de Pedidos</h1>
          <Table 
            loading={Boolean(!data)} 
            locale={{emptyText: 'Sem dados'}} 
            rowKey={'id'} expandable={data?.receipt_location && expandable}  
            theme=""
            pagination={{pageSize: 5}} 
            columns={columns} 
            dataSource={data?.data}
          />
           

        </div>
    )
}

export default Messages;