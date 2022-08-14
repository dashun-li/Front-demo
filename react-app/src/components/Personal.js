import React,{Component} from 'react';
import {Container,NavBar,List,Grid,Col,Icon} from 'amazeui-touch';
import '../css/personal.css';

class Personal extends Component{
  render(){
    return(
          <Container id='personal' direction='column'>
            <NavBar title='个人中心' amStyle='primary'  />
            <Container className='main-box'>
              <section className='personal-head'>
                <img className='personal-head-img' src='../images/h-img.jpg'/>
                <div className='personal-head-msg'>
                  <span className='personal-head-text'>Sirius 保密</span>
                  <p><img   src='../images/jifen.png'/>积分&emsp;<span>120</span><i>已签到</i></p>
                </div>
                <Icon name='right-nav'> </Icon>
              </section>
              <Grid avg={3} className='personal-nav'>
                <Col><a href='#'><img src='../images/6_1.jpg' /><span className='text'>兑换码<br/> 0</span></a></Col>
                <Col><a href='#'><img src='../images/6_2.jpg' /><span className='text'>我的收藏<br/> 0</span></a></Col>
                <Col><a href='#'><img src='../images/6_3.jpg' /><span className='text'>我的钱包<br/> 0</span></a></Col>
              </Grid>

              <List className='personal-list'>
                <List.Item
                  media={<span className='icon-hongbao'> </span>}
                  // after="2015.08"
                  title="我的红包"
                  href="#"
                />
                <List.Item
                  media={<span className='icon-fabu'> </span>}
                  // after="2015.08"
                  title="我发布"
                  href="#"
                />
              </List>
              <List className='personal-list'>
                  <List.Item
                    media={<span className='icon-dingdan'> </span>}
                    title="普通订单"
                    href="#"
                  />
                  <List.Item
                    media={<span className='icon-peisong'> </span>}
                    title="配送订单"
                    href="#"
                  />
                  <List.Item
                    media={<span className='icon-tuangou'> </span>}
                    title="团购订单"
                    href="#"
                  />
                  <List.Item
                    media={<span className='icon-jifen'> </span>}
                    title="积分订单"
                    href="#"
                  />
                  <List.Item
                    media={<span className='icon-fuwu'> </span>}
                    title="服务订单"
                    href="#"
                  />
                </List>
              <List className='personal-list'>
                <List.Item
                  media={<span className='icon-shouye-copy'> </span>}
                  after="切换"
                  title="万科新城"
                  href="#"
                />
              </List>
              <List className='personal-list'>
                <List.Item
                  media={<span className='icon-dianhua'> </span>}
                  title="客服电话"
                  href="#"
                />
              </List>
              <List className='personal-list'>
                <List.Item
                  media={<span className='icon-dianhua'> </span>}
                  title="投诉建议"
                  href="#"
                />
              </List>
            </Container>
          </Container>
    );
  }
}
export default Personal;
