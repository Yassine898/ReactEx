import React from "react";
export default class ToDoListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { Description: "Réviser HTML/CSS ", Completed: true },
        { Description: "Réviser mongodb ", Completed: false },
        { Description: "Réviser Javascript ", Completed: false },
      ],
      taskInput: "",
      taskCompleted: [],
      taskNonCompleted: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.AddTask = this.AddTask.bind(this);
    this.SupAll = this.SupAll.bind(this);
    this.SupCom = this.SupCom.bind(this);
    this.SupNonCom = this.SupNonCom.bind(this);
    this.NoncompletAll = this.NoncompletAll.bind(this);
    this.CompletAll = this.CompletAll.bind(this);
    this.SupTask = this.SupTask.bind(this);
    this.state.taskCompleted = this.state.tasks.filter(
      (task) => task.Completed
    );
    this.state.taskNonCompleted = this.state.tasks.filter(
      (task) => !task.Completed
    );
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  AddTask(e) {
    e.preventDefault();
    this.setState((state) => ({
      tasks: [
        ...state.tasks,
        { Description: state.taskInput, Completed: false },
      ],
    }));
  }
  SupAll() {
    this.setState({
      tasks: [],
      taskCompleted: [],
      taskNonCompleted: [],
    });
  }
  SupCom() {
    this.setState((state) => ({
      tasks: state.taskNonCompleted,
      taskCompleted: [],
    }));
  }
  SupNonCom() {
    this.setState((state) => ({
      tasks: state.taskCompleted,
      taskNonCompleted: [],
    }));
  }
  CompletAll() {
    let newArray = [];
    this.state.tasks.forEach((task) => {
      if (!task.Completed) {
        task.Completed = true;
      }
      newArray.push(task);
    });
    this.setState((state) => ({
      tasks: newArray,
      taskCompleted: state.tasks.filter((task) => task.Completed),
      taskNonCompleted: state.tasks.filter((task) => !task.Completed),
    }));
  }
  NoncompletAll() {
    let newArray = [];
    this.state.tasks.forEach((task) => {
      if (task.Completed) {
        task.Completed = false;
      }
      newArray.push(task);
    });
    this.setState((state) => ({
      tasks: newArray,
      taskCompleted: state.tasks.filter((task) => task.Completed),
      taskNonCompleted: state.tasks.filter((task) => !task.Completed),
    }));
  }
  SupTask(index) {
    const newArray = this.state.tasks.filter((_, i) => i !== index);

    this.setState({
      tasks: newArray,
      taskCompleted: newArray.filter((task) => task.Completed),
      taskNonCompleted: newArray.filter((task) => !task.Completed),
    });
  }

  render() {
    return (
      <>
        <div className="part-left">
          <div className="part-ajout">
            <fieldset>
              <legend>Ajout</legend>
              <form action="" onSubmit={this.AddTask}>
                <input
                  type="text"
                  placeholder="ajoute une tache"
                  name="taskInput"
                  value={this.state.taskInput}
                  onChange={this.handleChange}
                />
                <br />
                <button type="submit">Add</button>
              </form>
            </fieldset>
          </div>
          <div className="part-suppression">
            <fieldset>
              <legend>Suppression</legend>
              <button onClick={this.SupAll}>Tous</button>
              <button onClick={this.SupCom}>Termine</button>
              <button onClick={this.SupNonCom}>En Cours</button>
            </fieldset>
          </div>
          <div className="part-modification">
            <fieldset>
              <legend>modification</legend>
              <button onClick={this.CompletAll}>Terminer Tous</button>
              <button onClick={this.NoncompletAll}>En Cours Tous</button>
            </fieldset>
          </div>
        </div>
        <div className="part-right">
          <div className="part-top">
            <p>{this.state.tasks.length}:taches</p>
            <p>{this.state.taskCompleted.length}:Terminee</p>
            <p>{this.state.taskNonCompleted.length}: Non Terminee</p>
          </div>
          <div className="part-buttom">
            {this.state.tasks.map((task, index) => (
              <div key={index} className="task">
                <p>{task.Description}</p>
                <input type="checkbox" checked={task.Completed} readOnly />
                <button onClick={() => this.SupTask(index)}>Suppremer</button>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
