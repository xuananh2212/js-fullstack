import Container from "./Components/Container"
import "./assets/css/style.css"

function App({ listTodo = [], handleAddTodo }) {
     console.log(handleAddTodo);
     return (
          <Container listTodo={listTodo} handleAddTodo={handleAddTodo}></Container>
     )
}

export default App
