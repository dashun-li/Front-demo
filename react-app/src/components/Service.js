import React,{Component} from 'react';
import {Container,NavBar,Group,Grid,Col} from 'amazeui-touch';

import '../css/service.css';
class Service extends Component{
  constructor(){
    super();
    this.moreService=this.moreService.bind(this);
    this.toNotice=this.toNotice.bind(this);
  }
  //自定义事件
  moreService(){
      location.href='#/moreserve';
  }
  toNotice(){
    location.href='#/Zhengfu';
  }
  render(){
    return(
          <Container id='service' direction='column'>
            <NavBar title='服务' amStyle='primary' />
            <Container className='main-content'>
                <Group header="政务服务" >
                    <Grid avg={4} className='content-list'>
                      <Col onClick={this.toNotice}><a><img src='../images/s1.jpg'/>政府公告</a></Col>
                      <Col><a><img src='../images/s2.jpg'/>政府宣传</a></Col>
                      <Col><a><img src='../images/s3.jpg'/>居民意见</a></Col>
                      <Col><a><img src='../images/s4.jpg'/>办事指南</a></Col>
                      <Col><a><img src='../images/s5.jpg'/>社区党建</a></Col>
                      <Col><a><img src='../images/s6.jpg'/>就业创业</a></Col>
                      <Col onClick={this.moreService}><a><img src='../images/s7.jpg'/>更多服务</a></Col>
                    </Grid>
                </Group>
                <Group header="生活服务" >
                  <Grid avg={4} className='content-list'>
                    <Col><a><img src='../images/s8.jpg'/>小区公告</a></Col>
                    <Col><a><img src='../images/s9.jpg'/>缴费管理</a></Col>
                    <Col><a><img src='../images/s10.jpg'/>家政服务</a></Col>
                    <Col><a><img src='../images/s11.jpg'/>物业服务</a></Col>
                    <Col><a><img src='../images/s12.jpg'/>快递服务</a></Col>
                    <Col><a><img src='../images/s13.jpg'/>房屋出租</a></Col>
                    <Col><a><img src='../images/s14.jpg'/>洗衣店</a></Col>
                    <Col><a><img src='../images/s15.jpg'/>便民电话</a></Col>
                    <Col><a><img src='../images/s16.jpg'/>二手物品</a></Col>
                    <Col><a><img src='../images/s17.jpg'/>店铺申请</a></Col>
                    <Col onClick={this.moreService}><a><img src='../images/s7.jpg'/>更多服务</a></Col>
                  </Grid>
                </Group>
            </Container>
          </Container>
    );
  }
}
export default Service;
