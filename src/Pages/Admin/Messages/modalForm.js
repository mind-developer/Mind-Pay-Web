import { Form, message, Modal, Upload } from "antd";
import Dragger from "antd/lib/upload/Dragger";
import React from "react";
import Axios from "axios";
import { mutate } from "swr";
import { InboxOutlined } from "@ant-design/icons";

const ModalForm = ({ record }) => {
  const { Dragger } = Upload;
  const sendImage = (info) => {
    console.log(info);
    const formData = new FormData();
    formData.append("file", info.file);

    Axios.put("/requests/" + record.id, formData, {
      headers: {
        Authorization: localStorage.getItem("jwtToken"),
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        Modal.destroyAll();
        message.success("Recibo enviado com sucesso!");
        mutate("/requests/all");
      })
      .catch((err) => {
        message.error("Desculpe, ocorreu um erro :(");
      });
  };
  const props = {
    name: "file",
    onChange(info) {
      // sendImage(info);
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Form>
      <Form.Item name="receipt_location">
        <Dragger customRequest={sendImage} {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click aqui para enviar o comprovante
          </p>
          {/* <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p> */}
        </Dragger>
      </Form.Item>
    </Form>
  );
};

export default function (record) {
  return {
    title: "Enviar Recibo",
    content: <ModalForm record={record} />,
    // onOk:
  };
}
