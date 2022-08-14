import React,{Component} from 'react';
import {Container,NavBar,List} from 'amazeui-touch';
import '../css/datum.css';
class Datum extends Component{
  render(){
    return(
      <Container direction='column' id='datum'>
        <NavBar
          title='我的资料'
          amStyle='secondary'
          leftNav={[{href: '#',icon: 'left-nav'}]}
          rightNav={[{title:'保存'}]}
        />
        <Container className='datum-mainbox'>
          <div className='datum-img'><img src='../images/h-img.jpg'/></div>
          <List>
            <List.Item href="#" after="Sirius" title="昵称" />
            <List.Item href="#" after="保密" title="性别" />
            <List.Item href="#" after="2016-11-17" title="生日" />
            <List.Item href="#/mycode" after="" title='二维码'/>
            <List.Item href="#" after=""  title='个性签名'/>
          </List>
          <List className='datum-addr'>
            <List.Item href="#" after="修改/添加" title="收货地址" />
          </List>
          <List className='datum-editpwd'>
            <List.Item href="#" after="修改" title="登录密码" />
          </List>
          <button>退出登录</button>
        </Container>
      </Container>
    );
  }
}
export default Datum;
