import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const Header =(props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Part = (props) => {
  return(
    <div>
      <p>{props.part} {props.exc}</p>
    </div>
  )
}
const Content = (props) =>{
  return(
    <div>
      <Part  part = {props.part1} exc = {props.exc1} />
      <Part  part = {props.part2} exc = {props.exc2}/>
      <Part  part = {props.part3} exc = {props.exc3}/>
    </div>
  )
}
const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.exc1 + props.exc2 + props.exc3}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return(
    <div>
    <Header course={course} />
    <Content part1={part1} part2={part2} part3 = {part3} exc1 ={exercises1} exc2 = {exercises2} exc3={exercises3}   />
    <Total exc1 ={exercises1} exc2 = {exercises2} exc3={exercises3}    />
    </div>
  )
}
ReactDOM.render(<App />,  document.getElementById('root')
);

