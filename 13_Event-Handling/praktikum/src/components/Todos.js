import { Component } from "react";
import "./Todos.css";
// import "../App.css";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      data: [
        {
          id: 1,
          title: "mengerjakan exercise",
          completed: true,
        },
        {
          id: 2,
          title: "mengerjakan assignment",
          completed: false,
        },
      ],
    };
  }

  addTodo(newData) {
    this.setState({
      data: [...this.state.data, newData],
    });
  }

  deleteTodo(id) {
    const todos = [...this.state.data];
  
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      data: [...newTodos],
    });
  }

  onChangeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitHandle = (e) => {
    e.preventDefault();
    const newData = {
      id: this.state.data.length + 1,
      title: this.state.todo,
      completed: false,
    };


    this.addTodo(newData);
    this.setState({
      todo: "",
    });
  };

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("enter");
      this.onSubmitHandle(e);
    }
  };

  completedChange(id) {
  
    const todos = [...this.state.data];
    todos[id - 1].completed = !todos[id - 1].completed;
    this.setState({
      data: [...todos],
    });

    console.log(todos);
  }

  render() {
    const data = this.state.data;
    const todo = this.state.todo;

   
    console.log(data);
    return (
      <div className="main">
        <div className="title-todos">todos</div>

        <div className="todo-input">
          <input
            type="text"
            placeholder="Add todo..."
            name="todo"
            value={this.state.todo}
            onChange={this.onChangeHandle}
            onKeyPress={this.onKeyPress}
          />
          <button onClick={this.onSubmitHandle}>Submit</button>
        </div>

        {data.map((item) => (
          <div key={item.id} className="todos">
            <div className="result">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => this.completedChange(item.id)}
              />
              {item.completed ? (
                <div className="title correct">{item.title}</div>
              ) : (
                <div className="title ">{item.title}</div>
              )}
            </div>
            <div
              className="btn-delete"
              onClick={() => this.deleteTodo(item.id)}
            >
              <span>Delete</span>
            </div>
          </div>
        ))}
      </div>
   
    );
  }
}

export default Todos;