import fetch from "../../utils/fetch";

export default class CreateTask extends React.Component {
  createTask = async () => {
    const { userId } = this.props;

    const { task } = await fetch("/api/v1/tasks", "POST", {
      userId,
      name: "Prvni tasks",
      description: "Zajimavy task"
    });

    this.props.fetchTasks();
  };

  render() {
    console.info("create task", this.props);

    return (
      <div>
        <button onClick={this.createTask}>Create task</button>
      </div>
    );
  }
}
