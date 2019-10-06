import React from 'react';
import './App.css';

/*const HelloWorld = (props)=>{
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.message}
    </div>
  );
}*/

class HelloWorld extends React.Component{

  state = {
    show: true
  }

  toogleShow = () =>{
    this.setState({show: !this.state.show});
  }

  render(){
    if(this.state.show){
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.message}
          <button onClick={this.toogleShow}>Toggle show</button>
        </div>
      )
    }else{
      return <h1>
        Not elemnts yet
        <button onClick={this.toogleShow}>ToogleShow</button>
      </h1>
    }
  }

}

const App = ()=> <div>This is my component: <HelloWorld message="hello world" subtitle="lorem ipsum"/></div>


export default App;
