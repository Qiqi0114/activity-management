import { Button, Card, Form, Input } from "antd"
import "./login.scss"
import { ILoginParams } from "./login.type";
import api from "../../api";
import {useDispatch,useSelector} from "dva"
import {omit} from "lodash"
import { IGlobalState } from "../../model/type";

export default function Login () {
    const dispatch = useDispatch()
    const selector = useSelector<{global:IGlobalState},IGlobalState>(({global})=>global)
    const login = async(values:ILoginParams) =>{
        /* 
            调用登录接口 并传对应参数
        */
        const data = await api.login(values)
        /* 
            调用完接口后，拿到token和角色
            token要全局封装到axios
            使用角色过滤对应菜单
            最后跳转到活动页面
         */
            dispatch({
                type:'type/setUserInfo',
                /* 
                    所以的dispatch传参都已传一个payload对象
                    参数在对象里面
                */
                payload:{
                    ...omit( values,['checking'])
                }
            })
        /* 登录后调用token获取菜单 */
/*         const menu = await api.getMenu() */
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
                    name="userAccount"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                    >
                    <Input />
                    </Form.Item>
                    <Form.Item
                    label="密码"
                    name="passWord"
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