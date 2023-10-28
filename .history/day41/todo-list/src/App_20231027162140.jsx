import Container from "./Components/Container"
import "./assets/css/style.css"

function App({ listTodo }) {
     return (
          <Container listTodo={listTodo}></Container>
     )
}

export default App
