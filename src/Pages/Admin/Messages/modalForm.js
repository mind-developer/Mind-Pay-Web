import { Form, message, Modal } from "antd";
import Dragger from "antd/lib/upload/Dragger";
import React from "react";
import { InboxOutlined } from '@ant-design/icons';
import Axios from "axios";
import { mutate } from "swr";

const ModalForm = ({record}) => {

    const sendImage = info => {

        const formData = new FormData();
        formData.append("file", info.file);

        Axios.put('/requests/' + record.id, formData, {
            headers: {
                Authorization: localStorage.getItem("jwtToken"),
                "Content-Type": "multipart/form-data",
            },
        }).then(res => {
            Modal.destroyAll();
            message.success('Recibo enviado com sucesso!');
            mutate('/requests/all')
        }).catch(err => {
            message.error('Desculpe, ocorreu um erro :(');
        })
        
    };

    return (
        <Form>
        <Form.Item name="receipt_location">
          <Dragger
              accept="png"
              name="avatar"
              customRequest={sendImage}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Clique ou arraste para subir o recibo
            </p>
          </Dragger>
        </Form.Item>
      </Form>
    )
}

export default function(record){
   
    return {
        title: "Enviar Recibo",
        content: <ModalForm record={record}/>,
        // onOk:
    };
}
