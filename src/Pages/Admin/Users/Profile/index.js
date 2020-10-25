import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../providers/auth";

import {
  UserOutlined,
  BankOutlined,
  FieldNumberOutlined,
  MailOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import ImgCrop from "antd-img-crop";

import { Form, Input, Button, Upload, message, Avatar, Spin } from "antd";

import Axios from "axios";
import useSWR, { mutate } from "swr";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import InputMask from "react-input-mask";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}


const UserInputs = (props) => {

  const { id = "" } = useParams();
  const { fetcher } = useContext(AuthContext)

  const { data: user } = useSWR(`/user/${id}`, fetcher);

  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [imagePreview, setimagePreview] = useState();

  const handleRemove = () => {
    setFileList([]);
    setimagePreview(undefined);
  };

  const DisplayLoading = (message1, message2, key) => {
    message.loading({ content: message1, key });

    return function () {
      message.success({ content: message2, key });
    };
  };

  const handleFinish = async (values) => {
    const finish = DisplayLoading("Atualizando!", "Atualizado!", "attdados");

    Axios.put("/user/" + id, values, {
      headers: {
        Authorization: localStorage.getItem("jwtToken"),
      },
    }).then((res) => {
      finish();
    });
  };

  const handleUpdate = (info) => {
    const finish = DisplayLoading(
      "Atualizando!",
      "Foto de perfil atualizada com sucesso!",
      "attimagem"
    );

    const formData = new FormData();
    formData.append("file", info.file);

    Axios.patch("/user/profile/" + id, formData, {
      headers: {
        Authorization: localStorage.getItem("jwtToken"),
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      finish();
      getBase64(info.file, (imageUrl) => {
        setimagePreview(imageUrl);
      });
      mutate(`/user/${id}`);
    });
  };

  if (!user) {
    return <Spin indicator={<LoadingOutlined />} />;
  }

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 350 }}
    >
      <Form
        name="normal_login"
        form={form}
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={handleFinish}
      >
        <Form.Item noStyle>
          <Form.Item>
            <ImgCrop>
              <Upload.Dragger
                onRemove={handleRemove}
                customRequest={handleUpdate}
                fileList={fileList}
                multiple={false}
              >
                <Avatar
                  style={{
                    fontSize: 50,
                    margin: "1.5rem 0",
                  }}
                  size={200}
                  src={
                    imagePreview
                      ? imagePreview
                      : user?.data.profile_image &&
                        Axios.defaults.baseURL + "media/" + user?.data.profile_image
                  }
                  alt="profile_image"
                >
                  {user?.data.name[0]}
                </Avatar>
                <p className="ant-upload-hint">
                  Clique ou arraste para adicionar uma foto de perfil
                </p>
              </Upload.Dragger>
            </ImgCrop>
          </Form.Item>
        </Form.Item>

        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item name="name">
            <Input
              placeholder="Nome"
              defaultValue={user?.data.name}
              prefix={<UserOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
        </Form.Item>

          <Form.Item name="cpf">
            <Input
              placeholder="CPF"
              defaultValue={user?.data.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}
              prefix={<UserOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
        

        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
            name="agency_number"
            style={{ display: "inline-block", width: "calc(50%)" }}
          >
            <Input
              placeholder="Numero da Agencia"
              defaultValue={user?.data.agency_number}
              prefix={<FieldNumberOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <Form.Item
            name="bank"
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              marginLeft: "8px",
            }}
          >
            <Input
              placeholder="Banco"
              defaultValue={user?.data.bank}
              prefix={<BankOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
        </Form.Item>

        <Form.Item name="account" type="text">
            <InputMask mask="999999-9" maskPlacholder={null} defaultValue={user?.data.account}>
              {props => (
                <Input
                  {...props}
                  placeholder="Numero da conta"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
              )}
            </InputMask>
        </Form.Item>

        <Form.Item name="email" type="email">
          <Input
            placeholder="Email"
            defaultValue={user?.data.email}
            prefix={<MailOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item>
          <Button
            style={{ marginRight: "10px" }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Atualizar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserInputs;
