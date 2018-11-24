import Upload from "./upload.js";
import CreateTask from "../../components/tasks/CreateTask";
import Tasks from "../../components/tasks/Tasks";
import fetch from "../../utils/fetch";

export default class Index extends React.Component {
  static async getInitialProps({ req }) {
    return { user: req.user };
  }

  state = {
    tasks: []
  };

  fetchTasks = async () => {
    const { tasks } = await fetch("/api/v1/tasks", "GET");

    this.setState({
      tasks
    });
  };

  render() {
    const { user } = this.props;
    const { tasks } = this.state;

    if (!user) {
      return null;
    }

    return (
      <div>
        <Upload />
        <a href="/auth/v1/logout">logout</a>
        {user.name}
        <br />
        <br />
        <br />
        <CreateTask userId={user._id} fetchTasks={this.fetchTasks} />
        Tasky:
        <Tasks tasks={tasks} fetchTasks={this.fetchTasks} />
      </div>
    );
  }
}
