import { Button, Card, Form, Input } from "antd"
import "./login.scss"
import { ILoginParams } from "./login.type";
export default function Login () {
    const login = (values:ILoginParams) =>{
        console.log(values);
    }
    return (
        <div id="login">
            <Card  style={{ width: 300 }}>
                <h2 className="title">七七活动管理</h2>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={login}
                >
                    <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                    >
                    <Input />
                    </Form.Item>
                    <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入密码!' }]}
                    >
                    <Input.Password />
                    </Form.Item>
                    <div id="login-btn">
                        <Button type="primary" htmlType="submit">登录</Button>
                    </div>
                </Form>
            </Card>

        </div>
    )
}