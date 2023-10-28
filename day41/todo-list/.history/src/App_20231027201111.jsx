import Container from "./Components/Container"
import "./assets/css/style.css"

function App({ listTodo = [], handleAddTodo, handleToast }) {
     return (
          <Container listTodo={listTodo} handleAddTodo={handleAddTodo} handleToast={handleToast}></Container>
     )
}

export default App
