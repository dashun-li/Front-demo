import React,{Component} from 'react';
import {Container,NavBar} from 'amazeui-touch';
import '../css/datum.css';
class Mycode extends Component{
  render(){
    return(
        <Container direction='column' id='mycode'>
          <NavBar
            title='我的二维码'
            amStyle='secondary'
            leftNav={[{href: '#/datum',icon: 'left-nav'}]}
          />
          <Container className='mycode-mainbox'>
            <img src='../images/code.png' />
          </Container>
        </Container>
    );
  }
}
export default Mycode;
