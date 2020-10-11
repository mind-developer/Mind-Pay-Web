import React, { useContext } from 'react';
import { Container } from "./styles";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import MindPayLogo from "../../assets/images/mainlogo.png";
import Axios from "axios";
import InputMask from 'react-input-mask';
import { AuthContext } from "../../providers/auth";

message.config({maxCount: 3})

function App() {

	const { login } = useContext(AuthContext);

	const onFinish = values => {		
		Axios.post('/admin/login', values)
		.then(res => {
			login(res.data);
		})
		.catch(err => {
			message.error(err.response?.data)
		})
	}

  return (
    <Container>
				<img alt="MindLogo" src={MindPayLogo}></img>
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{ remember: true }}
					onFinish={onFinish}
					>
					<Form.Item
							name="cpf"
							rules={[{ required: true, message: 'Por favor coloque com sua login!' }]}
					>
						<InputMask mask="999.999.999-99" maskPlaceholder="">
							<Input prefix={<UserOutlined className="site-form-item-icon" />} autoComplete="off" placeholder="Login" />
						</InputMask>
					</Form.Item>
					<Form.Item
							name="password"
							rules={[{ required: true, message: 'Por favor coloque com sua senha!' }]}
					>
							<Input
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="Senha"
							/>
					</Form.Item>
					<Form.Item>
							<Button type="primary" htmlType="submit" className="login-form-button">
								Entrar
							</Button>
					</Form.Item>
				</Form>
    </Container>
  );
}

export default App;
