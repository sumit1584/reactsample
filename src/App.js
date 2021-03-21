import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name:'Sumit',age:35},
      {name:'Akshi',age:32},
      {name:'Amu',age:33}
    ],
    otherState:'some other value'
  }
  
  switchNameHandler = (newName) => {
    //console.log('was clicked');
    //Dont do this : this.state.persons[0].name ='Jinaral';
    this.setState({persons:[
      {name:newName,age:35},
      {name:'Akshi',age:33},
      {name:'Amu',age:34}
    ]})
    console.log(this.state);
  }

  nameChangedHandler = (event) => {
    this.setState({persons:[
      {name:'sumit',age:35},
      {name:event.target.value,age:33},
      {name:'Amu',age:34}
    ]})
  }

  render() {
    const style ={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }
    return (
      <div className="App">
       <h1>Hi,First react app.</h1>
       <button style={style} onClick={() => this.switchNameHandler('SumitJinaral')}>Switch Name</button>
       <div>
          <Person name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'sam')}
          changed={this.nameChangedHandler}>some text here</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
       </div>
      </div>      
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'First react App.'));
  }
}

export default App;
