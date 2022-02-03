import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';



const selectRouter = createFeatureSelector<RouterReducerState>("router");
export const {
    //获取和当前路由相关的信息（路由参数params,queryParams，路由配置routeConfig等）
    selectCurrentRoute,
    //获取地址栏中#后面的内容,http://localhost:4200/#a 获取#后面内容就是a
    selectFragment,
    //获取路由查询参数
    //http://localhost:4200/?name=zhangsan&age=20 获取到{name: 'zhangsan', age: '20'}
    selectQueryParams,
    //获取具体的某一个查询参数selectQueryParam('name')
    selectQueryParam,
    //获取动态路由参数
    selectRouteParams,
    //获取某一个具体的动态路由参数 selectRouteParam('name')
    selectRouteParam,
    //获取路由自定义数据
    /*在路由配置中添加
    data:{ //自定义数据
      a:"用户自定义数据a"
    }   
    得到{a: '用户自定义数据a'}
    */
    selectRouteData,
    //获取路由实际访问地址
    selectUrl

} = getSelectors(selectRouter);