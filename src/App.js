var React = require('react');
var ReactDOM = require('react-dom');

var Component = function(props){
  var stylecss = {
    color: props.color
  };
  return (
    <div style={stylecss}>
      <h1> {props.greet} </h1>
  </div>
  );
}

var Componentv = function(props){
  var stylecss = {
    color: props.color
  };
  return (
    <div style={stylecss}>
      <h2> {props.greet} </h2>
  </div>
  );
}


ReactDOM.render(
  <div>
    <Componentv greet="Hello Plantow" color="green"/>
    <Component greet="Place to buy plants" color="blue"/>
    <Component greet="Place to sell plants" color="grey"/>
    <Component greet="Place to hang arounf" color="black"/>
  </div>,
  document.getElementById('root')
);
