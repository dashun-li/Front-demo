import React,{Component} from 'react';
import {Container,TabBar,Icon} from 'amazeui-touch';
import {Link} from 'react-router';
import '../css/common.css';
import '../css/gam.css';
class Gam extends Component{
  constructor(){
    super();
    this.toAdd=this.toAdd.bind(this);
  }
  //自定义事件
  toAdd(){
    location.href='#/add';
  }
  render(){
    return(
        <Container id='gam' direction='column'>
          <TabBar  amStyle="secondary" className='gam-head'>
            <TabBar.Item component={Link} to='/gam' title="动态" />
            <TabBar.Item component={Link} title="贴吧" />
            <TabBar.Item component={Link} title="活动" />
            <TabBar.Item component={Link} to='/goodfriend' title="好友" />
          </TabBar>
          <Icon name='plus' className='ico-plus' onClick={this.toAdd}> </Icon>
          {this.props.children}
        </Container>
    );
  }
}
export default Gam;
