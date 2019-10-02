import React, { Component } from "react";
import "./AddTask.css";
class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate
  };

  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleCheckbox = e => {
    this.setState({
      checked: e.target.checked
    });
  };

  handleDate = e => {
    this.setState({
      date: e.target.value
    });
  };

  handleClick = () => {
    const { text, checked, date } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate
        });
      }
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    // console.log(maxDate);
    maxDate = maxDate + "-12-31";

    return (
      <div className="form">
        <h2>TODO APP</h2>
        <input
          type="text"
          placeholder="Dodaj zadanie"
          value={this.state.text}
          onChange={this.handleText}
        />
        <input
          type="checkbox"
          checked={this.state.checked}
          id="important"
          onChange={this.handleCheckbox}
        />
        <label id="important" htmlFor="important">
          Priorytet
        </label>
        <br />
        <br />
        <label id="date" htmlFor="date">
          Termin zadania:
        </label>
        <input
          type="date"
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
          onChange={this.handleDate}
        />
        <br />
        <button onClick={this.handleClick}>Dodaj</button>
      </div>
    );
  }
}

export default AddTask;
