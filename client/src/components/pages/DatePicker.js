import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';

class DateTime extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <DateTimePicker
          onChange={this.onChange}
          value={this.state.date}
          className="dateSpacing"
        />
      </div>
    );
  }
}
export default DateTime;