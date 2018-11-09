import React from "react";
import axios from "axios";

export default class Upload extends React.Component {
  state = { selectedFile: null, loaded: 0 };

  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
  };

  handleUpload = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile, this.state.selectedFile.name);

    axios
      .post("/api/v1/upload", data, {
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100
          });
        }
      })
      .then(res => {
        console.log(res.statusText);
      });
  };

  render() {
    return (
      <div className="App">
        <input
          type="file"
          name="test"
          id=""
          onChange={this.handleselectedFile}
        />
        <button onClick={this.handleUpload}>Upload</button>
        <div> {Math.round(this.state.loaded, 2)} %</div>
      </div>
    );
  }
}
