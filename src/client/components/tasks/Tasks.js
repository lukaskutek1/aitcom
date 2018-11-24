import fetch from "../../utils/fetch";

// components
import Task from "./Task";

export default class Tasks extends React.Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    const { tasks } = this.props;

    return (
      <div>
        {tasks.map(task => (
          <Task key={task._id} task={task} />
        ))}
      </div>
    );
  }
}
