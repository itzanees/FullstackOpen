
function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const content = [
    {name:part1, ex:exercises1},
    {name:part2, ex:exercises2},
    {name:part3, ex:exercises3},
  ]
  
  const Course = (props) => {
    return(
      <h1>{props.title}</h1>
    )
  }
  const Part = (props) =>{
    return(
      <div>
        <p>{props.content.name} {props.content.ex}</p>
      </div>
    )
  }

  const Total = (props) =>{
    return(
       <p>Number of exercises {props.content[0].ex + props.content[1].ex + props.content[2].ex}</p>
    )
      

  }
  return (
    <>
      <Course title={course}/>
      <Part content={content[0]} />
      <Part content={content[1]} />
      <Part content={content[2]} />
      <Total content={content}/>
    </>
  )
}

export default App