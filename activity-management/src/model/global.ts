import { Model } from "dva";
import { ILoginResponse } from "../pages/login/login.type";
import { IPayload } from "../type";
/* 存放全局状态 */
export default{
    //命名空间
    namespace:'global',

    state:{
        token:''
    },
    /* 
        可以做异步操作
        不能直接修改state
        如果修改必须使用put方法调用
    */
    effects:{
        /* 
            保存登陆后，接口返回的信息
            payload 使我们规定一定要传
            所有的参数都在payload里面
        */
        *setUserInfo({payload}: Partial<IPayload<ILoginResponse>>,{put}){
            //调用reducers里面方法，修改对应token
            yield put({
                type:'save',
                payload
            })

            /* 接收到参数赋给state */
            console.log(payload);
        }
    },
    /* 
        里面只能放纯函数，也就是不能有副作用的函数
        比如有return
        return的是什么
        state的就是什么
    */
    reducers:{
        /* 
            为什么IPayload方法传any
            因为我们这个方法是通用的，所有的effects只调用这一个
        */
        save(state,action: Partial<IPayload<any>>){
            return {...state,...action.payload}
        }
    }
} as Model