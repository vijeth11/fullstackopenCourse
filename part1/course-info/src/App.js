import React from 'react'
import { Content } from './content/content.component'

import { Header } from './header/header.component'
import { Total } from './total/total.component'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total total = {course.parts.reduce((prev, current) => {return {...prev,exercises:prev.exercises + current.exercise}}).exercises}/>
    </div>
  )
}

export default App;
