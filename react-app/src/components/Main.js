import React,{Component} from 'react';
import {Link} from 'react-router';
import '../css/common.css';
//引入amazeUI组件模块
import {Container,TabBar} from 'amazeui-touch';
class Main extends Component{
  constructor(){
    super();
    this.changeColor=this.changeColor.bind(this);
  }
  //自定义事件
  changeColor(e){
    var btools = document.getElementById('btools');
    var a = btools.getElementsByTagName('a');
    for(var i = 0; i < a.length; i++){
      if(i == e){
        a[i].style.color='#18B4ED';
      }else{
        a[i].style.color='';
      }
    }
  }
  render(){
    return(
      <Container direction="column">
        {this.props.children}
        <TabBar id='btools' onAction={this.changeColor}>
          <TabBar.Item component={Link} style={{color:'#18B4ED'}} to='/shopping' icon="shop" title="购物" />
          <TabBar.Item component={Link} to='/service' icon="gear" title="服务" />
          <TabBar.Item component={Link} to='/gam' icon="users" title="社交" />
          <TabBar.Item component={Link} to='/personal' icon="user" title="我的" />
        </TabBar>
      </Container>
    );
  }
}
export default Main;
