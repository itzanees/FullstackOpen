
function App() {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
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
      <Part content={part1} />
      <Part content={part2} />
      <Part content={part3} />
      <Total p1={part1} p2={part2} p3={part3}/>
    </>
  )
}

export default App