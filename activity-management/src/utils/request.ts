import { message } from 'antd'
import axios, { AxiosResponse } from 'axios'
import { IBaseReponse } from '../type'
/* 
    AxiosResponse接受泛型
    第一个T是业务层的请求体类型，也就是接口的定义类型
    所以我们用统一的返回结构
    IBaseReponse 又接受一个类型 这个类型泛指具体业务
*/
axios.interceptors.response.use((response:AxiosResponse<IBaseReponse<any>>)=>{

    if(response.data.code !== 1000){
        //提示报错信息
        message.error(response.data.message)
        //抛出错误，阻塞后续程序运行
        throw new Error(response.data.message)
    }
    /* 
        正常返回
        返回给业务层的数据只希望关心业务
    */
    return response.data.data;
})

export default axios