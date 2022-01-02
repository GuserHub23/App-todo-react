import TodoList from "./components/TodoList"
import Footer from "./components/Footer"

const App = () => {

  return (
    <>
      <div className="body--todo">
        <div className="container p-3 mt-5 app--todo">
          <h1>App de tareas</h1>
          <TodoList/>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
