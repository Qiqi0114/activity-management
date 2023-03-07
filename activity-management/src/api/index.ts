import { ILoginParams, ILoginResponse, IMenuParams, IMenuResponse, } from '../pages/login/login.type'
import request from '../utils/request'

export default{
    //登录
    login(data:ILoginParams){
        request.post<ILoginParams,ILoginResponse>('/login/login',data)
    },
    //token获取菜单
    getMenu(data:IMenuParams){
        request.get<IMenuParams,IMenuResponse>('/menuServer/menu/getLonginMenu',data)
    }
}