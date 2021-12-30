import TodoList from "./components/TodoList"

const App = () => {

  return (
    <div className="container w-75 p-3 mt-5 app--todo">
      <h1>App de tareas</h1>
      <TodoList/>
    </div>
  )
}

export default App
