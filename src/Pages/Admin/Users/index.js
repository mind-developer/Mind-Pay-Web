import React, { useState } from "react";
import { Table, Space, Dropdown, Menu, Button, Modal, message } from "antd";
import useSWR, { mutate } from "swr";
import Axios from "axios";
import { Status } from "./style";
import {
  DownOutlined,
  PlusOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import NewUser from "./NewUserDrawer/";
import Avatar from "antd/lib/avatar/avatar";

function confirm({ name, id }) {
  Modal.confirm({
    title: "Tem certeza que deseja excluir " + name + "?",
    icon: <ExclamationCircleOutlined />,
    content: "Essa ação é irreversivel",
    okText: "Sim",
    cancelText: "Cancelar",
    onOk: () => {
      const token = localStorage.getItem("jwtToken");
      Axios.delete("/user/" + id, { headers: { Authorization: token } }).then(
        (res) => {
          message.success("Usuário excluido com sucesso");
          mutate("/users");
        }
      );
    },
  });
}

const menu = (props) => {
  return (
    <Menu>
      <Menu.Item>
        <a href={"/user/" + props.id}>Ver Mais</a>
      </Menu.Item>
      <Menu.Item>Ver Recibos</Menu.Item>
      <Menu.Item
        danger
        onClick={() => confirm({ name: props.name, id: props.id })}
      >
        Excluir
      </Menu.Item>
    </Menu>
  );
};

const columns = [
  {
    title: "Avatar",
    dataIndex: "profile_image",
    key: "profile_image",
    render: (text, record) => (
      <Avatar src={Axios.defaults.baseURL + "media/" + text}>
        {record?.name[0]}
      </Avatar>
    ),
  },
  {
    title: "Nome",
    dataIndex: "name",
    key: "nome",
    render: (text, record) => <a href={"/user/" + record.id}>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "CPF",
    dataIndex: "cpf",
    key: "cpf",
    render: (text) => (
      <span>{text.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</span>
    ),
  },
  {
    title: "Data de Nascimento",
    dataIndex: "data_de_nascimento",
    key: "cpf",
    render: (text) => <span>{new Date(text).toLocaleDateString("pt-br")}</span>,
  },
  {
    title: "Finalizou?",
    dataIndex: "finished_registration",
    key: "cpf",
    render: (text) => <span>{<Status status={Boolean(text)} />}</span>,
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Dropdown overlay={() => menu(record)}>
          <Button
            type="dashed"
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          >
            Mais Opções <DownOutlined />
          </Button>
        </Dropdown>
      </Space>
    ),
  },
];

const fetcher = (url) => {
  const token = localStorage.getItem("jwtToken");

  return Axios.get(url, { headers: { Authorization: token } }).then(
    (res) => res
  );
};

const Profile = () => {
  const { data } = useSWR("/users", fetcher);
  const [Drawer, ToggleDrawer] = useState(false);

  return (
    <div className="site-layout-background" style={{ padding: 24 }}>
      <NewUser IsOpen={Drawer} setIsOpen={ToggleDrawer} />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button type="primary" onClick={() => ToggleDrawer((prev) => !prev)}>
          <PlusOutlined /> Criar novo minder
        </Button>
      </div>
      <h1>Listagem de Minders</h1>
      <Table
        loading={Boolean(!data)}
        locale={{ emptyText: "Sem dados" }}
        rowKey={"id"}
        theme=""
        pagination={{ pageSize: 5 }}
        columns={columns}
        dataSource={data?.data}
      />
    </div>
  );
};

export default Profile;
