import React, { Component } from 'react';

class TOC extends Component{
    render(){
      var lists = []
      var data= this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(
        <li key={data[i].id}>
          <a 
          href ={ "/content/"+ data[i].id}
         
          //  data-id={data[i].id}//숫자 속성 추출
          // onClick={function(e){
          //   e.preventDefault();
          //   this.props.onChangePage(e.target.dataset.id);//e 함수가 동작하는 a태그를 특정하여 data-id에서 id의 값을 변수로 지정
          // }.bind(this)}
          
          onClick={function(id, e){
            e.preventDefault();
            this.props.onChangePage(id);
          }.bind(this, data[i].id)}
          
          >{data[i].title}</a>
          </li>);
        //key는 react 내부적으로 지정함.
        i = i + 1;
      }
      return(
        <nav>
              <ul>
                 {lists}
              </ul>     
          </nav>
  
      );
    }
  }

  export default TOC;