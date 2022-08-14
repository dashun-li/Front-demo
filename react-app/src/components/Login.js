//引入react
import React,{Component} from 'react';
//引入样式
import '../css/common.css';
import '../css/login.css';
import ajax from './ajax.js';

//定义组件
class Login extends Component{
  constructor(){
    super();
    this.state={user:'13428594099',pwd:'111111'};
    this.checkLogin=this.checkLogin.bind(this);
    this.changeUser=this.changeUser.bind(this);
    this.changePwd=this.changePwd.bind(this);
  }
  //自定义事件
  changeUser(e){
    this.setState({user:e.target.value});
  }
  changePwd(e){
    this.setState({pwd:e.target.value});
  }
  checkLogin(){
    ajax({
        type:'get',
        data:`user=${this.state.user}&pwd=${this.state.pwd}`,
        url:'../data.json',
        dataType:'json',
        ok:function(data){
            if(data.errCode == '0'){
              window.location.href = '#/shopping';
            }
        },
        err:function(){

        }
    });
}
  render(){
      return (
        <section id='login'>
          <header>
            <img src='../images/logo.jpg'/>
            <h1>智&nbsp;天&nbsp;下</h1>
          </header>
          <form>
            <p><span className='ico mobile'> </span><input type="text" value={this.state.user} onChange={this.changeUser}/></p>
            <p><span className='ico lock'> </span><input type="password" value={this.state.pwd} onChange={this.changePwd}/></p>
            <p><input type="button" defaultValue='登录' onClick={this.checkLogin}/></p>
            <p><a>忘记密码？</a></p>
            <p className="last_p"><a  href='#/reg'>免费注册</a>&nbsp;&nbsp;&nbsp;<a href="#">游客登录</a></p>
          </form>
        </section>
      )
  }
}
export default Login;
