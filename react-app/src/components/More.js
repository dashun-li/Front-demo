import React,{Component} from 'react';
import {Container,NavBar,List} from 'amazeui-touch';
import '../css/service.css';
class More extends Component{
  render(){
    return(
        <Container direction='column' id='more'>
          <NavBar
            title='更多服务'
            amStyle='secondary'
            leftNav={[{href: '#/service',icon: 'left-nav'}]}
          />
          <Container className='more-mainbox'>
            <List>
              <List.Item
                media={<img src='../images/9_03.png'/>}
                title="百度搜索"
                href="#"
              />
              <List.Item
                media={<img src='../images/9_06.png'/>}
                title="天气查询"
                href="#"
              />
              <List.Item
                media={<img src='../images/9_08.png'/>}
                title="快递查询"
                href="#"
              />
              <List.Item
                media={<img src='../images/9_10.png'/>}
                title="在线问诊"
                href="#"
              />
              <List.Item
                media={<img src='../images/9_12.png'/>}
                title="优酷直播"
                href="#"
              />
              <List.Item
                media={<img src='../images/9_14.png'/>}
                title="江苏智天下"
                href="#"
              />
            </List>
          </Container>
        </Container>
    );
  }
}
export default More;
