export default class Task extends React.Component {
  render() {
    const { task } = this.props;

    return (
      <div>
        <div>
          {task.name} - {task.description}
        </div>
      </div>
    );
  }
}
