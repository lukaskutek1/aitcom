// styles
import "./index.scss";
//stuff
import Link from "next/link";
// utilities
import fetch from "client/utils/fetch";
//components
import Login from "./login.js";

export default class App extends React.Component {
  render() {
    return (
      <div className="whole">
        <div className="main">
          <Login />
        </div>
      </div>
    );
  }
}
