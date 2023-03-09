import dva, { DvaOption } from "dva"
import router from "./router";
import "./index.css"
import global from './model/global'
import { IGlobalState } from "./model/type";
/* 
    初始化dva state的方法
*/
const initialIGlobalState = () =>{
    const globalLocal = JSON.parse(localStorage.getItem("gloabl")||"{}")
    /* 
        首先同步现有数据
        再同步localStorage里面的数据
        遵循后进先出
    */
    return {
        ...global.state,
        ...globalLocal
    }
}
const app = dva({
    /*
        每次state改变都会触发
        我们就可以每次改变的时候，存在localStorage里面
        在初始化的时候，再拿出来
    */
    onStateChange(state: { global: IGlobalState; }) {
        localStorage.setItem('global', JSON.stringify(state.global));
    },
    initialState: {
        global: initialIGlobalState()
    }
} as unknown as DvaOption);

app.router(router)
//引入model
app.model(global)
//挂载并启动项目
app.start("#root");