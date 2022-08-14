
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Login from './components/login';
import Reg from './components/reg';
import Main from './components/Main';
import Shopping from './components/Shopping';
import Service from './components/Service';
import Personal from './components/Personal';
import Mserve from './components/moreserve';
import Gam from './components/Gam';
import Goodfriend from './components/Goodfriend';
import Dongtai from './components/Dongtai';
import Add from './components/Add';
import Datum from './components/Datum';
import Mycode from './components/Mycode';
import Zhengfu from './components/Zhengfu'

import 'amazeui-touch/dist/amazeui.touch.min.css';


// Render the main component into the dom
ReactDOM.render(
    // 监听hash地址改变
<Router history={hashHistory}>
    {/* 路径改变时,执行组件的代码并加入Dom中 */}
    <Route path='/' component={Login} />
    <Route path='/reg' component={Reg} />
    {/* spa路由 */}
    <Route path='/main' component={Main} >
        <IndexRoute component={Shopping} />
        <Route path='/service' component={Service} /> 
        <Route path='/gam' component={Gam}>
           <IndexRoute component={Dongtai}/>
           <Route path='/goodfriend' component={Goodfriend} />
           <Route path='/dongtai' component={Dongtai} />           
        </Route>        
        <Route path='/shopping' component={Shopping} />
        <Route path='/personal' component={Personal} />            
    </Route>

    <Route path='/moreserve' component={Mserve} />
    <Route path='/zhengfu' component={Zhengfu} />     
    <Route path='/add' component={Add} />
    <Route path='/datum' component={Datum} />
    <Route path='/mycode' component={Mycode} />
        
</Router>,
 document.getElementById('app'));
