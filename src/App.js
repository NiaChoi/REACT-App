import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

//생성자 constructor
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'read',
      subject: {title:'WEB', sub:'World wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!'},
      contents: [
        {id:1, title:'HTML', desc:'HTML is for information.'},
        {id:2, title:'CSS', desc:'CSS is for Design.'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive.'}
      ]
    }
  }
  //props, state 값이 변하면 render함수를 불러옴.
  render() {
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'Welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        <Subject 
        title = {this.state.subject.title} 
        sub = {this.state.subject.sub}
        onChangePage={function(){
          this.setState({mode:'Welcome'});
        }.bind(this)}
        >
        </Subject>

        {/* <header>
              <h1><a href="/" onClick={function(e){
                console.log(e);
                // this.state.mode= 'Weolcome'; -> state를 components로 사용하기 위해 onClick의 함수를 .bind(this)로 묶어줌 ->state가 변한것을 모르기때문에 mode를 적용
                this.setState({
                  mode: 'Welcome'//객체형태
                })
                e.preventDefault();//이벤트의 기본동작(reload)를 막는 방법
              }.bind(this)}>{this.state.subject.title}</a></h1>
              {this.state.subject.sub}
          </header> */}
        
        <TOC data={this.state.contents}></TOC>
        <Content title = {_title} desc = {_desc} ></Content>
      </div>
    );
  }
}
  

export default App;