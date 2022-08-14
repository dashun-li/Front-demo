import React,{Component} from 'react';
import {Container,NavBar,Field,Icon,List} from 'amazeui-touch';
import '../css/add.css';
class Add extends Component{
  render(){
    return(
      <Container direction='column' id='add'>
        <NavBar
          title='添加'
          amStyle='secondary'
          leftNav={[{href: '#/gam',icon: 'left-nav'}]}
        />
        <Container className='add-mainbox'>
          <Field
            placeholder="账号名称"
            labelBefore={<Icon name="search" />}
          />
          <List>
            <List.Item
              title='扫一扫'
              subTitle="扫描二维码添加好友或群组"
              media={<img src='../images/5.1_03.png'/>}
              href='#'
            />
            <List.Item
              title='创建群组'
              subTitle="与身边的朋友进入同一个群聊"
              media={<img src='../images/5.1_06.png'/>}
              href='#'
            />
            <List.Item
              title='查找群组'
              subTitle="按账号和群名称查找群组"
              media={<img src='../images/5.1_08.png'/>}
              href='#'
            />
          </List>
          <List>
            <List.Item
              title='附近好友'
              subTitle="添加附近好友"
              media={<img src='../images/5.1_11.png'/>}
              href='#'
            />
          </List>
        </Container>
      </Container>
    );
  }
}
export default Add;
