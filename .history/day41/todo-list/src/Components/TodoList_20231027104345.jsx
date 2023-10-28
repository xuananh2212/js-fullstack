import { Component } from 'react'

export default class TodoList extends Component {
     constructor(props) {
          super(props);
          this.props = props;
          this.state = {
               todos: [],
          }

     }

     render() {
          return (
               <div>TodoList</div>
          )
     }
}
