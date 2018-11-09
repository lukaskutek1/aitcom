// styles
import "./index.scss";

// utilities
import fetch from "client/utils/fetch";

export default class App extends React.Component {
  state = {
    email: "",
    password: ""
  };

  changePassword = e => {
    const password = e.target.value;
    this.setState({
      password
    });
  };

  changeEmail = e => {
    const email = e.target.value;
    this.setState({
      email
    });
  };

  doLogin = async e => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    console.log(email, password);
    const data = await fetch("/auth/v1/login", "POST", {
      email: email,
      password: password
    });

    if (data.success === true) {
      window.location = data.payload.redirect;
    }
    console.info(data);
  };

  render() {
    return (
      <div className="container">
        <img className="logo" src="https://i.imgur.com/8OwweJB.png" />
        <div className="odsazeni">
          <form onSubmit={this.doLogin} method="POST">
            <i className="fas fa-user" />
            <input
              className="textbox"
              type="text"
              name="email"
              placeholder="your@email.com"
              value={this.props.email}
              onChange={this.changeEmail}
            />
            <hr className="hrStyle" />
            <i className="fas fa-unlock-alt" />
            <input
              className="textbox"
              type="password"
              name="password"
              placeholder="password"
              value={this.props.password}
              onChange={this.changePassword}
            />
            <hr className="hrStyle" />
          </form>
          <button className="myButton" onClick={this.doLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
