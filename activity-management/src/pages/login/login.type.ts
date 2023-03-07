import { Role } from "../../type"

/*  
    登录传的参数
*/
export interface ILoginParams {
    username:string
    password:string
}
/* 
    登录接口返回值
*/
export interface ILoginResponse {
    token:string
    role:Role[]
}
/* 
  token获取菜单传的参数
*/
export interface IMenuParams{
    token:string
}
/* 
  token获取菜单接口返回值
*/
export interface IMenuResponse{
    menu:any[]
}