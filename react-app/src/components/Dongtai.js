import React,{Component} from 'react';
import '../css/gam.css';
class Dongtai extends Component{
  render(){
    return(
      <section className='gm-dt'>
        <div className='gm-dt-list'>
          <img className='img1' src='../images/h-img.jpg'/>
          <div className='content'>
            <h4>风景</h4>
            <p> 人呢？<br/><img src='../images/cate-01.jpg' /></p>
          </div>
        </div>
      </section>
    );
  }
}
export default Dongtai;
