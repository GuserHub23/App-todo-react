const Todo = ({todo, eliminarTodo, editarTodo}) => {

    const {id, nombre, estado, descripcion, prioridad} = todo

    return (
        <li className="list-group-item d-flex justify-content-between align-items-start li--todo">
            <div className="ms-2 me-auto">
                <div className="fw-bold">
                    {nombre} ({estado ? 'Finalizado' : 'Pendiente'})
                </div>
                <p className="app--descripcion">{descripcion}</p>
            </div>

            <div>
                <span className="badge bg-black rounded-pill fw-bold">
                    {prioridad && "Prioritario"}
                </span>
                <div>
                    <button 
                        className="btn btn-danger me-2"
                        onClick={() => eliminarTodo(id)}
                    >
                        Eliminar
                    </button>
                    <button 
                        className="btn btn-secondary"
                        onClick={() => editarTodo(id)}
                    >
                        Estado
                    </button>
                </div>
            </div>
      </li>
    )
}

export default Todo
