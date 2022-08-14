//引入react
import React,{Component} from 'react';
//引入样式
import '../css/reg.css';
class Reg extends Component{
  constructor(){
    super();
    this.return_login=this.return_login.bind(this);
  }
  //自定义事件
  return_login(){
    location.href='#/';
  }
  render(){
      return(
        <section id="reg">
          <header> <img src='../images/jt.png' onClick={this.return_login}/>注册</header>
          <form className='main-box'>
            <div>
              <p><span>片&emsp;&emsp;&emsp;区</span><input type='text' placeholder='泸州政法委'/></p>
              <p><span>手&emsp;机&emsp;号</span><input type='text' placeholder='请输入手机号'/></p>
              <p><span>密&emsp;&emsp;&emsp;码</span><input type='text' placeholder='请输入密码'/></p>
              <p><span>确&nbsp;认&nbsp;密&nbsp;码</span><input type='text' placeholder='请输入确认密码'/></p>
              <p>
                <span>验&emsp;证&emsp;码</span>
                <input type='text' placeholder='请输入验证码'/>
                <input className='getcode' type='button' defaultValue='获取验证码'/>
              </p>
            </div>
            <p className='agree'><input type='checkbox' defaultChecked/><span>同意接受智慧社区Life使用协议</span></p>
            <p className='pbtn'><input type='button' defaultValue='下一步'/></p>
          </form>
        </section>
      )
  }
}
export default Reg;
