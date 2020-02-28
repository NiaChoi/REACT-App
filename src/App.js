import React, { Component } from 'react';
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from './components/CreateContent';
import Subject from "./components/Subject";
import Control from "./components/Control";
import './App.css';


//생성자 constructor
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'create',
      selected_content_id: 0,
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
    var _title, _desc, _article = null;
    if(this.state.mode === 'Welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title = {_title} desc = {_desc} ></ReadContent>
    } else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
         }
         i = i + 1; 
        }
        _article = <ReadContent title = {_title} desc = {_desc} ></ReadContent>
      }else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        // add content to this.state.contents
      }.bind(this)}></CreateContent>
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
        <TOC 
        onChangePage={function(id){
          // alert('hi-!');
          this.setState({
            mode:'read',
            selected_content_id: Number(id)//id를 문자가 아닌숫자로 인식하게 하는 명령어->Number
          });
        }.bind(this)}
        data={this.state.contents}></TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}
  

export default App;