
function App() {
  const course = 'Half Stack application development'
  const parts = [
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
  
  const Course = (props) => {
    return(
      <h1>{props.title}</h1>
    )
  }
  const Part = (props) =>{
    return(
      <div>
        <p>{props.content[0].name} {props.content[0].exercises}</p>
        <p>{props.content[1].name} {props.content[1].exercises}</p>
        <p>{props.content[2].name} {props.content[2].exercises}</p>
      </div>
    )
  }

  const Total = (props) =>{
    return(
       <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    )
      
  }
  return (
    <>
      <Course title={course}/>
      <Part content={parts} />
      <Total parts={parts}/>
    </>
  )
}

export default App