import React from "react";
import { Table, Space, Dropdown, Menu } from 'antd';
import useSWR from 'swr';
import Axios from "axios";
import { Status } from "./style";
import { DownOutlined } from '@ant-design/icons';
import { useParams } from "react-router-dom";

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        Ver Mais
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Enviar Recibo
      </a>
    </Menu.Item>
		<Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Ver Recibos
      </a>
    </Menu.Item>
    <Menu.Item danger>Excluir</Menu.Item>
  </Menu>
);

const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'nome',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'CPF',
      dataIndex: 'cpf',
      key: 'cpf',
      render: text => <p>{text.replace()}</p>
    },
    {
			title: 'Finalizou?',
			dataIndex: 'finished_registration',
			key: 'cpf',
			render: text => <a>
				{<Status status={Boolean(text)}/> }
			</a>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
					<Dropdown overlay={menu}>
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
      <img src={Axios.defaults.baseURL + "media/" + record.profile_image}>
          
        
      </img>
    )
  } 
};

const fetcher = url => {

  const token = localStorage.getItem('jwtToken');

    return Axios.get(url, 
    {headers: { Authorization: token}})
    .then(res => res);
}

const Profile = () => {

    const { data } = useSWR('/users', fetcher)

    return(
        <div className="site-layout-background" style={{ padding: 24, minHeight: 350 }}>
          {/* <img src={ require('../../../assets/images/mindbear.png')} /> */}
          <h1>Listagem de Minders</h1>
          <Table 
            loading={Boolean(!data)} 
            locale={{emptyText: 'Sem dados'}} 
            rowKey={'id'} expandable={expandable}  
            theme=""
            pagination={{pageSize: 5}} 
            columns={columns} 
            dataSource={data?.data}
          />
        </div>
    )
}

export default Profile;