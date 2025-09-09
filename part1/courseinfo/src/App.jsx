
function App() {
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

  const Course = (props) => {
    return (
      <h1>{props.title['name']}</h1>
    )
  }
  const Part = (props) => {
    return (
      <div>
        <p>{props.content.parts[0].name} {props.content.parts[0].exercises}</p>
        <p>{props.content.parts[1].name} {props.content.parts[1].exercises}</p>
        <p>{props.content.parts[2].name} {props.content.parts[2].exercises}</p>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <p>Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}</p>
    )

  }
  return (
    <>
      <Course title={course} />
      <Part content={course} />
      <Total parts={course} />
    </>
  )
}

export default App