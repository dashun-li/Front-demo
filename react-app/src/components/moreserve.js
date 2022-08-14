import React,{Component} from 'react';
import '../css/moreserve.css';


import { Container,  NavBar, List} from 'amazeui-touch';

class Mserve extends Component{
    render(){
        return(
            <Container direction='column'>
                <Container id='mserve' direction='column'>
                    <NavBar leftNav={[{icon: 'left-nav',href:'#/service'}]} title='更多服务' amStyle='secondary' rightNav={[{icon:"arrow"}] }/>
                    {/* shopping main */}
                    <Container id='main'>
                        <List>
                            <List.Item
                                media={<img src='../images/icon/5_1.png'/>}
                                title="百度搜索"
                                href="#"
                            />
                            <List.Item
                                media={<img src='../images/icon/5_2.png'/>}
                                title="天气查询"
                                href="#"
                            />
                            <List.Item
                                media={<img src='../images/icon/5_3.png'/>}
                                title="快递查询"
                                href="#"
                            />
                            <List.Item
                                media={<img src='../images/icon/5_4.png'/>}
                                title="在线咨询"
                                href="#"
                            />
                            <List.Item
                                media={<img src='../images/icon/5_5.png'/>}
                                title="优酷直播"
                                href="#"
                            />
                            <List.Item
                                media={<img src='../images/icon/5_6.png'/>}
                                title="江苏智天下"
                                href="#"
                            />
                        </List>
                    </Container>
                    {/* shopping main end*/}
                </Container>
               
            </Container>
        )
    }

}

export default Mserve;
