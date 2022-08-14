import React,{Component} from 'react';
import {Container,NavBar,List} from 'amazeui-touch';
import '../css/service.css';
class Zhengfu extends Component{
  render(){
    return(
      <Container direction='column' id='notice'>
        <NavBar
          title='政府公告'
          amStyle='secondary'
          leftNav={[{href: '#/service',icon: 'left-nav'}]}
        />
        <Container className='notice-mainbox'>
          <List>
            <List.Item
              media={<img src='../images/4_03.jpg'/>}
              title="关于继续降低职工医疗保险企业交费比例的通知"
            />
            <List.Item
              media={<img src='../images/4_06.jpg'/>}
              title="江苏省教育厅公告"
            />
            <List.Item
              media={<img src='../images/4_06.jpg'/>}
              title="无锡市军队转业干部安置考试考核办法"
            />
            <List.Item
              media={<img src='../images/4_06.jpg'/>}
              title="无锡房管局公布无锡楼市利好政策"
            />
            <List.Item
              media={<img src='../images/4_06.jpg'/>}
              title="江苏省政府任免通知"
            />
            <List.Item
              media={<img src='../images/4_08.jpg'/>}
              title="铲积雪   净化心灵"
            />
            <List.Item
            media={<img src='../images/4_03.jpg'/>}
            title="刘延东在我省调研教育科技卫生工作"
           />
            <List.Item
              media={<img src='../images/4_10.jpg'/>}
              title="关于拟同意设立无锡市科元技工学校的公示"
            />
            <List.Item
              media={<img src='../images/4_12.jpg'/>}
              title="关于转发'2016双创计划申报工作'通知"
            />
          </List>
        </Container>
      </Container>
    );
  }
}
export default Zhengfu;
