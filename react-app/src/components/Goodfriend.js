import React,{Component} from 'react';
import {Container,TabBar,List} from 'amazeui-touch';

import '../css/gam.css';
class Goodfriend extends Component{
  render(){
    return(
        <Container className='gam-main'>
          <TabBar className='gam-msg'>
            <TabBar.Item className='ico1' icon='xiaoxi' title="消息" />
            <TabBar.Item className='ico1' icon='geren' title="朋友" />
            <TabBar.Item className='ico1' icon='qunzu' title="群组" />
          </TabBar>
          <List className='gam-new'>
            <List.Item
              media={<img src='../images/g-01.png' />}
              title="新的朋友"
            />
            <List.Item
              media={<img src='../images/g-02.jpg'/>}
              title="群通知"
            />
          </List>
        </Container>
    );
  }
}
export default Goodfriend;
