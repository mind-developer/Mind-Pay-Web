import React, { useContext } from "react";
import { Table, Space, Modal, message, Button } from "antd";
import useSWR, { mutate } from "swr";
import Axios from "axios";
import { Status } from "./style";
import { FilePdfOutlined } from "@ant-design/icons";
import { AuthContext } from "../../../providers/auth";
import modalForm from "./modalForm";
import dayjs from "dayjs";

var MoneyFormatter = new Intl.NumberFormat("pt-BR", {
  maximumSignificantDigits: 3,
});

const columns = [
  {
    title: "Nome",
    dataIndex: ["users", "name"],
    key: "nome",
    render: (text, record) => (
      <a href={`user/${record.user_id}`} title="Ir para usuário">
        {text}
      </a>
    ),
  },
  {
    title: "Valor a pagar",
    dataIndex: "amount",
    key: "amount",
    render: (text) => <span>R$ {MoneyFormatter.format(text)}</span>,
  },
  {
    title: "Valor de hora extra",
    dataIndex: "extra_hour",
    key: "extra_hour",
    render: (text) => <span>R$ {MoneyFormatter.format(text)}</span>,
  },
  {
    title: "Descrição",
    dataIndex: "description",
    key: "description",
    render: (text) => <span style={{ maxWidth: "250px" }}>{text}</span>,
  },
  {
    title: "Pago?",
    dataIndex: "request_finished",
    key: "request_finished",
    render: (text) => <span>{<Status status={Boolean(text)} />}</span>,
    filters: [
      {
        text: "Pago",
        value: 1,
      },
      {
        text: "Em aberto",
        value: null,
      },
    ],
    onFilter: (value, record) => record.request_finished === value,
  },
  {
    title: "Data",
    dataIndex: "created_at",
    key: "created_at",
    sorter: (a, b) => dayjs(a.created_at).unix() - dayjs(b.created_at).unix(),
  },
  {
    title: "Ação",
    key: "acao",
    render: (text, record) => (
      <Space size="middle">
        {!record.request_finished && (
          <Button
            type="danger"
            className="ant-dropdown-link"
            onClick={(e) => Modal.confirm((() => modalForm(record))())}
          >
            Pagar
          </Button>
        )}
      </Space>
    ),
  },
  {
    title: "Excluir",
    key: "excluir",
    render: (text, record) => (
      <Space size="middle">
        {!record.request_finished && (
          <Button
            type="danger"
            className="ant-dropdown-link"
            onClick={() => {
              destroyRequest(record.id);
            }}
          >
            Excluir
          </Button>
        )}
      </Space>
    ),
  },
];

const destroyRequest = async (id) => {
  Axios.delete(`request/destroy/${id}`, {
    headers: {
      Authorization: localStorage.getItem("jwtToken"),
    },
  })
    .then((res) => {
      message.success("Requisição apagada com sucesso!");
      mutate("/requests/all");

      // setTimeout(() => {
      //   window.location.reload();
      // }, 500);
    })
    .catch((err) => {
      message.error("Desculpe, ocorreu um erro :(");
    });
};

const expandable = {
  expandedRowRender: (record) => {
    if (!record.receipt_location) {
      return false;
    }

    return (
      <a
        target="_blank"
        href={Axios.defaults.baseURL + "media/" + record.receipt_location}
      >
        <FilePdfOutlined />
        {record.receipt_location}
      </a>
    );
  },
};

const Messages = () => {
  const { fetcher } = useContext(AuthContext);
  const { data } = useSWR("/requests/all", fetcher);

  return (
    <div className="site-layout-background" style={{ padding: 24 }}>
      <h1>Listagem de Pedidos</h1>
      <Table
        loading={Boolean(!data)}
        locale={{ emptyText: "Sem dados" }}
        rowKey={"id"}
        expandable={expandable}
        theme=""
        pagination={{ pageSize: 5 }}
        columns={columns}
        dataSource={data?.data}
      />
    </div>
  );
};

export default Messages;
