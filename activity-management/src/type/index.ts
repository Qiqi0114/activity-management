import { AnyAction } from "redux"

//T通用返回体
export interface IBaseReponse<T> {
    //错误码
    code:number
    //报错信息
    message:string
    //接口具体返回数据
    data: T
}
/* 
    用户角色
*/
export enum Role{
    /* 
        用户管理角色
    */
    USERMANAGE = 'userManage',
    /* 
        活动管理角色
    */
    ACTIVITYMANAGE = 'activityMange'
}

export interface IPayload<T extends Partial<AnyAction> >{
    payload:T
}