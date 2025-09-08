
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
        <p>{props.content.name} {props.content.exercises}</p>
      </div>
    )
  }

  const Total = (props) =>{
    return(
       <p>Number of exercises {props.p1.exercises + props.p2.exercises + props.p3.exercises}</p>
    )
      
  }
  return (
    <>
      <Course title={course}/>
      <Part content={parts[0]} />
      <Part content={parts[1]} />
      <Part content={parts[2]} />
      <Total p1={parts[0]} p2={parts[1]} p3={parts[2]}/>
    </>
  )
}

export default App