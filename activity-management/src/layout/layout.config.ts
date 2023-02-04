/* 
    用来存放layout页面的相关配置
    也就是说这个页面里的数据，后期有可能由接口返回
*/
export const meuns = [
    {
        key: '/bannerManage',
        label: '轮播图管理',
    },
    {
        key: '/activityManage',
        label: '活动管理',
    },
    {
        key: '/userManage',
        label: '用户管理',
        children:[
            {
                key:'/userManage/registerUserCheck',
                label:'注册用户管理',
            },
            {
                key:'/userManage/adminUserAdmin',
                label:'后台用户管理',
            }
        ]
    },
]