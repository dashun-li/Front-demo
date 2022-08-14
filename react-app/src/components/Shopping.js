import React,{Component} from 'react';
//引入amazeUI组件模块
import {Container,NavBar,Slider,Grid,Col,List,Group} from 'amazeui-touch';

//引入样式

import '../css/shopping.css';

class Shopping extends Component{
  render(){
    return(
        <Container id='sp' direction='column'>
            <NavBar title='购物' amStyle='primary' rightNav={[{ icon: 'search'}]} />
            <Container className='mainbox'>
                <Slider>
                    <Slider.Item>
                      <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
                    </Slider.Item>
                    <Slider.Item>
                      <img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />
                    </Slider.Item>
                    <Slider.Item>
                      <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg" />
                    </Slider.Item>
                    <Slider.Item>
                      <img src="http://s.amazeui.org/media/i/demos/bing-4.jpg" />
                    </Slider.Item>
                </Slider>
                <Grid avg={4} className='sp-nav'>
                  <Col><a href='#'><img src='../images/n1.png' />周边</a></Col>
                  <Col><a href='#'><img src='../images/n2.png' />外卖</a></Col>
                  <Col><a href='#'><img src='../images/n3.png' />生活超市</a></Col>
                  <Col><a href='#'><img src='../images/n4.png' />团购</a></Col>
                  <Col><a href='#'><img src='../images/n5.png' />积分商城</a></Col>
                  <Col><a href='#'><img src='../images/n6.png' />热卖</a></Col>
                  <Col><a href='#'><img src='../images/n7.png' />新店推荐</a></Col>
                  <Col><a href='#'><img src='../images/n8.png' />活动</a></Col>
                </Grid>
                <Grid avg={3} className='sp-img'>
                  <Col><a href='#'><img src='../images/cate-01.jpg' /></a></Col>
                  <Col><a href='#'><img src='../images/cate-02.jpg' /></a></Col>
                  <Col><a href='#'><img src='../images/cate-03.jpg' /></a></Col>
                </Grid>
                <Group header="猜你喜欢" noPadded className='sp-fav'>
                    <List>
                          <List.Item
                            title='牛仔裤'
                            target="_blank"
                            subTitle='牛仔裤牛仔裤牛仔裤'
                            href='http://music.163.com/#/album?id=31308'
                            media={<img width="80" src='../images/cate-01.jpg' />}
                          />
                    </List>
                </Group>
          </Container>
        </Container>
    );
  }
}
export default Shopping;
