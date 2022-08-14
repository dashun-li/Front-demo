import React,{Component} from 'react';
//引入amazeUI组件模块
import {TabBar} from 'amazeui-touch';
class Btools extends Component{
  render(){
    return(
      <TabBar id='btools'>
        <TabBar.Item selected icon="shop" title="购物" />
        <TabBar.Item icon="gear" title="服务" />
        <TabBar.Item icon="users" title="社交" />
        <TabBar.Item icon="user" title="我的" />
      </TabBar>
    );
  }
}
export default Btools;
