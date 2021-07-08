// import logo from './logo.svg';
import React from 'react';
import './App.css';



function Message(props) {
  return <p className="try">  {props.text} </p>
}


class MesClass extends React.Component {
  render() {
    return <p className='newStyle' > {this.props.mess}  <h1>Hello</h1></p>

  }
}


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Message text="My first React testing!" />
        <MesClass mess='Try class' />
        <p className='newV'> {props.message}</p>
      </header>
    </div>
  );
}

export default App;
