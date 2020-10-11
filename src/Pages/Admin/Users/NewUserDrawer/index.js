import React, { useState } from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  message,
} from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import InputMask from "react-input-mask";
import Axios from "axios";
import { useForm } from "antd/lib/form/Form";
import { mutate } from "swr";

// import { Container } from './styles';

function NewUserDrawer({ IsOpen, setIsOpen }) {
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (values) => {
    setIsLoading(true);

    Axios.post("/register", values)
      .then((res) => {
        form.resetFields();
		message.success("Usuário cadastrado com sucesso!");
		mutate("/users");
		setIsOpen(false);
      })
      .catch((err) => {
        message.error("erro");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Drawer
      title="Cadastrar novo minder"
      width={400}
      onClose={() => setIsOpen((prev) => !prev)}
      visible={IsOpen}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div
          style={{
            textAlign: "right",
          }}
        >
          <Button
            style={{ marginRight: 8 }}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            onClick={() => form.submit()}
            disabled={isLoading}
          >
            {isLoading ? <LoadingOutlined /> : "Enviar"}
          </Button>
        </div>
      }
    >
      <Form
        layout="vertical"
        form={form}
        onFinish={handleFormSubmit}
        hideRequiredMark
      >
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="name"
              label="Nome"
              rules={[{ required: true, message: "Please enter user name" }]}
            >
              <Input placeholder="Nome" autoComplete="off" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="cpf"
              label="CPF"
              rules={[{ required: true, message: "Por favor digite o CPF" }]}
            >
              <InputMask mask="999.999.999-99" maskPlaceholder="">
                <Input placeholder="CPF" autoComplete="off" />
              </InputMask>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: "Por favor digite o email" }]}
            >
              <Input placeholder="Email" autoComplete="off" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
}

export default NewUserDrawer;
